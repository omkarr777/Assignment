import { Button } from "@mui/material";
import facebook from "../assets/facebook.png";
import insta from "../assets/Instagram-Icon-01 1.png";
import twitter from "../assets/Twitter-04 1.png";
import youTube from "../assets/youtube-logo-2431 1.png";

import React from "react";
import banner from "../assets/banner.png";
import premium from "../assets/premium.png";

const Header = () => {
  return (
    <div className="header">
      <img src={banner} alt="banner" width="100%" />
      <div className="header-details">
        <div className="details-sec-1">
          <h3>NUTAN GLASS HOUSE</h3>
          <h4>Real Estate Developer (20-50 Projects Delivered)</h4>
          <h4>Pune</h4>
          <div className="social-links">
            <img src={facebook} alt="facebook icon" />
            <img src={insta} alt="inst icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={youTube} alt="youtube ucon" />
          </div>
        </div>
        <div className="details-sec-2">
          <img src={premium} alt="premium" />
          <div className="enquiry-buttons">
            <Button className="btn" variant="contained">
              Send Enqiury
            </Button>
            <Button variant="contained">Save</Button>
          </div>
        </div>
      </div>
      <div className="company-details">
        <h3>
          Success is not final; failure is not fatal: it is the courage to
          continue that counts.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum
        </p>
      </div>
    </div>
  );
};

export default Header;
