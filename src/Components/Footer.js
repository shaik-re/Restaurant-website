import React from "react";
import InstagramIcon from '../assets/inst.png';
import TwitterIcon from '../assets/t.png';
import GitHubIcon from '../assets/g.png';
import YouTubeIcon from '../assets/y.png';
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& img": {
              width: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& img:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* Render images */}
          <img src={InstagramIcon} alt="Instagram" />
          <img src={TwitterIcon} alt="Twitter" />
          <img src={GitHubIcon} alt="GitHub" />
          <img src={YouTubeIcon} alt="YouTube" />
        </Box>
        <Typography>
          All Rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
