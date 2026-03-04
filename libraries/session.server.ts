import { Session } from "inspector";
import { createCookie, createCookieSessionStorage } from "react-router";

export type SessionData = {
    accessToken: string
    refreshToken: string
}

export type SessionFlashData = {
    error?: string
}

export const sessionStorage = createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
        name: "session",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "lax",
        path: "/",
        secure: false,
        secrets: ["s3cret1"],
    }
})