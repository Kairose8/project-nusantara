import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import kidul from "../assets/places/kidul/kidul1.jpg";
import parangtritis from "../assets/places/parangtritis/parangtritis1.jpg";
import mendut from "../assets/places/mendut/mendut.jpg";
import heha from "../assets/places/heha/heha1.webp";
import sari from "../assets/places/sari/tamanSari1.jpg";

export default function SwiperCard() {
  return (
    <div className="mx-auto w-80"> {/* Added mx-auto and w-80 classes */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <img src={parangtritis} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heha} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mendut} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sari} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kidul} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

