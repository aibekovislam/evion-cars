import { createContext, useContext, useState } from 'react';

const VisitorUidContext = createContext();

export function useVisitorUid() {
  return useContext(VisitorUidContext);
}

export function VisitorUidProvider({ children }) {
  const [visitorUid, setVisitorUid] = useState('');

  return (
    <VisitorUidContext.Provider value={{ visitorUid, setVisitorUid }}>
      {children}
    </VisitorUidContext.Provider>
  );
}
