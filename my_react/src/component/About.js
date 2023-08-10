import React from "react";
import about from "../scss/about.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

export default function About(props) {
    return (
        <section id="about">
            <div className={`${about.content}`}>
            <h2 className={`${about.subtitle}`}>THE BODY SHOP 소개</h2>
            <Swiper
                    spaceBetween={30}
                    centeredSlides={false}
                    slidesPerView={2.5}
                    // pagination={{
                    //         type: 'progressbar',
                    //         }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="{`${about.section}`}"
                    >
                    <SwiperSlide>
                        <a href="">
                            <div>
                                <img src="./img/about1.jpg" alt="" className={`${about.img1}`}/>
                            </div>
                            
                        </a>
                        <h3 className={`${about.title}`}>더바디샵 소개</h3>
                        <p className={`${about.explain}`}>
                            기업이 세상을 만듭니다.<br></br>우리가 상상하는 그래도 사회를 바꾸어갈 능력이 있습니다. 
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className={`${about.slide2}`}>
                        <a href=""><img src="./img/about2.jpg" alt="" className={`${about.img2}`}/></a>
                        <h3 className={`${about.title}`}>더바디샵 역사</h3>
                        <p className={`${about.explain}`}>
                            더바디샵은 사회변화를 선도하며 뷰티를<br></br>재정의하였습니다. 
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href=""><img src="./img/about3.jpg" alt="" className={`${about.img3}`}/></a>
                        <h3 className={`${about.title}`}>이념과 가치</h3>
                        <p className={`${about.explain}`}>
                            더 공정하고 아름다운 세상을 위해 싸우기 위해<br></br>존재합니다. 그리고 우리는 모두 아름답습니다. 
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href=""><img src="./img/about4.jpg" alt="" className={`${about.img4}`}/></a>
                        <h3 className={`${about.title}`}>브랜드 정책</h3>
                        <p className={`${about.explain}`}>
                            환경에 미치는 영향은 최소화하면서 우리 몸에 실질적이 효과를<br></br>주는 제품을 만들고자 합니다.
                        </p>
                    </SwiperSlide>
            </Swiper>
        </div>
        </section>
        
                
            
        
    );
}