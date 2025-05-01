import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useDocument = (c, id) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {

    const unsub = onSnapshot(
      doc(db, c, id),
      (doc) => {
        if (doc.exists()) {
          setData({ id: doc.id, ...doc.data() });
        } else {
          setData(null);
        }
        setIsPending(false);
      },
      (err) => {
        setIsPending(false);
      }
    );


    return () => unsub();
  }, [c, id]);

  return { data, isPending, c};
};
