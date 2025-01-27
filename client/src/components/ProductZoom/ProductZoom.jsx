import { useState, useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const zoomSliderBig = useRef(0);
  const zoomSlider = useRef(0);

  const goto = (idx) => {
    setSlideIdx(idx);
    // zoomSlider.current.swiper.slideTo(idx);
    zoomSliderBig.current.swiper.slideTo(idx);
  };

  return (
    <div>
      <div className="productZoomWrapper flex gap-4 items-center">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSlider}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs max-h-[500px] overflow-hidden "
          >
            <SwiperSlide>
              <div
                className={`item rounded-md !w-[50px] !h-[50px] overflow-hidden cursor-pointer group opacity-50 ${
                  slideIdx === 0 && "active"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61SgexiVsjL._SX569_PIbundle-17,TopRight,0,0_AA569SH20_.jpg"
                  className="transition-all group-hover:scale-105 w-full h-full object-contain"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md !w-[50px] !h-[50px] overflow-hidden cursor-pointer group opacity-50 ${
                  slideIdx === 1 && "active"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61c-lvxGsBL._SX569_.jpg"
                  className="transition-all group-hover:scale-105 w-full h-full object-contain"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onClick={() => goto(2)}
                className={`item rounded-md !w-[50px] !h-[50px] overflow-hidden cursor-pointer group opacity-50 ${
                  slideIdx === 2 && "active"
                }`}
              >
                <img
                  src="https://m.media-amazon.com/images/I/71J+X4Oy+zL._SX569_.jpg"
                  className="transition-all group-hover:scale-105 w-full h-full object-contain"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onClick={() => goto(3)}
                className={`item rounded-md !w-[50px] !h-[50px] overflow-hidden cursor-pointer group opacity-50 ${
                  slideIdx === 3 && "active"
                }`}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61RkLiaio2L._SX569_.jpg"
                  className="transition-all group-hover:scale-105 w-full h-full object-contain"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onClick={() => goto(4)}
                className={`item rounded-md !w-[50px] !h-[50px] overflow-hidden cursor-pointer group opacity-50 ${
                  slideIdx === 4 && "active"
                }`}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61fcmyzB-0L._SX569_.jpg"
                  className="transition-all group-hover:scale-105 w-full h-full object-contain"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] max-h-[500px] border-2 border-[#ccc] rounded-md p-4 pb-0 flex items-center justify-center">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={20}
            navigation={false}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                scale={2}
                src="https://m.media-amazon.com/images/I/61SgexiVsjL._SX569_PIbundle-17,TopRight,0,0_AA569SH20_.jpg"
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                scale={2}
                src="https://m.media-amazon.com/images/I/61c-lvxGsBL._SX569_.jpg"
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                scale={2}
                src="https://m.media-amazon.com/images/I/71J+X4Oy+zL._SX569_.jpg"
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                scale={2}
                src="https://m.media-amazon.com/images/I/61RkLiaio2L._SX569_.jpg"
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                scale={2}
                src="https://m.media-amazon.com/images/I/61fcmyzB-0L._SX569_.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductZoom;
//
