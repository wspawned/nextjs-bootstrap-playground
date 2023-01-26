import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import { useEffect } from "react";
import { Roboto } from '@next/font/google'
import ConsentCookie from "../components/ConsentCookie/ConsentCookie";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
})

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
};

export default App;
