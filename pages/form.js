import { createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link';

const Form = () => {
  const site_key = "6Lei0R8kAAAAAB_hExnVUTqzZ18MaHbYooYtC5YM";
  const recaptchaRef = createRef();

  

  return (
    <main>
      <div className="flex flex-col w-full justify-center items-center gap-12">
        <form onSubmit={(e) => {
          e.preventDefault();
          // console.log(recaptchaRef.current.getValue());
          console.log(recaptchaRef.current);
        }}>
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
          />
          
          <button className="w-1/2 block" type="submit">Submit</button>
        </form>
      </div>
      <Link href="/">
        <button>Home</button>
      </Link>
    </main>
  );
};

export default Form;
