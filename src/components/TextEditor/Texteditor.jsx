import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser";
export default function TextEditor(){
    const [text, setText] = useState("")
    return(
        <div class="TextEditor">
            <div class="editor">
                <CKEditor
                
                    editor={ClassicEditor}
                    data={text}
                    onChange= {(event, editor) => {
                        const data= editor.getData()
                        setText(data)
                    }}
                />
            </div>   
            <div>
                <h2>Content</h2>
                <p>{parse(text)}</p>
            </div>        
        </div>


    );
}