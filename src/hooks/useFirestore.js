import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useReducer, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  data: null,
  error: null,
  isPending: false,
  success: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { data: null, error: null, isPending: true, success: false };
    case "ERROR":
      return { data: null, error: action.payload, isPending: false, success: false };
    case "ADD_DATA":
      return { data: action.payload, error: null, isPending: false, success: true };
    default:
      return state;
  }
};

export function useFirestore(c) {
  const [isCanceled, setIsCanceled] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const isNotCanceled = (action) => {
    if (!isCanceled) {
      dispatch(action);
    }
  };

  const addDocument = async (id, data) => {
    isNotCanceled({ type: "IS_PENDING" });
    try {
      await setDoc(doc(db, c, id), data);
      isNotCanceled({ type: "ADD_DATA", payload: data });
    } catch (error) {
      isNotCanceled({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    }
  };

  const updateDocument = async (id, isOnline) => {
    const userRef = doc(db, c, id);
    isNotCanceled({ type: "IS_PENDING" });
    try {
      await updateDoc(userRef, { isOnline });
      isNotCanceled({ type: "ADD_DATA", payload: { isOnline } });
    } catch (error) {
      isNotCanceled({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    }
  };

  const addTask = async (data) =>{
    isNotCanceled({
      type: "IS_PENDING",
      payload:true,
    });
    try{
      await addDoc(collection(db, c), data);
      toast.success('Document added');

    }
    catch(error){
      toast.error(error.message)
      isNotCanceled({
        type: "ERROR",
        payload: error.message,
      });

    }
    finally{
      isNotCanceled({
        type: "IS_PENDING",
        payload: false,
      })
    }
  }

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  return { ...state, addDocument, updateDocument, addTask };
}
