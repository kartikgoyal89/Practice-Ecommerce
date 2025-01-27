import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://kalidas365itsolutions.wordpress.com/wp-content/uploads/2014/06/sell-first.jpg"
                alt="Slider-1"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://kalidas365itsolutions.wordpress.com/wp-content/uploads/2014/06/sell-first.jpg"
                alt="Slider-1"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://kalidas365itsolutions.wordpress.com/wp-content/uploads/2014/06/sell-first.jpg"
                alt="Slider-1"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://kalidas365itsolutions.wordpress.com/wp-content/uploads/2014/06/sell-first.jpg"
                alt="Slider-1"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://kalidas365itsolutions.wordpress.com/wp-content/uploads/2014/06/sell-first.jpg"
                alt="Slider-1"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
