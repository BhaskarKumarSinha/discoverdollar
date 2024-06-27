import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust this as per your mobile breakpoint
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-1 z-0 overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="assets/shoping1.jpg"
            alt="Banner 1"
            className="w-full h-auto  object-cover"
            style={{ maxHeight: "40vh" }} // Responsive height
          />
        </div>
        <div>
          <img
            src="assets/shoping2.jpg"
            alt="Banner 2"
            className="w-full h-auto  object-cover"
            style={{ maxHeight: "40vh" }} // Responsive height
          />
        </div>
        <div>
          <img
            src="assets/shoping3.jpg"
            alt="Banner 3"
            className="w-full h-auto  object-cover"
            style={{ maxHeight: "40vh" }} // Responsive height
          />
        </div>
        <div>
          <img
            src="assets/shoping4.jpg"
            alt="Banner 4"
            className="w-full h-auto  object-cover"
            style={{ maxHeight: "40vh" }} // Responsive height
          />
        </div>
        <div>
          <img
            src="assets/shoping3.jpg"
            alt="Banner 5"
            className="w-full h-auto  object-cover"
            style={{ maxHeight: "40vh" }} // Responsive height
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
