import { motion } from "framer-motion";

export const FlagBar = () => {
  return (
    <motion.div 
      className="w-full h-2 flex"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="flex-1 bg-uganda-black" />
      <div className="flex-1 bg-uganda-yellow" />
      <div className="flex-1 bg-uganda-red" />
    </motion.div>
  );
};
