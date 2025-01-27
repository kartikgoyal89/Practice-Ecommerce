import "./home.css";
import { useState } from "react";
// import Slider from "../../components/Slider/Slider";
import CatSlider from "../../components/CatSlider/CatSlider";
import { FaShippingFast } from "react-icons/fa";
import BannerSlider from "../../components/AdsBannerSlider/BannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import BannerSliderv2 from "../../components/BannerSlider/BannerSlider";
import BannerBoxV2 from "../../components/BannerBoxV2/BannerBoxV2";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem/BlogItem";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* <Slider /> */}
      <section className="py-10">
        <div className="container flex gap-5">
          <div className="part1 w-[70%]">
            <BannerSliderv2 />
          </div>

          <div className="part2 w-[30%] flex flex-col gap-5 items-center justify-between">
            <BannerBoxV2
              src={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              }
              info={"left"}
            />
            <BannerBoxV2
              src={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
              info={"right"}
            />
          </div>
        </div>
      </section>
      <CatSlider />

      <section className="bg-white w-full py-8">
        <div className="container">
          <div className=" flex items-center justify-between">
            <div className="leftSec w-[40%]">
              <h2 className="text-[25px] font-[600]">Popular Products</h2>
              <p className="text-[15px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Wellness" />
                <Tab label="Beauty" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={5} />
        </div>
      </section>

      <section className="py-2 bg-white">
        <div className="container flex flex-col items-center">
          <div className="free-shipping w-[80%] py-5 pl-12 pr-12 border-[3.5px] border-[#ff5252] flex items-center justify-between rounded-md mb-5">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[35px]" />
              <span className="text-[20px] font-[600]">FREE SHIPPING</span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Shipping Now on your first Order and over $200
              </p>
            </div>

            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>

          <BannerSlider items={4} />
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[600]">Latest Products</h2>
          <ProductSlider items={6} />
          {/* https://as1.ftcdn.net/v2/jpg/10/58/92/40/1000_F_1058924033_7ArUeFBdN0nYYr6MVFPSz82WXWQnGgiV.jpg */}

          <BannerSlider items={4} />
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[600]">Featured Products</h2>
          <ProductSlider items={6} />

          <BannerSlider items={3} />
        </div>
      </section>

      <section className="bg-white blogSection py-5 pb-10">
        <div className="container">
          <h2 className="text-[25px] font-[600] mb-7">From the Blog</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
