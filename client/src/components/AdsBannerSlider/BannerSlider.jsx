import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/BannerBox";
import "./bannerSlider.css";

const BannerSlider = ({ items }) => {
  return (
    <div className="banner-slider w-full py-3 pb-10">
      <Swiper
        slidesPerView={items}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="smbtn !py-3"
      >
        <SwiperSlide>
          <BannerBox
            img={
              "https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://img.freepik.com/premium-vector/online-shopping-banner_23-2148681595.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://img.freepik.com/free-psd/sale-banner-design-template_23-2148952123.jpg"
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBox
            img={
              "https://i.pinimg.com/736x/ba/ec/da/baecda293021811180f215204d5cfc27.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
