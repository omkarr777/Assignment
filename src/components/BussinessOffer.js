import { Grid, Typography, Divider } from "@mui/material";
import React from "react";
import Icon from "../assets/Vector.png";
import { BusinessOfferingDatas } from "./DemoData";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const BusinessOffer = () => {
  return (
    <Grid container columnGap={6} justifyContent="space-between">
      {BusinessOfferingDatas.length > 0 &&
        BusinessOfferingDatas.map((cardInfo, i) => (
          <Grid
            item
            md={5.5}
            xs={12}
            key={cardInfo.id + i}
            className="offerCard"
          >
            <Grid container justifyContent="space-between">
              <Grid item xs={1}>
                <img src={Icon} alt="icon" />
              </Grid>
              <Grid item xs={10}>
                <Typography className="offerCard__title">
                  {cardInfo.title}
                </Typography>
              </Grid>
            </Grid>
            <Divider className="offerCard__divider" />
            <Grid container justifyContent="space-between">
              <Grid item lg={5} md={12} xs={12}>
                <img
                  width="100%"
                  src={cardInfo.image}
                  alt="offer"
                  className="offerCard_image"
                />
              </Grid>
              <Grid item lg={6} md={12} xs={12}>
                {cardInfo.points.length > 0 &&
                  cardInfo.points.map((point, index) => {
                    return (
                      <>
                        <Typography className="offerCard__desc" key={index}>
                          <KeyboardArrowRightIcon />
                          {point}
                        </Typography>
                      </>
                    );
                  })}
              </Grid>
              <Grid item md={12} className={"offerCard__info"}>
                {cardInfo.description}
              </Grid>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

export default BusinessOffer;
