import { createContext, useState } from "react";


const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);

  return (
    <UserContext.Provider value={{userName, setUserName}}  >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;