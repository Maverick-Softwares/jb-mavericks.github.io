// import Swiper JS
// import Swiper from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SolutionCarousel.css";
import { Fragment } from "react";
import Solution from "./Solution";
import SolutionCarouselCard from "./SolutionCarouselCard";
const SolutionCarousel = () => {
  return (
    <Fragment>
      <div>
        <Solution />
      </div>
      <div>
        <Swiper
          navigation={true}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
        >
          <SwiperSlide>
            <SolutionCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <SolutionCarouselCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default SolutionCarousel;
