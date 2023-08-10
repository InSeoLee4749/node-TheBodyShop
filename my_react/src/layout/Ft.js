import React from "react";
import ft from "../scss/ft.module.css";

export default function Ft(props) {
    return (
        <>
            <div className={`${ft.footer}`}> 
                <div className={`${ft.info}`}>
                    <div className={`${ft.inner}`}>
                        <div className={`${ft.left}`}>
                            <div className={`${ft.sns}`}>
                                <div className={`${ft.sns1}`}><a href=""></a></div>
                                <div className={`${ft.sns2}`}><a href=""></a></div>
                                <div className={`${ft.sns3}`}><a href=""></a></div>
                                <div className={`${ft.sns4}`}><a href=""></a></div>
                            </div>
                            <div className={`${ft.aleft1}`}>
                                <div className={`${ft.left1}`}>
                                    비에스케이코퍼레이션<span></span>대표이사 : 오미경,나상돈
                                    <br></br>주소 : 서울시 강남구 학동로 401 13층
                                    <br></br><b>TEL : 080-759-7700</b><span></span><b>E-MAIL : webmaster@thebodyshop.co.kr</b>
                                </div>
                                <div>
                                    <ul className={`${ft.left2}`}>
                                        <li><a href="">이용약관</a></li>
                                        <li><a href="">개인정보처리방침</a></li>
                                        <li><a href="">이용안내</a></li>
                                        
                                    </ul>
                                </div>
                                <div>
                                    <br></br><p>COPYRIGHT 2023 THEBODYSHOP. ALL RIGHT RESERVED</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${ft.right}`}>
                            <div className={`${ft.cs}`}>
                                <h1>Customer Center</h1>
                                <p>080-759-7700</p>
                                <span>
                                    AM 10:00-PM 5:00
                                    <br></br>토, 일요일 및 공휴일 휴무
                                </span>
                                <a href="https://www.thebodyshop.co.kr/member/login" target="_blank">1 : 1 Talk</a>
                            </div>
                            <div className={`${ft.sns}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
