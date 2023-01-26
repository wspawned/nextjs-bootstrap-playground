import Link from 'next/link';
import { useCallback } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const site_key = "6LfSBykkAAAAAD34FPq3_bNeTFcOoIOD82c6JRaq";

export const Form = () => {
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
    <main>
      <div className="flex flex-col w-full justify-center items-center gap-12">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="location">
            Location
            <br />
            <input id="location" placeholder="location"></input>
          </label>

          <button className="w-1/2 block" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Link href="/">
        <button>Home</button>
      </Link>
    </main>
  );
};

const WrappedForm = () => {
  return (
    <GoogleReCaptchaProvider
    reCaptchaKey={site_key}
    scriptProps={{
      async: false,
      defer: false,
      appendTo: "head",
      nonce: undefined,
    }}
  >
    <Form/>
  </GoogleReCaptchaProvider>
  )
};

export default WrappedForm;
