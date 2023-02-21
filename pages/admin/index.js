import { useRouter } from "next/router";

const AdminPage = () => {
  const router = useRouter();

  return(
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      <h1 className="text-3xl" >wellccome</h1>
      <p>{router.asPath}</p>
    </div>
  )
}

export default AdminPage;