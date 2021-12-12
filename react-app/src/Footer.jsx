import React from "react";

import { FaFacebookF,FaInstagram,FaLinkedinIn } from 'react-icons/fa';
const Footer=()=>{
    return(
        <>
               <footer  className="container-fluid"  style={{background:"rgb(0, 0, 0)", marginTop:'6rem'}}>
        <div className="container">
          <div className="row" style={{textAlign: "center",color: "#fff"}} >
              
            <div className="col-md-3 col-xs-12 vertical ">
                <div >
                   
                    <h5 className="col-9 mt-4 footer_logo">Dev Solutions</h5>
                </div>
                <div>
                  <p  style={{fontSize: "12px"}}>Dev Solutions is one of the fastest growing technology companies catering to your multidisciplinary requirements in the digital space. We design, create and produce work with passion to provide businesses holistic digital solutions that mainly focuses on the processes.</p>
                 </div>
            </div>
            
            <div className="col-md-3 col-xs-12 vertical">
               <h5 className="space">Services</h5>
               <div>
                   <ul style={{listStyle:'none'}} className="space1">
                    <li ><a href="\" >App Development </a></li>
                    <li ><a href="\" >Web Development </a></li>
                    <li ><a href="\" >Content Writing</a></li>
                   </ul>
               </div>
            </div>

            <div className="col-md-3 col-xs-12 vertical">
                <h5 className="space">Quick Links</h5>
               
                    <ul  style={{listStyle:'none'}} className="space1">
                        <li><a href="./about">About Us </a></li>
                       <li> <a href="./contact">Contact </a></li>
                       <li><a href="./services" >Services </a></li>
                       
                   </ul>
                
            </div>
           
            <div className="col-md-3 col-xs-12 " >
                <h5 style={{marginTop: "25px",fontWeight: "600",fontSize: "19px",marginBottom: "24px"}}>Contacts</h5>
                
                <div>
                    <ul className="text-muted" style={{fontSize: "14px", textAlign: "center",marginTop: "5px",listStyle:"none"}}>
                        <li><span >Corporate Office:</span> Noida,U.P.</li>
                        <li><span > Email:</span> ABC@example.com </li>
                        <li><span >Mobile No.</span> +91 8989298929</li>
                        
                    </ul>
                </div>
                <div style={{textAlign:"center"}}>
                    <a className="col-1 fontStyle1" href="/" ><FaFacebookF /></a>
                    <a href="/" class="col-1 fontStyle1"><FaInstagram /></a>
                    <a href="/" class="col-1 fontStyle1"><FaLinkedinIn/></a>
                </div>
            </div>
         </div>
        </div>  
   </footer>
   <div className="container-fluid" style={{backgroundColor: "black"}}>
        <div className="container" >
            <div className="row" >
                <div className="col-sm-12">
                    <p className="copyright">Created by Priti &copy; 2021</p>
                </div>
            </div>
        </div>
</div>
        </>
    )
};
export  default Footer;