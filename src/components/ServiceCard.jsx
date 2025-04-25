import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-xl shadow-lg p-6 text-center"
    >
      <h3 className="text-xl font-semibold text-indigo-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;