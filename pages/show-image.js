import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const ShowImage = () => {
  const [imgOpen, setImgOpen] = useState(false);
  const toggleImage = () => { setImgOpen(!imgOpen) }
  const [img, setImg] = useState("")

  // const getImage = async (name) => {
  //   await axios.get("/api/getImage",
  //     {
  //       params: {
  //         name: name,
  //       }
  //     }
  //   ).then((res) => {
  //     // setImg(res.data);
  //     const imgString = res.data;
  //     // const imgToBlob = imgString.blob();
  //     // console.log(imgString)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }

  const images = [
    {
      src: "qotsa.jpg",
      alt: "qotsa",
    },
    {
      src: "roses.jpg",
      alt: "roses",
    },
    {
      src: "scott.png",
      alt: "scott",
    },
    {
      src: "IMG_20170302_221847.jpg",
      alt: "panda",
    },
    {
      src: "10365854_802991556406201_4020911227129465805_n.jpg",
      alt: "anarch",
    },
    {
      src: "arson.jpg",
      alt: "arson",
    },
  ]

  return (
    <div className="flex flex-col w-screen h-screen align-center pt-24 ">
      <p className="text-center text-2xl">Read some image files from folder</p>
      <p className="text-center text-xl">and show it to me</p>
      <button
        className="bg-teal-100 rounded p-2 px-4"
        onClick={async() => {
          // await getImage("scott.png");
          toggleImage();
          // setImg("10365854_802991556406201_4020911227129465805_n.jpg")
        }}
      >
        See Images
      </button>

      {imgOpen ? (
        <div className="flex flex-col w-full grow justify-center align-center bg-[#B6E0D7]">
          

          {/* <img
          src={`/api/getImage?name=${img}`}
          /> */}

          <ImageCarousel images={images} />

          {/* <div
            className={`h-1/2 w-full
            bg-[url(/api/getImage?name=${img})] bg-contain bg-origin-content bg-no-repeat bg-right`}
          ></div> */}
        </div>
      ) : null}

    </div>
  );
};

export default ShowImage;

export const ImageCarousel = ({images}) => {
  return (
    <div className="container w-full grid grid-cols-3 gap-2 mx-auto">
      {
        images.map((image, index)=>{return (
          <div key={index} className="relative w-full h-[250px] rounded ">
            <Image
            src={`/api/getImage?name=${image.src}`}
            alt={image.alt}
            className="w-full h-full object-center object-cover absolute"
            fill
            />

            {/* <img
              src={`/api/getImage?name=${image.src}`}
              alt={image.alt}
              width="250px"
            /> */}
          </div>
        );})
      }
    </div>
  );
}