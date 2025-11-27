// components/FadeSide.js
import { motion } from "framer-motion";

const FadeSide = ({ children, duration = 2, delay = 0.3, direction = "left" }) => {
  const xValue = direction === "left" ? -20 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, x: xValue }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default FadeSide;


