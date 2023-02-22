import { useRouter } from "next/router";

const ProfilePage = () => {
  const router = useRouter();

  return(
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      <h1 className="text-3xl" >Profile</h1>
      <p>{router.asPath}</p>
    </div>
  )
}

export default ProfilePage;