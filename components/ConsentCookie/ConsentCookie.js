import { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

const ConsentCookie = () => {
  const [isShown, setIsShown] = useState(true);
  const closeConsent = () => setIsShown(false);
  const acceptConsent = () => console.log("accepted")

  return(
    isShown &&
    // <CasualCookieConsent
    // acceptConsent={acceptConsent}
    // closeConsent={closeConsent}
    // />

    <CookieConsent
    buttonText="OK"
    cookieName="consent-cookie"
    enableDeclineButton
    onAccept={acceptConsent}
    onDecline={closeConsent}
    setDeclineCookie={false}
    declineButtonText="Nope"

    disableStyles={true}

    containerClasses="bg-[#264796] bg-zinc-800 flex flex-col fixed bottom-0 left-0 
    w-full md:w-[300px] lg:w-[600px] md:gap-5 p-2 px-3 "
    buttonWrapperClasses="bg-[#264796] bg-zinc-800 flex justify-evenly p-2"

    buttonClasses="bg-[#F3F9FF] w-[100px] color-black-100 "
    declineButtonClasses="bg-[#264796] bg-zinc-800 w-[100px] text-white  underline"
    contentClasses="text-white md:pt-4"

    >This website uses cookies to enhance the user experience. See our
    {" "}
    <span className="underline hover:cursor-pointer">Cookie Policy</span>
    {" "}to learn more about it.
    </CookieConsent>
  )
};

export default ConsentCookie;

export const CasualCookieConsent = ({acceptConsent, closeConsent}) => {
  return (
    <CookieConsent
    buttonText="OK"
    cookieName="consent-cookie"
    enableDeclineButton
    onAccept={() => acceptConsent()}
    onDecline={() => closeConsent()}
    setDeclineCookie={false}
    declineButtonText="Nope"

    style={{backgroundColor: "#264796"}}
    declineButtonStyle={{backgroundColor: "#264796", color:"white",width:"100px",textDecoration:"underline"}}
    buttonStyle={{backgroundColor: "#F3F9FF",color:"black",width:"100px",}}

    containerClasses=""
    contentClasses=""
    buttonWrapperClasses=""
    declineButtonClasses=""
    buttonClasses=""

    >This website uses cookies to enhance the user experience.
    </CookieConsent>
  )
};