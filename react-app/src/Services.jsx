import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./Abc.css";

const Services=()=>{
    return(
        <>
        <div class="container-fluid inner-slider-c statick-banner-c bg-image"  >
        <div class="container">
        <div class="row">               
            <div class="">
                <div class="c-hero__container" style={{marginTop:" 100px"}}>
                    <div class="c-hero__panel">
                        <div class="c-call-out">
                            <div class="c-call-out__container">
                                <h1 class="c-call-out__headline">Services</h1>
                                <p class="c-call-out__subheading">We provide services based on technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div></div>
    </div>
       <div className="my-5">
           <h1 className="text-center">Our Services</h1>
       </div>
       <div className="container-fluid mb-5">
           <div className="row">
               <div className="col-10 mx-auto">
                 <div className="row gy-4">
                 {
                       Sdata.map((val,ind)=>{
                           return <Card 
                           key={ind}
                           imgsrc={val.imgsrc}
                           title={val.title}
                           />
                       })
                   }
                 </div>
               </div>
           </div>
       </div>
        </>
    );
};
export default Services;