import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [cartProduct, setProductCart] = useState(() => {
    const savedData = localStorage.getItem("cartProduct");

    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);

  return (
    <MyStore.Provider value={{ cartProduct, setProductCart }}>
      {children}
    </MyStore.Provider>
  );
};
