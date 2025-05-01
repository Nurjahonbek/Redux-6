import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
import { useSelector } from "react-redux";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";
import { motion } from "framer-motion";

function Task() {
  const { user } = useSelector((store) => store.user);
  const { id } = useParams();
  const { isPending, data } = useDocument("tasks", id);

  if (isPending || !data) {
    return <h2 className="text-center mt-10 text-lg font-semibold">⏳ Yuklanmoqda...</h2>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const content = formData.get("Message")?.trim();

    if (!content) return;

    const comment = {
      content,
      createdAt: new Date().toLocaleString(),
      author: {
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      },
    };

    const commentRef = doc(db, "tasks", id);
    await updateDoc(commentRef, {
      comments: [...(data.comments || []), comment],
    });

    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 py-6"
    >
      <motion.h1
        className="text-3xl font-extrabold mb-6 text-center text-[#afecad]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {data.title}
      </motion.h1>

      <div className="space-y-6 mb-10">
        {Array.isArray(data.comments) && data.comments.map((c, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: c.author.uid === user.uid ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`chat ${c.author.uid === user.uid ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-image avatar">
              <div className="w-15 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={c.author.photoURL}  />
              </div>
            </div>
            <div className="chat-header text-xl mb-2 text-white font-semibold text-gray-600">
              {c.author.displayName}
            </div>
            <div className="chat-bubble bg-gradient-to-r from-indigo-500 to-blue-400 text-[#96ff8e] shadow-lg hover:scale-105 transition-transform duration-200">
              {c.content}
              <time className="text-xs text-[#f0f0c1] opacity-0,2 ml-2">{c.createdAt}</time>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <textarea
          name="Message"
          placeholder="✍️ Xabar yozing..."
          className="textarea border-none w-full sm:flex-1 resize-none min-h-[60px] text-base bg-[#faf4f4] px-4 pt-2"
          required

        ></textarea>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="btn btn-secondary px-6 font-bold tracking-wide"
          type="submit"
        >
          🚀 Yuborish
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Task;
