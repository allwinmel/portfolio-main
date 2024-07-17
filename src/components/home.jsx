import React from "react";
import Coder from "../data/Code typing-bro.svg";
import Particle from "./particle";
import Type from "./type";
import Coder2 from "../data/Developer activity-bro.svg";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Fab from "@mui/material/Fab";

function Home() {
  const openWindow = (page) => window.open(page);

  return (
    <>
      <Particle />
      <div className="container" id="home">
        <div className="row ">
          <img
            className="col-7 col-md-6 p-0  d-lg-none mx-auto "
            src={Coder}
            alt="null"
          />
          <div className="col col-sm-10 col-md-10 col-lg-7 my-md-auto d-flex flex-column mx-auto text-white">
            <div className=" d-flex fs-4 align-items-center ">
              Hey Buddy!
              <span className="fs-1 me-2" id="wave">
                👋🏻
              </span>{" "}
              I'm
              <span className=" text-success fw-bold ms-4" id="name">
                Allwin Mel
              </span>
            </div>
            <div
              className="fw-bold align-self-start text-warning "
              id="profession"
            >
              <Type />
            </div>

            <p className="col mt-5" id="mystory">
              I'm an Entry level Fullstack developer who love to code.
              <p>
                I Currently Connect With WEB Apps By{" "}
                <b className=" me-2  text-success">
                  ECMAScript6,ReactJS, NodeJS,ExpressJS,MongoDB.
                </b>
              </p>
              <span className="fs-5"> Eager to meet my Team. </span>
            </p>
            <div id="resume">
              <Stack
                direction="row"
                spacing={{ sm: 1, md: 2 }}
                sx={{ alignItems: "center" }}
              >
                <Fab color="primary">
                  <GitHubIcon
                    onClick={() => openWindow("https://github.com/allwinmel")}
                    className="fa-brands fa-github"
                  />
                </Fab>

                <Fab
                  color="secondary"
                  onClick={() =>
                    openWindow("https://www.linkedin.com/in/allwin-mel-25907a127/")
                  }
                >
                  <LinkedInIcon />
                </Fab>

                <Fab>
                  <a href="allwinmel@gmail.com?body=My custom mail body">
                    {" "}
                    <EmailIcon />
                  </a>
                </Fab>
                <Fab
                  variant="extended"
                  onClick={() =>
                    openWindow(
                      "https://drive.google.com/file/d/1ebIBV9XcMZjX2sC9EDWgQdoGesCTcY3l/view?usp=drive_link"
                    )
                  }
                >
                  <NewspaperIcon sx={{ mr: 1 }} />
                  Resume
                </Fab>
              </Stack>
            </div>
          </div>

          <img className="col-5 d-none d-lg-block" src={Coder2} alt="null" />
        </div>
      </div>
    </>
  );
}

export default Home;
