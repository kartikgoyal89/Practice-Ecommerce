import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./bannerSlider.css";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const BannerSliderv2 = () => {
  return (
    <>
      <Swiper
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="banner-slider-v2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-lg !overflow-hidden relative">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg"
              className="rounded-lg w-full"
            />
            <div className="info flex flex-col items-start opacity-0 justify-center p-8 absolute top-[0] -right-[100%] w-[50%] h-[100%] z-50 transition-all duration-500">
              <h2 className="text-[20px] mb-3">Big Saving Days Sale</h2>

              <h3 className="text-[40px] font-[600]">
                Women Solid Round Green T-Shirt
              </h3>

              <div className="mt-2 price flex items-center gap-2">
                <h3 className="text-[24px] font-[500]">Starting At Only</h3>
                <h2 className="text-[30px] font-bold text-primary">$59.00</h2>
              </div>

              <Button className="!text-white !bg-primary !px-7 !py-3 !mt-10">
                Shop Now
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-lg overflow-hidden">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg"
              className="rounded-lg w-full"
            />
            <div className="info flex flex-col items-start opacity-0 justify-center p-8 absolute top-0 -right-[100%] w-[50%] h-[100%] z-50 transition-all duration-500">
              <h2 className="text-[20px] mb-3">Big Saving Days Sale</h2>

              <h3 className="text-[40px] font-[600]">
                Buy Modern Chair in Black Color
              </h3>

              <div className="mt-2 price flex items-center gap-2">
                <h3 className="text-[24px] font-[500]">Starting At Only</h3>
                <h2 className="text-[30px] font-bold text-primary">$99.00</h2>
              </div>

              <Button className="!text-white !bg-primary !px-7 !py-3 !mt-10">
                Shop Now
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSliderv2;
