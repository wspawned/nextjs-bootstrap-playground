import { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

const ConsentCookie = () => {
  const [isShown, setIsShown] = useState(true);
  const closeConsent = () => setIsShown(false);

  return(
    isShown &&
    <CookieConsent
    buttonText="Sure man!!"
    cookieName="consent-cookie"
    enableDeclineButton
    onDecline={closeConsent}
    // declineButtonStyle = {{backgroundColor:"pink", width:"100px"}}
    // buttonStyle = {{backgroundColor:"green", width:"100px"}}

    containerClasses="flex "
    contentClasses = "block w-full align-baseline"
    buttonWrapperClasses = "flex flex-row w-full md:w-1/3 justify-evenly md:justify-end"
    declineButtonClasses = "bg-primary-200 w-[100px] rounded "
    buttonClasses = "bg-primary-300 w-[100px] rounded "
    

    >This website uses cookies to enhance the user experience.
    </CookieConsent>
  )
};

export default ConsentCookie;