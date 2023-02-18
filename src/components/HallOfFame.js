import React, { useMemo } from "react";
import { HallOfFameDatas } from "./DemoData";
import { Paper, Button, Grid, useMediaQuery, Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";
import Carousel from "react-material-ui-carousel";

const HallOfFame = () => {
  const tablet = useMediaQuery("(min-width:1200px)");
  const mobile = useMediaQuery("(max-width:900px)");
  const carouselItem = useMemo(() => {
    if (tablet) {
      return 3;
    } else if (mobile) {
      return 1;
    }
    return 2;
  });
  return (
    <Carousel>
      {HallOfFameDatas.length > 0 &&
        HallOfFameDatas.map((_, i) => {
          // const carouselItem = matches ? i + 3 : i + 2;
          return (
            <Stack
              // container
              direction="row"
              key={i}
              justifyContent="space-between"
            >
              {[...HallOfFameDatas, ...HallOfFameDatas]
                .slice(i, i + carouselItem)
                .map((cardInfo) => {
                  return (
                    <ProjectCard
                      key={cardInfo.id}
                      id={cardInfo.id}
                      projectImg={cardInfo.projectImg}
                      projectName={cardInfo.projectName}
                      clientName={cardInfo.clientName}
                      location={cardInfo.location}
                      detail={cardInfo.detail}
                    />
                  );
                })}
            </Stack>
          );
        })}
    </Carousel>
  );
};

export default HallOfFame;
