import React, { createContext, useContext, useReducer, useEffect } from "react";
import { CatalogoQr } from "./CatalogoQr";

const ScannerContext = createContext();

const initialState = {
  scanned: JSON.parse(localStorage.getItem("scannedQRs") || "[]"),
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_QR":
      if (state.scanned.includes(action.payload)) return state;         
      const updated = [...state.scanned, action.payload];
      localStorage.setItem("scannedQRs", JSON.stringify(updated));      
      return { ...state, scanned: updated };
    case "RESET":
      localStorage.removeItem("scannedQRs");
      return { scanned: [] };
    default:
      return state;
  }
}

export const ScannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ScannerContext.Provider value={{ state, dispatch }}>
      {children}
    </ScannerContext.Provider>
  );
};

export const useScanner = () => useContext(ScannerContext);
