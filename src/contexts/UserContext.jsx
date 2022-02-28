import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { login } from "../services/userService";

export function useAuth() {
  const [authed, setAuthed] = useState({
    id: "",
    username: "",
    email: "",
    role: "",
    authed: false,
  });

  useEffect(() => {
    console.log("useAuth called");
  }, []);

  // if we are admin
  const [companyOwnerEmail, setCompanyOwnerEmail] = useState(null);

  const userLogin = async (model) => {
    const userDetails = await login(model);
    // const checkIfAdmin = userDetails.roles.filter(
    //   (c) => c === roles.Administrator || c === roles.CompanyOwner
    // );
    console.log("Ta data apo to user context:", userDetails);
    if (userDetails.roles.length > 0) throw "Go to admin!";
    // setJwtUser(userDetails);;
    // se the user here!!
    const userObject = {
      id: userDetails.id,
      username: userDetails.userName,
      email: userDetails.email,
    };
    // setUser(userObject);
    setAuthed({ ...userObject, authed: true });
  };

  const userDetailObject = (userDetails) => {
    // se the user here!!
    const obj = {
      id: userDetails.id,
      username: userDetails.userName,
      email: userDetails.email,
    };
    return obj;
  };

  const setUserContextObject = (response) => {
    console.log("To response sto usercontext:", response);
    setAuthed({ ...authed, ...response, authed: true });
  };

  const changeCompanyOnwer = (email) => {
    setCompanyOwnerEmail(email);
  };

  return {
    authed,
    userLogin,
    setUserContextObject,
    userDetailObject,
    setAuthed,
    companyOwnerEmail,
    changeCompanyOnwer,
  };
}

export const UserContext = createContext();
export function UserContextProvider(props) {
  const auth = useAuth();
  useEffect(() => {
    console.log("usercontext called!!!");
  }, []);

  return (
    <UserContext.Provider value={{ ...auth }}>
      {props.children}
    </UserContext.Provider>
  );
}
