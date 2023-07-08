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
import webGif from "../../../assets/services/web.gif";
import mobileGif from "../../../assets/services/mobile.gif";
import serverGif from "../../../assets/services/server.gif";
import desktopGif from "../../../assets/services/desktop.gif";
const SolutionCarousel = () => {
  const servicesArr = [
    {
      title: "Desktop Application",
      img: desktopGif,
    },
    {
      title: "Mobile Application",
      img: mobileGif,
    },
    {
      title: "Web Application",
      img: webGif,
    },
    {
      title: "Server Maintainance",
      img: serverGif,
    },
  ];
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
          slidesPerView={2}
          spaceBetween={30}
          className="mySwiper"
        >
          {servicesArr.map((item) => (
            <SwiperSlide key={(Math.random * 232339999).toString()}>
              <SolutionCarouselCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default SolutionCarousel;
