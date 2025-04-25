import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/ContactForm";
import anjorin from "../assets/images/anjorin.jpg";
import wedding from "../assets/images/weddings/wedding2.jpg";
import fashion from "../assets/images/fashion/fash3.jpg"
import brand from "../assets/images/brand/brand.jpg"
import food from "../assets/images/food/food6.jpg"

const HomePage = () => {
  const services = [
    {
      title: "Weddings",
      description:
        "Capture the magic of your special day with stunning outdoor wedding photography.",
    },
    {
      title: "Modeling Gigs",
      description:
        "Elevate your portfolio with professional modeling shots in natural settings.",
    },
    {
      title: "Brand Shoots",
      description:
        "Create visually compelling content for your brand with outdoor photography.",
    },
    {
      title: "Content Creation Shoots",
      description:
        "Bring your creative ideas to life with custom content creation shoots.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah & James",
      quote:
        "Anjorin captured our wedding day perfectly! The photos are breathtaking.",
    },
    {
      name: "Emma, Model",
      quote:
        "Working with Anjorin was a dream. My portfolio has never looked better!",
    },
    {
      name: "Luxe Brands",
      quote:
        "The brand shoot Anjorin did for us was phenomenal. Highly recommend!",
    }, {
        name: "Luxe Brands",
        quote:
          "The brand shoot Anjorin did for us was phenomenal. Highly recommend!",
      },
  ];

  const galleryPreview = [
    {
      src: wedding,
      alt: "Wedding Shoot",
    },
    {
      src: fashion,
      alt: "Modeling Gig",
    },
    {
      src: brand,
      alt: "Brand Shoot",
    },
    {
      src: food,
      alt: "food Shoot",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section with Anjorin's Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-gray-900 to-gray-500 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{color:'white'}}>
              Anjorin Photography
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Capturing life’s most beautiful moments through the lens of
              creativity and passion.
            </p>
            <a
              href="https://instagram.com/an.jo.rin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              Follow on Instagram
            </a>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <img
              src={anjorin}
              alt="Anjorin"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full mx-auto object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            About Anjorin
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Anjorin is a passionate photographer with over 5 years of
            experience in capturing the beauty of the outdoors. Specializing in
            weddings, modeling gigs, brand shoots, and content creation, Anjorin
            brings a unique perspective to every project. Based in Lagos,Nigeria.
            Anjorin travels nationwide to create stunning visual stories that
            resonate with emotion and creativity.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Preview Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12">
            A Glimpse of Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((image, index) => (
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
                <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg opacity-0 hover:opacity-100 transition-opacity">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/gallery"
              className="inline-block bg-indigo-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-600 transition"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12">
            Let’s Create Something Beautiful
          </h2>
          <ContactForm />
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
