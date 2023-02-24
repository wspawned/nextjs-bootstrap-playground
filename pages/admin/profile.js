import { useRouter } from "next/router";
import { useContext } from "react";
import { Cookies } from "react-cookie-consent";
import { UserContext } from "../../src/context/userContext";

const ProfilePage = () => {
  const router = useRouter();
  const { userName } = useContext(UserContext);

  // const user = Cookies.get('user')
  // console.log(user)

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      <h1 className="text-3xl">Profile</h1>
      <p>{router.asPath}</p>
      <p>{userName}</p>

      <button
        className="bg-teal-100 p-2 mt-16"
        onClick={() => {
          router.push("login")
        }}
      >
        Login
      </button>
    </div>
  );
};

export default ProfilePage;