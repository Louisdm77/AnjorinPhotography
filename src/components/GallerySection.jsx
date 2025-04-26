import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
import Modal from "react-modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

const GallerySection = ({ title, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-200 text-center mb-8 font-montserrat">
        {title}
      </h2>
      <div className="px-4 pb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        //   pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
          }}
          className="mySwiper pb-16"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer" onClick={() => openModal(image)}>
                <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-700">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[300px] object-cover transition-all duration-300 hover:brightness-110"
                    loading="lazy"
                    onError={(e) => {
                      console.error(
                        `Failed to load image: ${image.src}`,
                        e.target.src
                      );
                      // Fallback to a known image if the original fails
                      e.target.src =
                        "https://images.unsplash.com/photo-1519741497674-611481863f1e?q=80&w=2070&auto=format&fit=crop";
                    }}
                    onLoad={() =>
                      console.log(`Successfully loaded image: ${image.src}`)
                    }
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 text-center">
                    <p className="text-gray-200 text-sm font-lato">View</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
        <div className="custom-pagination absolute left-0 right-0 -bottom-10 z-10"></div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        className="flex items-center justify-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        shouldCloseOnOverlayClick={true}
      >
        {selectedImage && (
          <div className="relative max-w-5xl w-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-4xl font-bold z-50"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 font-lato">
              {selectedImage.alt}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GallerySection;
