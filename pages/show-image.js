import axios from "axios";
import { useState } from "react";

const ShowImage = () => {
  const [imgOpen, setImgOpen] = useState(false);
  const toggleImage = () => { setImgOpen(!imgOpen) }
  const [img, setImg] = useState("")

  const getImage = async (name) => {
    await axios.get("/api/getImage",
      {
        params: {
          name: name,
        }
      }
    ).then((res) => {
      // setImg(res.data);
      const imgString = res.data;
      const imgToBlob = imgString.blob();
      console.log(imgToBlob)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="flex flex-col w-screen h-screen align-center pt-24 ">
      <p className="text-center text-2xl">Read some image file from folder</p>
      <p className="text-center text-xl">and show it to me</p>
      <button
        className="bg-teal-100 rounded p-2 px-4"
        onClick={async() => {
          await getImage("scott.png");
          toggleImage();
        }}
      >
        See Image
      </button>

      {imgOpen ? (
        <div className="flex flex-col w-full grow justify-center align-center bg-stone-100">
          <p className="text-center">Here it is</p>

          {/* <img
          src={URL.createObjectURL(img)}
          /> */}

          <div
            className=" h-1/2 w-full
          bg-[url('../public/images/scott.png')] bg-contain bg-origin-content bg-no-repeat bg-right"
          ></div>
        </div>
      ) : null}

    </div>
  );
};

export default ShowImage;