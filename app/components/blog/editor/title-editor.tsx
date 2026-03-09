import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import Placeholder from './placeholder';
import theme from './theme';
import OnchangePlugin from './plugins/onchange';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { TextNode, type EditorState } from 'lexical';
import DisableEnterPlugin from './plugins/disable-enter';

// Text editor placeholder
const placeholder = "Type you post title here..."

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

export default function TitleEditor({ onChange }: { onChange?: (editorState: EditorState ) => void}) {
  const initialConfig = {
    namespace: "Blog Post Title Editor",
    theme: theme,
    onError: onError,
    nodes: [
      TextNode,
      
    ]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="relative">
        <PlainTextPlugin
          contentEditable={
            <ContentEditable
              className="focus-visible:outline-none focus:ring-0 focus:shadow-none"
              aria-placeholder={placeholder}
              placeholder={<Placeholder placeholder={placeholder} />}
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <HistoryPlugin />
      <DisableEnterPlugin />
      <OnchangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}