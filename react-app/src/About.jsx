import React from "react";
import Content from "./Content";
import img from '../src/images/img-1.jpeg';


const About=()=>{
    return(
        <>
          <Content name='Welcome to Dev Solutions' imgsrc={img} visit='/contact' btname='Contact Now'/>
        </>
    );
};

export default About;