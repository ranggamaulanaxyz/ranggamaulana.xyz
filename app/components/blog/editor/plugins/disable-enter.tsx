import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {KEY_ENTER_COMMAND, COMMAND_PRIORITY_CRITICAL} from "lexical";
import {useEffect} from "react";

export default function DisableEnterPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      KEY_ENTER_COMMAND,
      (event: KeyboardEvent | null) => {
        event?.preventDefault();
        return true;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor]);

  return null;
}