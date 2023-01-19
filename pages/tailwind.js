import Image from 'next/image';

const Tailwind = () => {

  return (
    <div className="flex flex-col h-screen items-center bg-primary-300 py-8 px-12 ">
      <h1 className="text-lg text-3xl font-bold text-primary-100 py-5">
        Tailwind Things
      </h1>

      <div className="flex h-1/2 w-3/5 justify-center align-center text-center bg-gray-400 p-4">
        <div className="flex h-full w-2/3
        bg-[url('../public/images/upside-down.jpg')] bg-cover bg-origin-content "
        >
          

        </div>

        <div className="flex-col h-full w-1/3 ">
          <div className=" h-1/2 w-full bg-blue-700 
          bg-[url('../public/images/public-enemy.jpg')] bg-cover bg-origin-content"></div>
          <div className=" h-1/2 w-full bg-gray-400 
          bg-[url('../public/images/scott.png')] bg-contain bg-origin-content bg-no-repeat bg-right"></div>
        </div>

      </div>
    </div>
  );
};

export default Tailwind;