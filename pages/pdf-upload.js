import axios from "axios";
import { useState } from "react";

const PdfUploadPage = () => {
  const [title, setTitle] = useState("");
  const [pdf,setPdf] = useState();

  const handleUpload = async () => {
    if(!pdf) return;
    const formData = new FormData();
    formData.append("myPdf",pdf);
    formData.append("myTitle",title);

    const {data} = await axios.post("/api/pdf/uploadPdf", formData)
    console.log(data)
  }

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      <h1 className="text-3xl">PDF Upload</h1>
      <div className="flex flex-col gap-2 my-4">
        <label className="flex items-center font-bold ml-5" htmlFor="pdf-title">
          File title
          <input
            className="border gray shadow-sm pl-2 font-normal ml-4 grow"
            type="text"
            id="pdf-title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label className="flex items-center" htmlFor="pdf-file"></label>
        <input
          className="border gray shadow-sm"
          type="file"
          id="pdf-file"
          onChange={({target}) => {
            if(target.files && target.files[0] ) {
              const file = target.files[0];
              // //
              setPdf(file);
            }
          }}
        />
      </div>

      <button
        className="bg-teal-100 p-2 rounded"
        onClick={() => {
          handleUpload();
        }}
      >
        Upload PDF
      </button>
    </div>
  );
}

export default PdfUploadPage;