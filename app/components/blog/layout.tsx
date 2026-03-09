import type React from "react";

export function BlogWrapper({ children }: { children: React.ReactNode}) {
    return (
        <div className="container mx-auto grid min-h-screen grid-cols-1 gap-2 p-4 md:grid-cols-[1fr_240px] xl:grid-cols-[300px_1fr_300px]">
            {children}
        </div>
    )
}

export function BlogSidebar({ children, hideInMobileView = false, }: { children: React.ReactNode, hideInMobileView?: boolean}) {
    return (
        <aside className={`${hideInMobileView ? "hidden xl:block" : ""}`}>
            <div className="sticky top-18">
                {children}
            </div>
        </aside>
    )
}

export function BlogMain({ children }: { children: React.ReactNode}) {
    return (
        <main>
            <article className="prose lg:prose-xl">
                {children}
            </article>
        </main>
    )
}