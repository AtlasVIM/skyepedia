import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import { useState } from 'react';


    const modules = {
        toolbar: [
            [{"header":'0'}, {'header':'2'}, {'font':[]}],
            [{size:[]}],
            ["bold", "italic", "underline", 'strike', 'blockquote'],
            [{'list':'ordered'}, {'list':'bullet'}, {'indent':'-2'}, {'indent':'+1'}],
            ['link', "image"], ['clean'], ['code-block']
        ]
    }

    const formats = [

    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "imageBlot"
    ]


export default function CreatePage() {

    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')
    const [content, setContent] = useState('')

    async function createNewPage(e) {
        const data = new FormData();
        data.set('title', title)
        data.set('content', content)
        data.set('file', cover[0])
        e.preventDefault();
        console.log(cover)
        const response = await fetch('http://localhost:4000/post' , {
            method: 'POST',
            body: data
        });
    }

    return(
        <div>
            <form onSubmit={createNewPage} >
                <input type="title" 
                 placeholder="Title" 
                 value={title} 
                 onChange={e => setTitle(e.target.value)}>
                </input>

                <input type="file" onChange={e => setCover(e.target.files)} ></input>
                <select placeholder='Select'>
                    <option value={'world '}></option>
                    <option value={'character-npc'}></option>
                    <option value={'character-player'}></option>
                    <option value={'character-player'}></option>
                </select>
                <ReactQuill 
                 value={content}
                 onChange={newValue => setContent(newValue)} 
                 modules={modules} 
                 formats={formats}/>
                <button style={{marginTop:'5px'}}>Create Page</button>
            </form>
        </div>
    )
}