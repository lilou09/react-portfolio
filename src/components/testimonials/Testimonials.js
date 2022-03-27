import React from "react";
import AVTR from "../../assets/shahin-khalaji-Q4C5coZA1yQ-unsplash.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="" />
          </div>
          <h5 className="client__name">Sarrah Wick</h5>
          <small className="clent__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, sint?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="" />
          </div>
          <h5 className="client__name">Sarrah Wick</h5>
          <small className="clent__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, sint?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="" />
          </div>
          <h5 className="client__name">Sarrah Wick</h5>
          <small className="clent__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, sint?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="" />
          </div>
          <h5 className="client__name">Sarrah Wick</h5>
          <small className="clent__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, sint?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
