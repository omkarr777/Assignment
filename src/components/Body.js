import { Grid } from "@mui/material";
import React from "react";
import BusinessOffer from "./BussinessOffer";
import { topClients } from "./DemoData";
import HallOfFame from "./HallOfFame";
import Footer from "./Footer";
import Address from "./Address";

const Body = () => {

  return (
    <div className="page-body">
      <Address />
      <h3>Business Offerings</h3>
      <BusinessOffer /> 
      <h3>HALL OF FAME</h3>
      <HallOfFame />
      <h3>TOP 12 CLIENTS</h3>
      <Grid container className="clients" gap={1}>
        {topClients.map((client, index) => {
          return (
            <Grid item lg={2.9} md={3.9} xs={12} className="client-card" key={index}>
              {client}
            </Grid>
          );
        })}
      </Grid>
      <Footer />

    </div>
  );
};

export default Body;
