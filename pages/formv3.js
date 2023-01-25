import { createRef, useEffect, useRef, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link';
import Script from "next/script";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


const Form = () => {
  const site_key = "6LfSBykkAAAAAD34FPq3_bNeTFcOoIOD82c6JRaq";

  const { executeRecaptcha } = useGoogleReCaptcha();


  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      const token = await executeRecaptcha();
      console.log(token);
    },
    [executeRecaptcha]
  );

  return (
    <>
    <main>
      <div className="flex flex-col w-full justify-center items-center gap-12">
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <label htmlFor="location">
            Location
            <br/>
            <input id="location" placeholder="location"></input>
          </label>
          
          <button className="w-1/2 block" type="submit">Submit</button>
        </form>
      </div>
      <Link href="/">
        <button>Home</button>
      </Link>

      
    </main>
    </>
    
  );
};

export default Form;
