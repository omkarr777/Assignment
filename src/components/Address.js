import { Grid, Typography } from "@mui/material";
import React from "react";
import {CorporateFare, RequestQuote,Mail,Person, Copyright, TravelExplore, Language, Place} from '@mui/icons-material';
const Address = () => {
  return (
    <Grid container columnGap={5} justifyContent="space-between" my={4}>
      <Grid item container md={5.7} xs={12} className="addressCard">
        <Grid item xs={12} className="addressCard__link">
          <CorporateFare sx={{color: 'rgba(71, 181, 158, 1)', mr: 3}} />
          <Typography> Establishment in 1991</Typography>
        </Grid>
        <Grid item xs={12} className="addressCard__link">
          <RequestQuote sx={{color: 'rgba(71, 181, 158, 1)', mr: 3}} />
          <Typography> GST Number: 07AAGFF2194N1Z1 / Not Avaliable</Typography>
        </Grid>
        <Grid item xs={12} className="addressCard__link">
          <Copyright sx={{color: 'rgba(71, 181, 158, 1)', mr: 3}} />
          <Typography> Proprietory</Typography>
        </Grid>
        <Grid item xs={12} className="addressCard__link">
          <TravelExplore sx={{color: 'rgba(71, 181, 158, 1)', mr: 3}} />
          <Typography>
            ISO Certification : None / ISO 9001:2008,ISO 9001:2015,ISO
            14001:2015,ISO 45001:2018,ISO 27001:2013,ISO 50001:2008,ISO
            26000:2010,ISO 31000:2018
          </Typography>
        </Grid>
      </Grid>
      <Grid item container md={5.7} xs={12} className="addressCard">
        <Grid item xs={12} className="addressCard__link">
          <Language sx={{color: 'rgba(71, 181, 158, 1)', mr: 3}} />
          <Typography>www.neevay.com</Typography>
        </Grid>
        <Grid item xs={12} className="addressCard__link">
          <Mail sx={{color: 'rgba(71, 181, 158, 1)', mr: 3}} />
          <Typography>ngh.praveen@gmail.com</Typography>
        </Grid>
        <Grid item xs={12} className="addressCard__link">
          <Person sx={{color: 'rgba(71, 181, 158, 1)', mr: 3}} />
          <Typography>+91XXXXXXXX</Typography>
        </Grid>
        <Grid item xs={12} className="addressCard__link">
          <Place sx={{color: 'rgba(71, 181, 158, 1)', mr: 3}} />
          <Typography>
            {" "}
            HEAD OFFICE123, Demo Office,Demo Tech Park,Near Demo Hotel, Pune,
            Pune,Maharashtra, India, 411014,
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Address;
