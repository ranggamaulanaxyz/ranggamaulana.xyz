import type { Session } from "react-router"
import type { SessionData, SessionFlashData } from "./session.server"

type ApiOptions = RequestInit & {
    session?: Session<SessionData, SessionFlashData>
    retry?: boolean
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export function buildApiEndpoint(url: string): string {
    if (/^https?:\/\//i.test(url)) {
        return url
    }

    const base = API_URL.replace(/\/$/, "")
    const path = url.startsWith("/") ? url : `/${url}`

    return `${base}${path}`
}

export async function api<T = any>(url: string, options: ApiOptions = {}) {
    const {session, retry, ...fetchOptions} = options;
    const endpoint = buildApiEndpoint(url);
    const headers = new Headers(options.headers);
    if (session?.has("accessToken")) {
        const token = session?.get("accessToken");
        headers.set("Authorization", `Bearer ${token}`);
    }
    const response = await fetch(endpoint, {
        ...fetchOptions,
        headers: headers
    })

    if (response.status === 41 && retry) {
        try {
            await refreshToken();
            return api<T>(endpoint, {...options, retry: false, session: session})
        } catch {
            console.log("err");
        }
    }

    let data: any = null

    try {
        data = await response.json();
    } catch {
        data = null
    }

    if (!response.ok) {
        console.log("err");
    }

    return data as T
}

async function refreshToken() {
    const endpoint = buildApiEndpoint("/auth/token/refresh")
    const response = await fetch(endpoint, {
        method: "POST",
    })

    let data: any = null

    try {
        data = await response.json()
    } catch {
        data = null
    }

    if (!response.ok) {
        throw new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}