import axios from "axios";
import { useState } from "react";

const UploadImage = () => {
  const [imgFile, setImgFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    if(!imgFile) return
    const formData = new FormData();
    formData.append("myImage",imgFile);
    await axios({
      method: "post",
      url: "/api/uploadImage",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    // console.log(formData.get("myImage"))
    
    // .post("/api/uploadImage", data={formData})
  }

  return (
    <div className="flex flex-col w-screen h-screen align-center pt-24 gap-8 ">
      <p className="text-center text-2xl">Upload image to uploads/images folder</p>
      {/* <p className="text-center text-xl">and show it to me</p> */}

      <div className="flex flex-col w-1/3 p-6 bg-teal-100 mx-auto rounded " >
        <input type="file" id="file-upload"
        onChange={(e) => {
          if(e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImgFile(file); 
          }
        }}
        />
      </div>

      <div className="flex flex-row white shadow-md w-full justify-center gap-12 p-2 " >
        <button
          className="bg-[#B6E0D7] rounded p-2 px-4"
          onClick={() => {handleUpload()}}
        >
          Upload Img
        </button>
      </div>

      {
        imgFile ?
        <div>
          <p> name: {imgFile.name} </p>
          <p> type: {imgFile.type} </p>
          <p> size: {imgFile.size} </p>
        </div>
        :
        null
      }

    </div>
  );
}

export default UploadImage;