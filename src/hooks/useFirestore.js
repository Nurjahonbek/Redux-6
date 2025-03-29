// import { doc, addDoc, runTransaction } from "firebase/firestore";
// import { db } from "../firebase/config";
// import { data } from "react-router-dom";
// import { useEffect, useReducer, useState } from "react";
// import { isPending } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

// const initialState = {
//   data: null,
//   error: null,
//   isPending: false,
//   status: success,
// }

// const reducer = (state, action) =>{
//   const {type, payload} = action;
//   switch (type) {
//     case "IS_PANDING":
//     return {data: null, error:null, isPending:true, success:true}
//     case "ERROR":
//     return {data:null, error: payload, isPending:false, success: false};
//     case "ADD_DATA":
//       return { data: payload, error:null, isPending: false, success: true};

//     default:
//       return state;
//   }
// }
// export function useFirestore(c) {
//   const [IsCanceled, setIsCanceled] = useState(false)
//   const [state, dispatch] = useReducer(reducer, initialState)

//   const isNotCanceled = (action) =>{
//     if(!IsCanceled){
//       dispatch(action)
//     }
//   }

//   const addDocument = async (data) => {
//     isNotCanceled({
//       type:"IS_PANDING",
//       payload: true,
//     })
//     try{
//       await addDoc(collection(db, c), data);


//     }catch(error){
//       isNotCanceled({
//         type:"ERROR",
//         payload: error.message,
//       })
//       toast.error(error.message)
//     }
//     finally{
//       isNotCanceled({
//         type:"IS_PANDING",
//         payload: false,
//       })
//     }
//   };

//   useEffect(() => {
//     return () =>{
//       setIsCanceled(true)
//     };
//   }, [])

//   return {addDocument}
// }





import { doc, addDoc, collection } from "firebase/firestore";
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
  const { type, payload } = action;
  switch (type) {
    case "IS_PENDING":
      return { data: null, error: null, isPending: true, success: false };
    case "ERROR":
      return { data: null, error: payload, isPending: false, success: false };
    case "ADD_DATA":
      return { data: payload, error: null, isPending: false, success: true };
    default:
      return state;
  }
};

export function useFirestore(collectionName) {
  const [isCanceled, setIsCanceled] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const isNotCanceled = (action) => {
    if (!isCanceled) {
      dispatch(action);
    }
  };

  const addDocument = async (data) => {
    isNotCanceled({ type: "IS_PENDING" });
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      isNotCanceled({ type: "ADD_DATA", payload: docRef });
      toast.success("Data successfully added!");
    } catch (error) {
      isNotCanceled({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    }
  };

  useEffect(() => {
    return () => {
      setIsCanceled(true);
    };
  }, []);

  return { addDocument, ...state };
}
