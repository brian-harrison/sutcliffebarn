import { createContext, useContext, useState } from "react";

const Context = createContext();

export function OldIdProvider({ children }) {
  const [oldId, setOldId] = useState(7);
  return (
    <Context.Provider value={[oldId, setOldId]}>{children}</Context.Provider>
  );
}

export function useIdContext() {
  return useContext(Context);
}


// OldIdProvider has to be added to the layout component
