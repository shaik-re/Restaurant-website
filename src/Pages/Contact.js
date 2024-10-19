import React from "react";
import Layout from "../Components/Layout"; 
import SupportAgentImage from '../assets/s.png';
import MailImage from '../assets/mail.png';
import CallImage from '../assets/call.png';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio beatae ducimus magni nobis culpa praesentium velit expedita quae.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }} align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img src={SupportAgentImage} alt="Support Agent" style={{ width: "24px", marginRight: "10px" }} />
                  1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img src={MailImage} alt="Email" style={{ width: "24px", marginRight: "10px" }} />
                  help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img src={CallImage} alt="Phone" style={{ width: "24px", marginRight: "10px" }} />
                  1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
