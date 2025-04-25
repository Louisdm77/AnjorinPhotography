import React from "react";
import { motion } from "framer-motion";

const Testimonial = ({ name, quote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 text-center"
    >
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <h4 className="text-indigo-900 font-semibold">{name}</h4>
    </motion.div>
  );
};

export default Testimonial;