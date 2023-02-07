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

  return(
    <div className="flex flex-col bg-primary-300 w-screen h-screen justify-center items-center" >
      <p className='text-3xl' >Create New Post</p>
      <Editor
      editorState={editorState}
      onEditorStateChange={ () =>  setEditorState}
      wrapperClassName="wrapper-class"
      toolbarClassName="toolbar-class"
      editorClassName="editor-class"
      />
      <textarea
      disabled
      value={draftToHtml(editorState.getCurrentContent())}
      />
    </div>
  )
};

export default TextEditor;