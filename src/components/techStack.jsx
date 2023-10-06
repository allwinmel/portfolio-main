import React from "react";
import Html from "../data/html.png";
import Css from "../data/css.png";
import Bootstrap from "../data/bootstrap.png";
import Es6 from "../data/ES6.jpg";
import NodeJS from "../data/node.png";
import ReactJS from "../data/react.png";
import MongoDB from "../data/mongodb.png";
import Redux from "../data/Redux.png";
import Aws from "../data/Aws.png";
import Postman from "../data/Postman.png";
import Api from "../data/API-amico.svg";

function TechStack() {
  return (
    <>
      <div
        className="container bg-warning shadow-lg rounded-3 rounded-md-4"
        id="techstack"
      >
        <div className="row ">
          <span className="fs-1 fw-bold">Tech Stack</span>
          <p className="fs-6">
            These are the few Technologies , languages and frameworks that i
            grind on a regular basis..
          </p>
        </div>
        <div className="row ms-sm-5 ps-5  my-4">
          <div className=" col col-md-4 row gap-2  mx-4 my-4" id="icons">
            <div className="col-4 col-sm-4 col-md-5 col-lg-4 ">
             
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8"
                  src={Html}
                  alt="null"
                />
          
             
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8"
                  src={Css}
                  alt="null"
                />
        
    
            </div>

            <div className=" col-4 col-sm-4 col-md-5 col-lg-4">
            <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={Es6}
                  alt="null"
                />
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
            <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8"
                  src={Bootstrap}
                  alt="null"
                />
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
            <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={NodeJS}
                  alt="null"
                />
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
            <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={ReactJS}
                  alt="null"
                />
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
            <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={MongoDB}
                  alt="null"
                />
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
            <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={Redux}
                  alt="null"
                />
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
            <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={Postman}
                  alt="null"
                />
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
            <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={Aws}
                  alt="null"
                />
            </div>
          </div>

          <div className="col-md-5 d-none d-md-block ms-md-4">
            <img src={Api} alt="null" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
