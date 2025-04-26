import React from "react";
import GallerySection from "../components/GallerySection";

// Weddings
import wedding from "../assets/images/weddings/wedding.webp";
import wedding1 from "../assets/images/weddings/wedding1.webp";
import wedding2 from "../assets/images/weddings/wedding2.webp";
import wedding3 from "../assets/images/weddings/wedding3.webp";
import wedding4 from "../assets/images/weddings/wedding4.webp";
import wedding5 from "../assets/images/weddings/wedding5.webp";
import wedding6 from "../assets/images/weddings/wedding6.webp";
import wedding7 from "../assets/images/weddings/wedding7.webp";

// Events
import event from "../assets/images/events/event.webp";
import event1 from "../assets/images/events/event1.webp";
import event2 from "../assets/images/events/event2.webp";
import event3 from "../assets/images/events/event3.webp";
import event4 from "../assets/images/events/event4.webp";
import event5 from "../assets/images/events/event5.webp";
import event6 from "../assets/images/events/event6.webp";
import event7 from "../assets/images/events/event7.webp";

// Fashion
import fashion from "../assets/images/fashion/fash.webp";
import fashion1 from "../assets/images/fashion/fash1.webp";
import fashion2 from "../assets/images/fashion/fash2.webp";
import fashion3 from "../assets/images/fashion/fash3.webp";
import fashion4 from "../assets/images/fashion/fash4.webp";
import fashion5 from "../assets/images/fashion/fash5.webp";
import fashion6 from "../assets/images/fashion/fash6.webp";
import fashion7 from "../assets/images/fashion/fash7.webp";

// Brand Shoots
import brand from "../assets/images/brand/brand.webp";
import brand1 from "../assets/images/brand/brand1.webp";
import brand2 from "../assets/images/brand/brand2.webp";
import brand3 from "../assets/images/brand/brand3.webp";
import brand4 from "../assets/images/brand/brand4.webp";
import brand5 from "../assets/images/brand/brand5.webp";
import brand6 from "../assets/images/brand/brand6.webp";
import brand7 from "../assets/images/brand/brand7.webp";

// Food
import food from "../assets/images/food/food.jpg";
import food1 from "../assets/images/food/food1.jpg";
import food2 from "../assets/images/food/food2.jpg";
import food3 from "../assets/images/food/food3.jpg";
import food4 from "../assets/images/food/food4.jpg";
import food5 from "../assets/images/food/food5.jpg";
import food6 from "../assets/images/food/food6.jpg";
import food7 from "../assets/images/food/food7.jpg";

// Portraits
import potrait from "../assets/images/potraits/potrait.webp";
import potrait1 from "../assets/images/potraits/potrait1.webp";
import potrait2 from "../assets/images/potraits/potrait2.webp";

const GalleryPage = () => {
  const galleries = [
    {
      title: "Weddings",
      images: [
        { src: wedding, alt: "Wedding 1" },
        { src: wedding1, alt: "Wedding 2" },
        { src: wedding2, alt: "Wedding 3" },
        { src: wedding3, alt: "Wedding 4" },
        { src: wedding4, alt: "Wedding 5" },
        { src: wedding5, alt: "Wedding 6" },
        { src: wedding6, alt: "Wedding 7" },
        { src: wedding7, alt: "Wedding 8" },
      ],
    },
    {
      title: "Events",
      images: [
        { src: event, alt: "Event 1" },
        { src: event1, alt: "Event 2" },
        { src: event2, alt: "Event 3" },
        { src: event3, alt: "Event 4" },
        { src: event4, alt: "Event 5" },
        { src: event5, alt: "Event 6" },
        { src: event6, alt: "Event 7" },
        { src: event7, alt: "Event 8" },
      ],
    },
    {
      title: "Fashion",
      images: [
        { src: fashion, alt: "Fashion 1" },
        { src: fashion1, alt: "Fashion 2" },
        { src: fashion2, alt: "Fashion 3" },
        { src: fashion3, alt: "Fashion 4" },
        { src: fashion4, alt: "Fashion 5" },
        { src: fashion5, alt: "Fashion 6" },
        { src: fashion6, alt: "Fashion 7" },
        { src: fashion7, alt: "Fashion 8" },
      ],
    },
    {
      title: "Brand Shoots",
      images: [
        { src: brand, alt: "Brand 1" },
        { src: brand1, alt: "Brand 2" },
        { src: brand2, alt: "Brand 3" },
        { src: brand3, alt: "Brand 4" },
        { src: brand4, alt: "Brand 5" },
        { src: brand5, alt: "Brand 6" },
        { src: brand6, alt: "Brand 7" },
        { src: brand7, alt: "Brand 8" },
      ],
    },
    {
      title: "Food",
      images: [
        { src: food, alt: "Food 1" },
        { src: food1, alt: "Food 2" },
        { src: food2, alt: "Food 3" },
        { src: food3, alt: "Food 4" },
        { src: food4, alt: "Food 5" },
        { src: food5, alt: "Food 6" },
        { src: food6, alt: "Food 7" },
        { src: food7, alt: "Food 8" },
      ],
    },
    {
      title: "Portraits",
      images: [
        { src: potrait, alt: "Portrait 1" },
        { src: potrait1, alt: "Portrait 2" },
        { src: potrait2, alt: "Portrait 3" },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 text-center mb-12 font-montserrat">
          Anjorin’s Gallery
        </h1>
        {galleries.map((gallery, index) => (
          <GallerySection
            key={index}
            title={gallery.title}
            images={gallery.images}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
