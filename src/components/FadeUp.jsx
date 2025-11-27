// components/FadeUp.js
import { motion } from "framer-motion";

const FadeUp = ({ children, duration = 2, delay = 0.3 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;



