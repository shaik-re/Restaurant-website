import React, { useState } from "react";
import { MenuList } from "../data/data"; // Ensure the path is correct
import Layout from "../Components/Layout"; // Adjust path as needed
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Button,
  Snackbar,
} from "@mui/material";

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (menu) => {
    setSelectedItem(menu);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOrderConfirm = () => {
    // Handle order confirmation logic here (e.g., redirect to an order page, update state, etc.)
    console.log("Order placed for:", selectedItem);
    setOpenSnackbar(true);
    handleCloseModal(); // Close the modal
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea onClick={() => handleImageClick(menu)}>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component="img"
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {menu.description}
                </Typography>
                <Typography variant="h6" component="div">
                  Price: ₹{menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* Modal for item details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedItem && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedItem.name}
              </Typography>
              <CardMedia
                component="img"
                src={selectedItem.image}
                alt={selectedItem.name}
                sx={{ mb: 2, height: 200, objectFit: "cover" }}
              />
              <Typography variant="body2" color="text.secondary">
                {selectedItem.description}
              </Typography>
              <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                Price: ₹{selectedItem.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOrderConfirm}
                sx={{ mt: 2 }}
              >
                Confirm Order
              </Button>
            </>
          )}
        </Box>
      </Modal>

      {/* Snackbar for order confirmation */}
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={`Order placed for ${selectedItem?.name}`}
        autoHideDuration={6000} // Automatically hide after 6 seconds
      />
    </Layout>
  );
};

export default Menu;
