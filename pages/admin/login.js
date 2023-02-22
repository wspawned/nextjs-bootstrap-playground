import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie-consent";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  const handleLogin = () => {
    Cookies.set('userName', user);
    Cookies.set("tokenTime", Date.now())
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      <h1 className="text-3xl">Login</h1>
      <p>{router.asPath}</p>

      <div className="flex flex-row gap-2 my-4">
        <label 
        className="flex items-center"
        htmlFor="user" > userName: </label>
        <input
          className="border gray shadow-sm"
          type="text"
          id="user"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </div>

      <button
        className="bg-teal-100 p-2"
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;