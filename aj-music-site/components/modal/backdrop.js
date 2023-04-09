import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Backdrop({ children, onClick }) {
  return (

      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-80 flex align-center justify-center"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>

  );
}
