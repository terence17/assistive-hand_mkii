import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "images/epltitle.jpg",  
  "images/saka.jpg",
  "images/lamine.jpeg",
  "images/salah.jpg",
  "images/vini.jpg",
  "images/bruno.jpg",
  
  
];

export default function ImageCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      style={{ width: "100%", maxWidth: "800px", margin: "auto" }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
