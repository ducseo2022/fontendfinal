import "./write.css";
import axios from "axios";
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

export default function Write() {
  const url="http://localhost:3001/post"
  

  const [data,setData] = useState({
      title: "",
      content: "",
      image: "",
  })
  function submit(e){
    if(!data.title){
      alert('empty title');
      return;
    }
    if(!data.content){
      alert('empty content');
      return;
    }
    if(!data.image){
      alert('empty image');
      return;
    }
    e.preventDefault();
    axios.post(url,{
      title: data.title,
      content: data.content,
      image: data.image
      

    } )
    .then(res=>{
      
    })
  }

  function handle(e){
      const newdata={...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
     
  }

  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          data.image=(downloadURL)
          
        });
      }
    );
  };
  return (
    
    <div className="write">
      <div className="Upload">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      </div>

      <form className="writeForm" onSubmit={(e) => submit(e) } >
    
        <div className="writeFormGroup">
          
          <input
            onChange={(e) => handle(e)}
            value={data.title}
            id="title"
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />

        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={(e) => handle(e)}
            id="content"
            value={data.content}          
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}

          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}