import {createContext, useState} from "react"

export const IsSideMenuOpenContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <IsSideMenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </IsSideMenuOpenContext.Provider>
  );
};