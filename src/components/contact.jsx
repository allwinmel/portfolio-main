import React,{ useState} from "react";
import Lamp from "../data/lamp.png";
import Light from "../data/light.png";

function Contact() {
            const[light,setLight] = useState('hidden')
            const openWindow = (page)=> window.open(page)

  return (
    <>
      <div className="" id="contact">
        <div className="container bg-dark rounded-3 rounded-md-4">
          <div className="row ">
            <div className="col-8 mx-auto">
              <img className="col-5 col-md-3 col-lg-2" src={Lamp} alt="null" onClick={()=>{light===""?setLight("hidden"):setLight("")}}/>
            </div>
          </div>
          <div className={`row ${light}`} >
            <div className="col-12 col-sm-12 col-md-9 mx-auto ps-0">
             <img className="col-12 col-md-12 col-lg-8" src={Light} alt="null" />
           <div className="position-relative bottom-50 d-flex justify-content-center gap-3">
            <i onClick={()=>openWindow("https://www.linkedin.com/in/allwin-mel-25907a127/")} className="fa-brands fa-linkedin"></i>
            <i onClick={()=>openWindow("https://github.com/allwinmel")} className="fa-brands fa-github"></i>
         <i  className="fa-solid fa-envelope">   <a href="allwinmel@gmail.com?body=My custom mail body">  </a>
           </i>
           </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Contact;
