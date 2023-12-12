
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DummyProductImages = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, id) => (
        <div key={id}>
          <img src={image} alt={`Slide ${id + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default DummyProductImages;