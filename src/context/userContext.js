import { createContext } from "react";


export const UserContext = createContext();

// export const UserProvider = ({ Component, pageProps }) => {
//   return (
//     <UserContext.Provider value="Reed">
//       <Component {...pageProps} />
//     </UserContext.Provider>
//   );
// }

// export default function App() {
//   return (
//     <UserContext.Provider value="Reed">
//       <User />
//     </UserContext.Provider>
//   )
// }

// function User() {
//   return (
//     <UserContext.Consumer>
//       {value => <h1>{value}</h1>} 
//       {/* prints: Reed */}
//     </UserContext.Consumer>
//   )
// }