
import toast from "react-hot-toast";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { logOut } from "../app/features/userSlice";
import { useDispatch } from "react-redux";
import { useFirestore } from "./useFirestore";

export const useSignOut = () => {
    const [isPending, setIsPending] = useState(false);
    const dispatch = useDispatch();
    const { updateDocument } = useFirestore("users");

    const signout = async () => {
        try {
            setIsPending(true);
            if (!auth.currentUser) {
                throw new Error("Foydalanuvchi tizimga kirmagan");
            }
            await updateDocument(auth.currentUser.uid,  false );
            await signOut(auth);
            dispatch(logOut());

            toast.success("See you soon");
        } catch (error) {
            console.log(error);
            
        } finally {
            setIsPending(false);
        }
    };

    return { signout, isPending };
};
