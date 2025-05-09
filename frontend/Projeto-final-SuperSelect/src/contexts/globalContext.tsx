// src/MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface IGlobalContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  saveTokenLocalStorage: (token: string) => void;
  getTokenLocalStorage: () => string | null;
}

// Create the context with a default value
const MyGlobalContext = createContext<IGlobalContext | undefined>(undefined);

// Create a provider component
export function GlobalProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Initial state
  function saveTokenLocalStorage(token: string) {
    localStorage.setItem('jwtToken', token);
    return;
  }

  function getTokenLocalStorage(): string | null {
    const token = localStorage.getItem('jwtToken');

    return token;
  }
  const context: IGlobalContext = { isLoggedIn, setIsLoggedIn, saveTokenLocalStorage, getTokenLocalStorage };
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
