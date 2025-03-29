import toast from "react-hot-toast";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useState } from "react";

export const useSignOut = () =>{
    const [isPending, setIsPending] = useState(false)

    const signout = async () =>{
        try{
            setIsPending(true);
            await signOut(auth);
            toast.success('See you soon');

        } catch (error){
            toast.error(error.message);
            console.log(error.message);
        }finally{
            setIsPending(false)
        }
    }
    return {signout, isPending}
}