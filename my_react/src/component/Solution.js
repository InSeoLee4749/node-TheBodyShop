import React from "react";
import solution from "../scss/solution.module.css";

export default function Solution(props) {
    return (
        <section id="solution">
            <div className={`${solution.solution}`}>
                <div className={`${solution.section}`}>
                    <div className={`${solution.inner}`}>
                        <div className={`${solution.wrap}`}>
                            <div>
                                <span className={`${solution.span}`}>"두피와 모발을 위한 최적의 솔루션"</span>
                                <h3 className={`${solution.h3}`}>
                                    The Optimal Solution<br></br>For The Scals And Hair
                                </h3>
                                <p className={`${solution.p}`}>
                                    역동적이면서 균형있는 사이클로 채워지는 본연의 힘
                                    <br></br>우리의 모발과 피부가 치유될 수 있는 충분한 시간
                                    <br></br>칙칙하고 윤기없는 모발에 활기를 부어넣고
                                    <br></br>외부 오염 물질을 깨끗이 씻어내주어
                                    <br></br>윤기있고 부드러운 머리결을 유지하는데 도움을 주는 "모링가 샤인 앤 프로텍션 샴푸"
                                </p>
                            </div>
                            <div className={`mt-5 ${solution.quickview}`}>
                                <a href="https://www.thebodyshop.co.kr/item/33546" className={`${solution.more}`}><span className={`${solution.span1}`}></span>Click More</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
        </section>
        
            
        
    );
}
