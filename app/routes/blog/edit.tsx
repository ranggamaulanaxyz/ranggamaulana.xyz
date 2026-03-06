import Editor from "~/components/blog/editor";

export default function BlogEdit() {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_300px] container mx-auto">
            <main className="min-h-screen container mx-auto">
                <article>
                    <header>
                        <h1>Welcome to my blog</h1>
                    </header>
                    <Editor />
                    <footer>

                    </footer>
                </article>
            </main>
            <aside>
                test
            </aside>
        </div>
    )
}