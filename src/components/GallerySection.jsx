import React, { useState } from "react";
import { motion } from "framer-motion";

const GallerySection = ({ title, images }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => setIsOpen(!isOpen);

  return (
    <div className="mb-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={toggleSection}
        className="w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-white font-bold py-3 rounded-lg mb-4 text-xl"
      >
        {title} {isOpen ? "▲" : "▼"}
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg opacity-0 hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default GallerySection;