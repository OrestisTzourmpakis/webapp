import React, { createContext, useState } from "react";

export const CompanyDetailsContext = createContext();
export function CompanyDetailsContextProvider({ children }) {
  const [company, setCompany] = useState(null);
  return (
    <CompanyDetailsContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyDetailsContext.Provider>
  );
}
