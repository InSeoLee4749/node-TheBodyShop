import React, {useState, useEffect} from "react";
import hd from "../scss/hd.module.css";
import { Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

import data from "../data/data.json"



export default function Hd(props) {

    const [scrollPosition, setScrollPosition] = useState(0);
    

    const updateScroll = () => {
        setScrollPosition( window.pageYOffset );      
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
        
        return(
            ()=>{
                window.removeEventListener('scroll', updateScroll)
            }
        )
    }, []);
    // {scrollPosition > 100 && "scrolldown" }
    // scrollPosition < 100 ? "original_header" : "change_header" `${hd.navbar}`
    return (
    <header  className={ scrollPosition > 100 && "scrolldown " } id="hd">
        <div id="ad" className={`${hd.ad}`}>
            <div className={`${hd.adment}`}>회원가입 즉시 사용 가능 10% OFF 쿠폰 발급</div>
        </div>
    <Navbar className={`${hd.navbar} flex-wrap`}  expand="lg" >
        <Navbar.Brand as="h1" className="col-lg-12 d-flex justify-content-center overflow-hidden "><a href="#top" className="d-block"><img src="./img/svg/The_Body_Shop_logo.svg"></img></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`${hd.nav}`}>
            <Scrollspy  currentClassName="active">
                {
                data.gnb.map( (v, x) =>{
                    return  <li key={x}><Nav.Link href={"#"+v.href}>{v.title}</Nav.Link></li>
                })  
                }
            </Scrollspy>
            <div>
                <a href="https://www.figma.com/file/Gjyx9lMevraEyYhHhauCDy/node-%EC%84%9C%EB%B2%84%EC%99%80-react-%ED%94%84%EB%A1%A0%ED%8A%B8%EA%B8%B0%EC%88%A0%EB%A1%9C-%EC%A0%9C%EC%9E%91%ED%95%98%EB%8A%94-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?type=design&node-id=0-1&mode=design&t=WYIr9cgiUatqe4NV-0"><img src="./img/figma.png" alt="" className={`${hd.figma}`} /></a>
            </div>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
    );
}
