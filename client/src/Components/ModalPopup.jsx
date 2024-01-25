import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Box,
  Button,
  useTheme,
  Stack,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { tokens } from "../theme";

const ModalPopup = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const validateForm = (values) => {
    let isValid = true;

    // First Name validation
    if (!values.firstName) {
      isValid = false;
    }

    // Email validation
    if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
      isValid = false;
    }

    // Contact validation (assuming it should be a number)
    if (!values.contact || !/^\d+$/.test(values.contact)) {
      isValid = false;
    }

    // Project Overview validation
    if (!values.projectOverview) {
      isValid = false;
    }

    // Marketing Service validation
    if (!values.marketingService) {
      isValid = false;
    }

    // Support Service validation
    if (!values.supportService) {
      isValid = false;
    }

    // Contact Timings validation
    if (!values.contactTimings) {
      isValid = false;
    }

    // Budget validation
    if (!values.budget) {
      isValid = false;
    }

    // Meeting validation
    if (!values.meeting) {
      isValid = false;
    }

    return isValid;
  };

  const handleFormSubmit = (values) => {
    if (validateForm(values)) {
      console.log(values);
      console.log("chl shabba");
    }
  };

  const [open, openChange] = useState(false);
  const functionOpenPopup = () => {
    console.log("aaja bsdk");
    openChange(true);
  };
  const functionClosePopup = () => {
    console.log("chala ja bsdk");
    openChange(false);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Box display="flex" justifyContent="end" mt="20px" m="20px">
        <Button
          onClick={functionOpenPopup}
          type="submit"
          color="secondary"
          variant="contained"
          sx={{
            backgroundColor: colors.blueAccent[500],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <AddOutlinedIcon sx={{ mr: "10px" }} />
          Fill User Requirement Form
        </Button>
      </Box>
      <Dialog open={open} onClose={functionClosePopup} fullWidth maxWidth="md">
        <DialogActions
          style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
        >
          <Button
            onClick={functionClosePopup}
            color="error"
            variant="contained"
          >
            Close
            <HighlightOffOutlinedIcon />
          </Button>
        </DialogActions>
        <DialogTitle
        variant="h2"
        color={colors.grey[100]}
        gutterBottom
        textAlign={"center"}
        sx={{ m: "0 0 20px 0", fontWeight: "bold" }}
        >User Requirement Form</DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={checkoutSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={!!touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Contact Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.contact}
                      name="contact"
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Project Overview"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.projectOverview}
                      name="projectOverview"
                      error={
                        !!touched.projectOverview && !!errors.projectOverview
                      }
                      helperText={
                        touched.projectOverview && errors.projectOverview
                      }
                      sx={{ gridColumn: "span 4" }}
                      multiline
                      rows={8}
                    />
                    <FormControl
                      fullWidth
                      variant="filled"
                      sx={{ gridColumn: "span 4" }}
                    >
                      <InputLabel id="city-label">
                        Marketing Services
                      </InputLabel>
                      <Select
                        labelId="marketingService-label"
                        id="marketingService"
                        name="marketingService"
                        value={values.marketingService}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="required">Required</MenuItem>
                        <MenuItem value="notRequired">Not Required</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl
                      fullWidth
                      variant="filled"
                      sx={{ gridColumn: "span 4" }}
                    >
                      <InputLabel id="city-label">Support Service</InputLabel>
                      <Select
                        label="supportService-label"
                        id="supportService"
                        name="supportService"
                        value={values.supportService}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="required">Required</MenuItem>
                        <MenuItem value="notRequired">Not Required</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      fullWidth
                      variant="filled"
                      sx={{ gridColumn: "span 4" }}
                    >
                      <InputLabel id="city-label">Contact Timing</InputLabel>
                      <Select
                        label="contactTimings-label"
                        id="contactTimings"
                        name="contactTimings"
                        value={values.contactTimings}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="required">
                          9am - 12pm PST (Pakistan Standard Time)
                        </MenuItem>
                        <MenuItem value="notRequired">
                          12pm - 3pm PST (Pakistan Standard Time)
                        </MenuItem>
                        <MenuItem value="notRequired1">
                          3pm - 6pm PST (Pakistan Standard Time)
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Budget"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.budget}
                      name="budget"
                      error={!!touched.budget && !!errors.budget}
                      helperText={touched.budget && errors.budget}
                      sx={{ gridColumn: "span 4" }}
                    />

                    <FormControl
                      fullWidth
                      variant="filled"
                      sx={{ gridColumn: "span 4" }}
                    >
                      <InputLabel id="city-label">Meeting Point</InputLabel>
                      <Select
                        label="meeting-label"
                        id="meeting"
                        name="meeting"
                        value={values.meeting}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="required">In person</MenuItem>
                        <MenuItem value="notRequired">
                          Video conferencing
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <Box justifyContent="center" mt="20px">
                      <Button
                        type="submit"
                        color="error"
                        variant="contained"
                        sx={{
                          backgroundColor: colors.blueAccent[500],
                          color: colors.grey[100],
                        }}
                        style={{
                          fontSize: "1rem",
                          padding: "10px 20px 10px 20px",
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </form>
              )}
            </Formik>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  projectOverview: yup.string().required("required"),
  marketingService: yup.string().required("required"),
  supportService: yup.string().required("required"),
  contactTimings: yup.string().required("required"),
  budget: yup.string().required("required"),
  meeting: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  email: "",
  contact: "",
  projectOverview: "",
  marketingService: "",
  supportService: "",
  contactTimings: "",
  budget: "",
  meeting: "",
};

export default ModalPopup;
