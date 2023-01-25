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

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfSBykkAAAAAD34FPq3_bNeTFcOoIOD82c6JRaq"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >


    <main className={roboto.className}>
      <Component {...pageProps} />
      <ConsentCookie/>
    </main>

    </GoogleReCaptchaProvider>
  )
}

export default App;
