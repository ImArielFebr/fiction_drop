import PenulisLayout from "../../Layouts/PenulisLayout";
import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

const placeholder = "Enter some rich text...";

function onError(error) {
    console.error(error);
}

function PenulisIndex() {
    const initialConfig = {
        namespace: "MyEditor",
        theme,
        onError,
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
        </LexicalComposer>
    );
}

PenulisLayout.layout = (page) => <PenulisLayout children={page} />;

export default PenulisIndex;
