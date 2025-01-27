import "./catSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const CatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          modules={[Navigation]}
          className="mySwiper !py-3"
        >
          <SwiperSlide className="swiper-slider">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center flex-col justify-center !rounded-md max-h-[240px]">
                <img
                  src="https://www.techtarget.com/rms/onlineimages/apple_ipad_10_yellow-f_mobile.jpg"
                  alt=""
                  className="!min-h-[174px] !max-h-[174px]"
                />
                <h3 className="mt-4">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center flex-col justify-center !rounded-md !max-h-[240px]">
                <img
                  src="https://www.bougroug.com/wp-content/uploads/2022/04/s5990-scaled-e1650892490714.jpg"
                  className="!min-h-[174px] !max-h-[174px]"
                  alt=""
                />
                <h3 className="mt-4">Crepe T-Shirt</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center flex-col justify-center !rounded-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlfsbOTB4Y98CYWP7Qz5_kPvGClWuOzs6cA&s"
                  alt=""
                  className="!min-h-[174px] !max-h-[174px]"
                />
                <h3 className="mt-4">Leather Watch</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center flex-col justify-center !rounded-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh0oerHNaOUTR_FMx1IDtFYpESulnnf-C8w&s"
                  alt=""
                  className="!min-h-[174px] !max-h-[174px]"
                />
                <h3 className="mt-4">Rolling Diamond</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center flex-col justify-center !rounded-md">
                <img
                  src="https://dzynfurnitures.com/cdn/shop/files/Comfy_Teak_Wood_Fabric_Upholstered_Arm_Chairs__Teak_Beige__side_view.webp?v=1721379849"
                  className="!min-h-[174px] !max-h-[174px]"
                  alt=""
                />
                <h3 className="mt-4">Wooden Chair</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center flex-col justify-center !rounded-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltP2AcuCuqhUJ8Gssj616EpHGuP4RmUBkPtHKBJ3jNiKoJkVTJY6VUw6SIsLznxgnU5Y&usqp=CAU"
                  className="!min-h-[174px] !max-h-[174px]"
                  alt=""
                />
                <h3 className="mt-4">Sneaker Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center flex-col justify-center !rounded-md">
                <img
                  src="https://m.media-amazon.com/images/I/71Mr2TvrYQL._AC_UY1000_.jpg"
                  className="!min-h-[174px] !max-h-[174px]"
                  alt=""
                />
                <h3 className="mt-4">Purse</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center flex-col justify-center !rounded-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_X6-38BMMzf_BR9_b46Gudgt3nUg9xLQNz36sG3BWuYFGDaPXvY1X7VzIYrcT9DKvSU&usqp=CAU"
                  className="min-h-[174px] !max-h-[174px] object-contain"
                  alt=""
                />
                <h3 className="mt-4">Xbox Controller</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
