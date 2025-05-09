// src/MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface IGlobalContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
const MyGlobalContext = createContext<IGlobalContext | undefined>(undefined);

// Create a provider component
export function GlobalProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // Initial state
  const context: IGlobalContext = { isLoggedIn, setIsLoggedIn };
  return <MyGlobalContext.Provider value={context}>{children}</MyGlobalContext.Provider>;
}

// Custom hook to use the context
export function useGlobalContext() {
  const context = useContext(MyGlobalContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
}
