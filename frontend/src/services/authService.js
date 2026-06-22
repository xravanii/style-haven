import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { auth } from "../firebase";

const googleProvider = new GoogleAuthProvider();
const API = "http://localhost:5000/api";
export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider);

export const registerWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () =>
  signOut(auth);

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API}/auth/login`,
    userData
  );

  return response.data;
};

export const updateRole = async (
  userId,
  role
) => {
  const response = await axios.put(
    `${API}/auth/role`,
    {
      userId,
      role,
    }
  );

  return response.data;
};