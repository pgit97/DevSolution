import React, { useState } from "react";
import "./Abc.css";
import { IoIosCall,IoLocation } from 'react-icons/io';
import { MdEmail,MdLocationOn } from 'react-icons/md';



const Contact=()=>{

        const [data,setData]=useState({
            fullname:'',
            mobile:'',
            email:'',
            msg:'',
        });
const InputEvent=(event)=>{
    const {name,value}=event.target;

    setData((preVal)=>{
        return {
            ...preVal,
        [name]:value,
        }
        
    });
};

const formSubmit=(e)=>{
    e.preventDefault();
    alert(
        `Your name is ${data.fullname}. Your mobile number is ${data.mobile} and email is ${data.email}, Here is what you want to say ${data.msg}`
    )
};
    return(
        <>
         <div className="container-fluid inner-slider-c statick-banner-c bg-image"  >
        <div className="container">
        <div className="row">               
            <div className="">
                <div className="c-hero__container" style={{marginTop:" 100px"}}>
                    <div className="c-hero__panel">
                        <div className="c-call-out">
                            <div className="c-call-out__container">
                                <h1 className="c-call-out__headline">Contact Us</h1>
                                <p className="c-call-out__subheading">Feel free to contact us for any Query</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div></div>
    </div>
       
        <div className="container contact">
            <div className="row">
            <div className="col-12">
            <div style={{textAlign: "center",color:"#080951"}}>
             
                <h3 style={{fontWeight: "700"}}>GET IN TOUCH</h3>
                <IoIosCall/>+91 9823468797<br/>
                <MdEmail/>abc@connectdindia.com<br/>
                 <MdLocationOn/> Noida U.P. 
                
            </div>
        </div>
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    
                <div  data-wow-delay=".5s">
                <div className="mb-3">
                        <label for="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" name="fullname" value={data.fullname} onChange={InputEvent}  placeholder="Your Name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" name="mobile" value={data.mobile} onChange={InputEvent} placeholder="mobile number" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" 
                        value={data.email}
                        onChange={InputEvent}
                        aria-describedby="emailHelp" placeholder="name@example.com" required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    </div>
                    
                    <div className="mb-3">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="3"  name="msg" value={data.msg} onChange={InputEvent} ></textarea>
                    </div>
                   <div className="col-12">
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                   </div>
                
                    </form>
                </div>
            </div>
        </div>



        </>
    )
};
export default Contact;
