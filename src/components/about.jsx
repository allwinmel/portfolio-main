import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TerminalIcon from '@mui/icons-material/Terminal';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import Typography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Guvi from '../data/guvi.png'
function About() {



  return (
    <>
      <div className="container" id="about">
        <div className="row">
            <div className="col">
            <Typography color={"primary.light"} my={2} variant="h3">
                My Journey so Far
            </Typography>
            </div>

        </div>
      <div className="row">
          <Timeline position="alternate" sx={{color:'white'}}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          2013-2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FlightTakeoffIcon sx={{color:'steelblue'}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
         Aviation Industry
          </Typography>
          <Typography>I start my Carrier with Spice jet Airline,Has a Customer Service Executive.
            After a Year I am planning to Get into Air Asia,Has a Duty-Manger.
                </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
        
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LocalAirportIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Bangalore International Airport
          </Typography>
          <Typography> I am working BIAL has a Team-leader few years
            After some The company  Contract Has Been Closed.
              </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <TerminalIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>I Start learning
          Ethical hacking In Online Courses After I much intreating to learn Coding.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <img src={Guvi} alt="guvi" width={"30px"} className="rounded-circle"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            GUVI
          </Typography>
          <Typography>
            I met Guvi then i planned to improve developer skill,
            so I had enrolled the Full Stack Developer course,
            now i am  keen to use my skills and shine,
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

          </div>

       
        
      </div>
    </>
  );
}

export default About;
