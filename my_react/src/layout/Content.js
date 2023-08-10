import React from "react";
import Banner from "../component/Banner";
import Service from "../component/Service"
import Pick from "../component/Pick";
import About from "../component/About"
import Solution from "../component/Solution"


export default function Content(props) {
    return (
        <>
            <Banner></Banner>
            <Service></Service>
            <Pick></Pick>
            <About></About>
            <Solution></Solution>
        </>
    );
}
// idnm={props.dbsrc.gnb[2].href}