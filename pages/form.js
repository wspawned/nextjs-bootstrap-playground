import { createRef, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link';
import Script from "next/script";

const Form = () => {
  const site_key = "6Lei0R8kAAAAAB_hExnVUTqzZ18MaHbYooYtC5YM";
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    await e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    const captchaId = recaptchaRef.current.getWidgetId();
    console.log("Val >>>" , recaptchaValue);
    await recaptchaRef.current.reset(0);
    recaptchaRef.current = null;
    console.log("Ref >>>" , recaptchaRef);
  }

  useEffect(()=>{
    if(recaptchaRef === null) {
      return
    } else {
      console.log(recaptchaRef.current);
      recaptchaRef.current?.reset(0);
      // recaptchaRef.current = null;
      console.log(">>>>>" , recaptchaRef.current);
    }

  },[])

  return (
    <>
    {/* <Script src="https://www.google.com/recaptcha/api.js" async defer></Script> */}
    {/* <Script src="https://www.recaptcha.net/recaptcha/api.js" async defer></Script> */}
    <main>
      <div className="flex flex-col w-full justify-center items-center gap-12">
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <label htmlFor="location">
            Location
            <br/>
            <input id="location" placeholder="location"></input>
          </label>

          <ReCAPTCHA
            ref={recaptchaRef}
            size="normal"
            sitekey={site_key}
            onLoad={() => {
              console.log("render")
            }}
            onExpired={()=>recaptchaRef.current.reset()}
          />
          
          <button className="w-1/2 block" type="submit">Submit</button>
        </form>
      </div>
      <Link href="/">
        <button>Home</button>
      </Link>

          {/* <Script src="https://www.google.com/recaptcha/api.js" async defer></Script> */}
          {/* <Script src="https://www.recaptcha.net/recaptcha/api.js" async defer></Script> */}
    </main>
    </>
    
  );
};

export default Form;
