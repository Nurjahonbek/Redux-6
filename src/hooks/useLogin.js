import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth}  from '../firebase/config'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { login as _login} from "../app/features/userSlice";
import toast from "react-hot-toast";
import { useFirestore } from "./useFirestore";

export const useLogin = () =>{
    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {updateDocument} = useFirestore('users')

    const login = async (email, password) =>{
        try {
            setIsPending(true)
            const req = await signInWithEmailAndPassword(auth, email, password)
            const user = req.user;
            dispatch(_login(user))
            setData(user)
            await updateDocument(auth.currentUser.uid, true)
            toast.success(`Welcome back ${user.displayName}`)
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setIsPending(false)
        }
    }
    return { login, data, isPending}
}