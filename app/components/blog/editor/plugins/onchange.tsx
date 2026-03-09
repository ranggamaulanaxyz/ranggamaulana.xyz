import type { EditorState } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

export default function OnchangePlugin({ onChange }: { onChange?: (editorState: EditorState) => void}) {
    const [ editor ] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            // guard against undefined callback
            onChange?.(editorState);
        });
    }, [editor, onChange])

    return null
}