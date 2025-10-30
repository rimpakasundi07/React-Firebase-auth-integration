import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  // onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };
  // get current user info
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("inside observer: if", currentUser);
  //   } else {
  //     console.log("inside observer: else", currentUser);
  //   }
  // });

  // ex:  useEffect(() => {}, []);
  //useEffect(() => {
  // step - 1 : observer set
  // step -2 : set in a variable
  // step -3 : return and call the variable  so that you can clear the ref
  //}, []);

  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);
      setUser(currentUser);
    });
    // clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    // createUser: createUser,
    user,
    createUser,
    signInUser,
    signOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

/**
 *
 *  1. create a context and export
 *  2. create a provider -- so that you can resuse the context in different places
 *  3. ensure you use the children prop
 *  4. make sure use the auth provider in the router
 *  5. make the create user with email and password shared via provider
 *  6. set createUser in the authInfo object to share via context
 */
