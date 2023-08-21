import React from "react";
import banner from "../scss/banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner(props) {
    return (
        <section id="banner">
            <div className={`${banner.height}`}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href=""><img className={`${banner.img1}`} src="./img/banner1.png" alt=""/></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href=""><img className={`${banner.img1}`} src="./img/banner2.png" alt=""/></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href=""><img className={`${banner.img1}`} src="./img/banner3.png" alt=""/></a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
