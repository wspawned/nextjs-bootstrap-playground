import { useEffect } from "react";

const DownloadPdf = () => {
  let initialized = false

  const downloadFileAtURL = () => {
    const location = window.location.origin;
    const fileURL = `${location}/downloads/Test.pdf`;
    // const fileURL = `${location}/downloads/zipp.zip`;
    // const fileURL = `${location}/downloads/jugulator.jpg`;
    const fileName = "denemePdf";
    const aTag = document.createElement("a");
    aTag.href = fileURL;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  useEffect(()=>{
    downloadFileAtURL();
  },[])

  return(
    <></>
  )
}

export default DownloadPdf;