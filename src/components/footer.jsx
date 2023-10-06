import React from "react";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fab from "@mui/material/Fab";
function Footer() {
  const year = new Date().getFullYear();
  const openWindow = (page) => window.open(page);

  return (
    <div className="container-fluid bg-dark text-white" id="footer">
      <div className="row">
        <div className=" col-sm-4  my-auto">
          <span>
            Created <span className="fs-5"> ✨</span> by Allwin Mel
          </span>
        </div>
        <div className="col-sm-4 my-auto ">
          <span>Copyright © {year} </span>
        </div>
        <div className="col col-sm-4 my-auto mx-auto ">
          <Stack
            direction="row"
            spacing={{ sm: 1, md: 2 }}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Fab color="primary" size="small">
              <GitHubIcon
                onClick={() => openWindow("https://github.com/allwinmel")}
                className="fa-brands fa-github"
              />
            </Fab>

            <Fab
              color="secondary"
              size="small"
              onClick={() =>
                openWindow("https://www.linkedin.com/in/allwin-mel-25907a127/")
              }
            >
              <LinkedInIcon />
            </Fab>

            <Fab size="small">
              <a href="allwinmel@gmail.com?body=My custom mail body">
                {" "}
                <EmailIcon />
              </a>
            </Fab>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Footer;
