import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Award from "../assets/Award.png";
import Certificate from "../assets/c.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Paper, Button } from "@mui/material";

const Footer = () => {
  var AwardItems = [Award, Award, Award];
  var CertificateIteam = [Certificate, Certificate, Certificate];

  return (
    <Grid container className="footer" gap={5} justifyContent={"space-between"}>
      <Grid item xs={11.5} md={5.5} container>
        <Typography className="footer__title">AWARDS</Typography>
        <Box className="footer__box">
          <Box className="footer__border">
            {/* <img src={Award} alt="Award" />{" "} */}
            <Carousel>
              {AwardItems.map((item, i) => (
                <Paper key={item + i}>
                  <Button className="CheckButton">
                    <img src={item} alt="Award" />{" "}
                  </Button>
                </Paper>
              ))}
            </Carousel>
          </Box>
          <Typography className="footer__title">Award Name</Typography>
        </Box>
      </Grid>
      <Grid item xs={11.5} md={5.5} container>
        <Typography className="footer__title">CERTIFICATION</Typography>
        <Box className="footer__box">
          <Box className="footer__border">
            {/* <img src={Certificate} alt="Certificate" /> */}
            <Carousel>
              {CertificateIteam.map((item, i) => (
                <Paper key={item + i}>
                  <Button className="CheckButton">
                    <img src={item} key={item + i} alt="Award" />{" "}
                  </Button>
                </Paper>
              ))}
            </Carousel>
          </Box>{" "}
          <Typography className="footer__title">Certificate Name</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
