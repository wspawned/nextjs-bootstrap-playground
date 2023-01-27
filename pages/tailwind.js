import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { CLOCKWORK_LYRICS, KVKK } from '../utils/validation.constant';

Modal.setAppElement("#__next");

const Tailwind = () => {

  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
    router.push('/tailwind?kvkk=open', undefined, { shallow: true });
  }
  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "unset";
    router.push('/tailwind', undefined, { shallow: true });
  }

  useEffect(()=>{
    if(router.asPath === "/tailwind?kvkk=open"){
      openModal()
    } else {
    closeModal()  
    }
    console.log(router.asPath)
  }, [router.asPath])

  return (
    <div className="flex flex-col items-center bg-primary-300 py-16 gap-12 ">
      <h1 className="text-lg text-3xl font-bold text-primary-100 underline underline-offset-8 decoration-black">
        Tailwind Things
      </h1>

      <div className="flex h-[400px] w-3/5 justify-center align-center text-center bg-stone-300 p-4 gap-4">
        <div
          className="flex h-full w-2/3
        bg-[url('../public/images/upside-down.jpg')] bg-cover bg-origin-content "
        ></div>

        <div className="flex flex-col h-full w-1/3  gap-4 ">
          <div
            className=" h-1/2 w-full bg-blue-700 
          bg-[url('../public/images/public-enemy.jpg')] bg-cover bg-origin-content"
          ></div>
          <div
            className=" h-1/2 w-full bg-red-400 
          bg-[url('../public/images/scott.png')] bg-contain bg-origin-content bg-no-repeat bg-right"
          ></div>
        </div>
      </div>

      <div className="flex h-[390px] w-full  text-center bg-stone-400 p-4 mt-8 justify-center">
        <div
          className="h-full w-1/6 bg-red-800 hover:cursor-pointer
        bg-[url('../public/images/qotsa.jpg')]  bg-cover"
          onClick={() => {
            openModal();
          }}
        ></div>

        <div className=" flex flex-col h-full bg-white p-8 ">
          <h2 className="text-lg text-3xl font-bold text-primary-100 ">
            ... LIKE CLOCKWORK
          </h2>
          <p className="whitespace-pre-line truncate ...">{CLOCKWORK_LYRICS}</p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => closeModal()}
      >
        <div className="flex flex-col w-full h-min-full bg-primary-300 justify-center text-center text-stone-300">
          <h1 className="text-lg text-3xl font-bold">
            Q.O.T.S.A - ... LIKE CLOCKWORK lyrics
          </h1>
          <p className="whitespace-pre-line text-sm text-left ">{KVKK}</p>
        </div>
      </Modal>

      <div className="flex  w-full  text-left bg-stone-200 p-4 mt-8">
        <p className="whitespace-pre-line">{KVKK}</p>
      </div>
    </div>
  );
};

export default Tailwind;