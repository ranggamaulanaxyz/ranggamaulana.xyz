import type { EditorState } from "lexical";
import { useState } from "react";
import Editor from "~/components/blog/editor/rich-editor";

export default function BlogEdit() {
    const [content, setContent] = useState<EditorState>();

    const handleEditorChange = (editorState: EditorState) => {
        setContent(editorState)
    }

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_300px] container mx-auto">
            <main className="min-h-screen container mx-auto">
                <article className="prose lg:prose-xl">
                    <header className="not-prose">
                        <h1 className="text-5xl leading-tight text-slate-900 mb-1">
                            Welcome to my blog, Lorem Ipsum Dolor sit Amet and Something
                        </h1>
                    </header>
                    <Editor onChange={handleEditorChange} />
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