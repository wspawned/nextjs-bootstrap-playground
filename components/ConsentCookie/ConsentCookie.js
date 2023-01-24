import { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

const ConsentCookie = () => {
  const [isShown, setIsShown] = useState(true);

  return(
    <CookieConsent
    buttonText="Sure man!!"
    cookieName="consent-cookie"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    >This website uses cookies to enhance the user experience.
    <button onClick={()=> setIsShown(false)}
    className="float-right">No let me out !</button>
    </CookieConsent>
  )
};

export default ConsentCookie;