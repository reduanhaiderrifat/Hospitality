import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reloade, setReloade] = useState(false);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider).then(() => {
      toast.success("user login with Google");
    });
  };
  const handleTwitter = () => {
    signInWithPopup(auth, twitterProvider).then(() => {
      toast.success("user login with Twitter");
    });
  };
  const handleFacebook = () => {
    signInWithPopup(auth, faceBookProvider).then(() => {
      toast.success("user login with Facebook");
    });
  };
  const cteateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = async (username, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    }).then(() => {
      setReloade(true);
    });
  };

  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    cteateUser,
    singInUser,
    user,
    logOut,
    loading,
    handleGoogle,
    handleTwitter,
    updateUser,
    handleFacebook,
    setReloade,
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, [reloade]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
