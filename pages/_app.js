import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import { useEffect, useState } from "react";
import { Roboto } from '@next/font/google'
import ConsentCookie from "../components/ConsentCookie/ConsentCookie";
import { useRouter } from "next/router";
import { UserContext, UserProvider } from "../src/context/userContext";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
})

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const router = useRouter();

  if(router.pathname.startsWith("/admin")) {
    return(
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    )
  }

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
      <ConsentCookie/>
    </main>  
  )
};

export default App;
