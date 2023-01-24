import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

import { useEffect } from "react";
import ConsentCookie from "../components/ConsentCookie/ConsentCookie";

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
      <ConsentCookie/>
    </main>
  )
}

export default App;
