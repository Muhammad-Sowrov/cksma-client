import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Banner.css'
import 'swiper/css';
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="max-h-[100vh]">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[90vh] object-fill md:object-cover" src="https://i.ibb.co/FqCcGTP/slider1-copy-3209x2407.jpg" />
          {/* <div className="text-5xl relative right-96 top-56 border pl-8 pr-96 border-red-400 bottom-10">888</div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[90vh] object-cover" src="https://i.ibb.co/nDdp5gX/slider2-copy-2539x1904.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[90vh] object-cover" src="https://i.ibb.co/tH95Z37/slider3-copy-2728x2046.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

