import Header from "../../Components/Header";
import ModalPopup from "../../Components/ModalPopup";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";

const servicesData = [
  {
    title: "Web Development",
    content:
      "In an era dominated by digital presence, having a compelling website is not just an option—it's a necessity. Our web development services are designed to propel your business into the virtual realm, creating an immersive online experience for your audience. From responsive design to seamless navigation, we craft websites that not only showcase your brand but also engage and convert visitors into loyal customers. Our expert team of web developers harnesses the latest technologies to ensure your website stands out in a crowded digital landscape. Whether it’s a sleek corporate site or a dynamic e-commerce platform, we tailor our solutions to meet your specific needs. We believe in not just building websites but crafting digital experiences that leave a lasting impression.",
  },
  {
    title: "Mobile App Development",
    content:
      "In the fast-paced world of mobile technology, staying ahead is key. Our mobile app development services are geared towards transforming your ideas into innovative and functional realities. Whether you’re targeting iOS, Android, or cross-platform solutions, our skilled developers are adept at creating apps that resonate with your audience. We understand that a successful mobile app is not just about coding; it’s about user experience and intuitive design. Our development process focuses on creating apps that are not only technically robust but also user-friendly, ensuring a seamless experience for your customers. From concept to deployment, we guide you through every step of the mobile app development journey.",
  },
  {
    title: "Custom Development",
    content:
      "Off-the-shelf solutions might fit some, but for those who demand uniqueness and efficiency, custom development is the answer. Our custom development services are designed to cater to the specific needs of your business, providing tailor-made solutions that align with your goals and objectives. We pride ourselves on our ability to understand the intricacies of your business and develop bespoke applications that streamline your processes. Whether it’s a specialized software solution or a unique web application, our team of experts ensures that your custom development project is a perfect fit for your business.",
  },
  {
    title: "Cloud Development",
    content:
      "In today’s rapidly evolving digital landscape, leveraging the power of the cloud is no longer an option but a strategic necessity. Our cloud development services are aimed at helping businesses scale, innovate, and stay agile in an increasingly competitive environment. From cloud-native applications to migration strategies, our team is well-versed in harnessing the potential of leading cloud platforms. We assist you in optimizing your infrastructure, improving performance, and ensuring the security of your data. Let us take your business to new heights with our comprehensive cloud development solutions.",
  },
  {
    title: "Application Support",
    content:
      "The journey doesn’t end with development; it continues with robust support. Our application support services are designed to ensure that your digital assets operate seamlessly, providing a reliable foundation for your business operations. Our dedicated support team is ready to assist you with troubleshooting, updates, and maintenance, ensuring that your applications remain in top-notch condition. We understand the critical role that applications play in your business, and our commitment is to provide continuous support to keep your digital ecosystem running smoothly.",
  },
];

const SupportPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedService, setSelectedService] = useState("");

  const handleServiceClick = (title) => {
    setSelectedService(title);
  };

  const selectedServiceData = servicesData.find(
    (service) => service.title === selectedService
  );

  return (
    <Box m="20px" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      <ModalPopup/>

      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 1)", // Add shadow
        }}
      >
        <Typography
          variant="h2"
          color={colors.greenAccent[400]}
          gutterBottom
          textAlign={"center"}
          sx={{ m: "0 0 20px 0", fontWeight: "bold" }}
        >
          Our Services
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {servicesData.map((service) => (
                <Paper
                  key={service.title}
                  elevation={2}
                  sx={{
                    backgroundColor: colors.blueAccent[500],
                    color: colors.grey[100],
                    fontWeight: "bold",
                    marginBottom: 2,
                    padding: 1.5,
                    alignItems: "center",
                  }}
                >
                  <Button
                    // variant="contained"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    {service.title}
                  </Button>
                </Paper>
              ))}
            </Grid>
            <Grid item xs={8}>
              <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>
                  {selectedService
                    ? `Selected Service: ${selectedService}`
                    : servicesData.length > 0
                    ? servicesData[0].content
                    : "Default Content Here"}
                </Typography>
                <Typography variant="body1">
                  {selectedServiceData ? selectedServiceData.content : ""}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SupportPage;