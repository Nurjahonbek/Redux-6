import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {auth} from '../firebase/config'
import {login} from '../app/features/userSlice'
import toast from "react-hot-toast";
import { useFirestore } from "./useFirestore";

export const useRegister = () =>{
    const {addDocument} = useFirestore('users')
    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const register = async (displayName, email, password) =>{
    try {
        setIsPending(true)
        const req = await createUserWithEmailAndPassword(auth, email, password)

        await updateProfile(auth.currentUser, {
            displayName,
            photoURL:
            `https://api.dicebear.com/9.x/adventurer/svg?seed=${displayName}`,

        })
        const user = req.user;
        addDocument(user.uid, {
            isOnline: true,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
        dispatch(login(user))
        setData(user)

        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }finally{
            setIsPending(false)
        }
    }
    return {register, data, isPending}
}