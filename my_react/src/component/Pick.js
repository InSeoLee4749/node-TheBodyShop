import React from "react";
import pick from "../scss/pick.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import data from "../data/data.json"

export default function Review(props) {
    return (
        <>
            <section id="pick">
            <div className={`${pick.content}`} id="pic">
                {/* <div className={`${review.title}`}>
                    Best Review
                </div> */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={5}
                    // pagination={{
                    //         type: 'progressbar',
                    //         }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={`${pick.mySwiper} py-5 `}
                    >
                        {
                            data.swiperslide.map((v,x) => {
                                return(
                                    <SwiperSlide className={`${pick.swiperslide}`}>
                                        <div className={`${pick.info_top}`}>
                                            <p className={`${pick.pplen} brand`}>{v.type}</p>
                                            <p className={`${pick.emname}`}>{v.eng}</p>
                                            <p className={`${pick.krname}`}>{v.kor}</p>
                                        </div>
                                        <div className={`${pick.info_box} row`}>
                                            <span>{v.price}</span>
                                        </div>
                                        <div className={`${pick.imgdiv}`}>
                                            <a href=""><img className={`${pick.img}`} src={v.imgsrc} alt="" /></a>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
                <div></div>
            </div>
            </section>
            
        </>
        
    );
}
