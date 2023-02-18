import React from "react";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ProjectCard = (props) => {
  return (
    <Grid
      // item
      container
      lg={3.7}
      md={5.8}
      gap={2}
      xs={12}
      key={props.id}
      className="fameCard"
    >
      <Grid item xs={12}>
        <img src={props.projectImg} alt="fameOffice" width="100%" />
      </Grid>
      <Grid item xs={12} p={2}>
        <Typography className="fameCard__title">{props.projectName}</Typography>
        <Typography className="fameCard__name">{props.clientName}</Typography>
        <Typography className="fameCard__loc">
          <LocationOnIcon />
          {props.location}
        </Typography>
        <Typography className="fameCard__desc">{props.detail}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
