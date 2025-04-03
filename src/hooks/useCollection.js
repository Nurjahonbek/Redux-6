import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export function useCollection(c, w) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let q = collection(db, c);

    if (w) {
      q = query(q, where(...w));
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });

    return () => unsubscribe();
  }, [c, JSON.stringify(w)])

  return { data };
}
