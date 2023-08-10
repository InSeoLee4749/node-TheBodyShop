import React from "react";
import Hd from "./layout/Hd";
import Content from "./layout/Content";
import Ft from "./layout/Ft";


import hddata from './data/hd';

export default function App(props) {
    return (
        <>
            <Hd dbsrc={hddata} ></Hd>
            <Content  dbsrc={hddata} ></Content>
            <Ft></Ft>
        </>
    );
}
