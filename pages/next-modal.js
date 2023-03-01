import { useState } from "react";
import Modal from "../src/Modal";

const NextModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {setShowModal(false)};

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      <h1 className="text-3xl">Next Modal Page</h1>
      <p>Try Button</p>
      <p>⇩⇩⇩</p>
      <button
        className="bg-teal-100 p-2"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>

      {showModal ? (
        <Modal>
          <div className="absolute top-0 flex flex-col w-screen h-screen justify-center items-center bg-teal-100">
            <h1 className="text-3xl" >Fresh Modal Page</h1>
            <p>Try Button</p>
            <p>⇩⇩⇩</p>
            <button
              className="bg-white p-2"
              onClick={() => {setShowModal(false)}}
            >
              Close Modal
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default NextModalPage;