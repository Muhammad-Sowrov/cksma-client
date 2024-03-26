// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import './Banner.css'
// import 'swiper/css';
// import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

// const Banner = () => {
//   return (
//     <div className="max-h-[100vh]">
//       <Swiper
//         slidesPerView={1}
//         centeredSlides={false}
//         slidesPerGroupSkip={1}
//         grabCursor={true}
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           769: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//           },
//         }}
//         scrollbar={true}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Keyboard, Scrollbar, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img className="h-[90vh] object-fill md:object-cover" src="https://i.ibb.co/FqCcGTP/slider1-copy-3209x2407.jpg" />
//           {/* <div className="text-5xl relative right-96 top-56 border pl-8 pr-96 border-red-400 bottom-10">888</div> */}
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="h-[90vh] object-cover" src="https://i.ibb.co/nDdp5gX/slider2-copy-2539x1904.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="h-[90vh] object-cover" src="https://i.ibb.co/tH95Z37/slider3-copy-2728x2046.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;

const Banner = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="fixed grid mt-20 items-center justify-center grid-cols-2 max-w-7xl">
        <div className="border  px-1 md:px-5 flex flex-col gap-1 md:gap-5 items-cente justify-center">
          <h1 className="text-sm md:text-xl lg:text-3xl font-bold">
            Chakpara Khanbari Salafiya Madrasha
          </h1>
          <p className="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum suscipit laborum exercitationem. Repellendus, beatae?</p>
          <button className="text-left text-xs text-white w-24 px-2 py-1 border border-slate-950 rounded-md bg-sky-500/100 col ">Donate Now!</button>
        </div>
        <div>
          <img
            className="w-full object-cover rounded-lg"
            src="https://i.ibb.co/FqCcGTP/slider1-copy-3209x2407.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
