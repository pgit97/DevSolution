import React from "react";
import Content from "./Content";
import img1 from '../src/images/img-1.jpeg';
import img2 from '../src/images/about-pic-3.png';
import "./Abc.css";


const Home=()=>{
    return(
        <>
       <Content dev='Dev Solutions' name='Grow your Business with' imgsrc={img1} visit='./services' btname='Our Services'/>
     
<div className="container-fluid about-1 mt-5" >
    <div className="container">
    <div className="row" >
       
        <div className="col-sm-8" style={{padding: "140px 0px 60px 0px"}}>
            <div className="" >
                <h4 className="about-2">RANKED AS #1 TOP IT SERVICES COMPANIES</h4>
                <p className="about-3">Are You Interested In Working With Us<br/>?</p>
            </div>
            <h2 className="about-4">Let's Meet</h2>
            
        </div>


        <div className="col-sm-4">
            <img src={img2} alt="image" style={{width:'330px'  }}></img>
        </div> 
   

    </div>

</div></div>

   
        </>
    );
};
export default Home;