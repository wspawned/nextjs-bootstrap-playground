import dynamic from 'next/dynamic'

const Editor = dynamic(() =>
  import('react-draft-wysiwyg').then((mod) => mod.Editor), {
    ssr: false,
  }
)

import { EditorState, convertToRaw } from 'draft-js';
import { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  return (
    <>
      <div className="flex flex-col bg-primary-300 w-screen min-h-screen justify-star items-center pt-24 gap-8">
        <h1 className="text-3xl">Create New Post</h1>
        <div>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            toolbarClassName="toolbar-class"
            editorClassName="bg-white min-h-[250px] "
          />
          <h2 className="text-xl py-2 text-center">Preview as HTML</h2>
          <textarea
          className='w-full min-h-[150px] justify-center text-center '
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>
      </div>
    </>
  );
};

export default TextEditor;