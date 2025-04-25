import React from "react";
import { motion } from "framer-motion";
import GallerySection from "../components/GallerySection";

const GalleryPage = () => {
  const galleries = [
    {
      title: "Weddings",
      images: [
        { src: "https://images.unsplash.com/photo-1519741497674-611481863f1e?q=80&w=2070&auto=format&fit=crop", alt: "Wedding 1" },
        { src: "https://images.unsplash.com/photo-1511285560929-80b456beb5a8?q=80&w=2070&auto=format&fit=crop", alt: "Wedding 2" },
        { src: "https://images.unsplash.com/photo-1519227357039-8f9d29a0e3a3?q=80&w=2070&auto=format&fit=crop", alt: "Wedding 3" },
      ],
    },
    {
      title: "Modeling Gigs",
      images: [
        { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop", alt: "Modeling 1" },
        { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2070&auto=format&fit=crop", alt: "Modeling 2" },
        { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop", alt: "Modeling 3" },
      ],
    },
    {
      title: "Brand Shoots",
      images: [
        { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop", alt: "Brand 1" },
        { src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop", alt: "Brand 2" },
        { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", alt: "Brand 3" },
      ],
    },
    {
      title: "Content Creation Shoots",
      images: [
        { src: "https://images.unsplash.com/photo-1507838153414-6e6b9d7b2d8e?q=80&w=2070&auto=format&fit=crop", alt: "Content 1" },
        { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", alt: "Content 2" },
        { src: "https://images.unsplash.com/photo-1507238691748-2e43789e5f6d?q=80&w=2070&auto=format&fit=crop", alt: "Content 3" },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 text-center mb-12">
          Anjorin’s Gallery
        </h1>
        {galleries.map((gallery, index) => (
          <GallerySection key={index} title={gallery.title} images={gallery.images} />
        ))}
      </motion.div>
    </div>
  );
};

export default GalleryPage;