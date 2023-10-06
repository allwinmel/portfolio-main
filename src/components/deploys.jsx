import React from "react";
import Food from "../data/Food.png";
import Tic from "../data/Tic-Tac-Tok.png";
import Vintage from "../data/Vintage-phone-Allwin-Guvi.png";
import Fitness from "../data/fitness-logger.jpeg";
import snappy from "../data/snappy.png";
import allwin from "../data/allwin-guvi-kanye-quotes.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function Deploys() {
  const sites = [
    {
      img: Fitness,
      front: "https://github.com/allwinmel/Fitness_Logger_frontend.git",
      back: "https://github.com/allwinmel/guvi-Allwin-backend.git",
      launch: "https://651ebeebc46a1d008d2ec03b--fitness-allwin.netlify.app/",
      size: { color: "black", marginX: "3px" },
    },
    {
      img: Food,
      front: "https://github.com/allwinmel/restaurant-frontend-master",
      back: "https://github.com/allwinmel/restaurant-management-system-master",
      launch: "https://651fb5839290f37013afe32e--dynamic-melba-9fc76e.netlify.app/",
      size: { color: "black", marginX: "3px" },
    },
    {
      img: snappy,
      front:
        "https://github.com/allwinmel/chat-app-react-nodejs/tree/278d62186bfb8cbd30aaf69aabc36817c81dd566/public",
      back: "https://github.com/allwinmel/chat-app-react-nodejs/tree/278d62186bfb8cbd30aaf69aabc36817c81dd566/server",
      launch: "https://651ff1ea62665d1cc8c26b1d--fanciful-pavlova-78b2e7.netlify.app/login",
      size: { color: "black", marginX: "3px" },
    },
    {
      img: Tic,
      front: "https://github.com/allwinmel/tic-tac-toe-main.git",
      launch: "https://tic-tac-toe-allwin-guvi.netlify.app/",
      size: { color: "#e3f2fd", marginX: "5px" },
    },
    {
      img: Vintage,
      front:
        "https://github.com/allwinmel/Vintage-phone.git",
      launch: "https://vintage-phone-allwin-guvi.netlify.app/",
      size: { color: "black", marginX: "5px" },
    },
    {
      img: allwin,
      front: "https://github.com/allwinmel/GUVI-DAY-21-TASK-12-Quotes-API-main.git",
      launch: "https://allwin-guvi-kanye-quotes.netlify.app/",
      size: { color: "lime", marginX: "5px" },
    },
  ];
  return (
    <>
      <div className="container my-4" id="deploys">
        <div className="row my-4 mx-0 ">
          <div className="col d-flex flex-column text-center bg-info  rounded-3 text-white">
            <span className="fs-1 fw-bold">ALIVE SITES</span>
            <p className="fs-6">Something I have built and deployed</p>
          </div>
        </div>

        <div className="row">
          {sites.map((site, index) => (
            <div key={index} className="col-12 col-md-4 p-0 sites">
              <img src={site.img} className="img-fluid h-100" alt="..." />
              <div className="icons">
                <p className="text">
                  <span onClick={() => window.open(site.front)}>
                    <b className="me-2 badge bg-primary">Front end</b>
                    <GitHubIcon fontSize="large" sx={site.size} />
                  </span>

                  <br />
                  {site.back ? (
                    <span onClick={() => window.open(site.back)}>
                      <b className="me-2 badge bg-primary">Back end</b>
                      <GitHubIcon fontSize="large" sx={site.size} />
                    </span>
                  ) : (
                    <></>
                  )}
                </p>
                <p className="text">
                  <a href={site.launch}>
                    <b className="me-2 badge bg-primary">Live Site</b>
                    <LaunchIcon fontSize="large" sx={site.size} />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Deploys;
