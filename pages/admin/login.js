import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Cookies } from "react-cookie-consent";
import UserContext from "../../src/context/userContext";

const LoginPage = () => {
  const {setUserName} = useContext(UserContext)

  const mockJWT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTY3NzE4NjEzMiwiZXhwIjoxNjc3MTg5NzMyfQ.V0kCfDLNYenvDF8QI3xjr5W-BjwoMIXY9mCSZvgJ-e8"

  const router = useRouter();
  const [user, setUser] = useState("");

  const handleLogin = () => {
    // Cookies.set('userName', user);
    // Cookies.set("tokenTime", Date.now());
    setUserName(user);

    const parsedJWT = parseJwt(mockJWT);
    const stringJasonJWT = JSON.stringify(parsedJWT);
    // Cookies.set('user', parsedJWT);
    console.log(parsedJWT)
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
          router.push("profile")
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;

export const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}