import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

const ProductSlider = ({ items }) => {
  return (
    <div className="productsSlider py-5">
      <Swiper
        slidesPerView={items}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
        className="mySwiper !py-3"
      >
        <SwiperSlide className="swiper-slider">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
