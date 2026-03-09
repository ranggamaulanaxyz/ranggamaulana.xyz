import {$getRoot, $getSelection, type EditorState} from 'lexical';
import {useEffect} from 'react';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import Placeholder from './placeholder';
import theme from './theme';
import OnchangePlugin from './plugins/onchange';

// Text editor placeholder
const placeholder = "Enter some text..."

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

export default function RichEditor({ onChange }: { onChange?: (editorState: EditorState ) => void}) {
  const initialConfig = {
    namespace: "Blog Posts Editor",
    theme: theme,
    onError: onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="relative">
        <RichTextPlugin
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
      <OnchangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}