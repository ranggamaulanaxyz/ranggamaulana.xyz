import type React from "react";

export function BlogWidget({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

export function BlogWidgetContent({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-4 py-2">
            {children}
        </div>
    )
}