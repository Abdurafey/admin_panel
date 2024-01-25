import { Box, Button, TextField, FormControl, InputLabel, Select,MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../Components/Header";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";



const Form = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [countries, setCountries] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.countrystatecity.in/v1/countries", {
          method: 'GET',
          headers: {
            'X-CSCAPI-KEY': 'eldpalJ5ZXJpY3VZNmZ0TmRhREIxbXA1bDhhSG5nVUM3SDFMU3FzbA==', // Replace 'API_KEY' with your actual API key
          },
          redirect: 'follow',
        });

        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          console.error('Failed to fetch countries');
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  const validateForm = (values) => {
    let isValid = true;
  
    // First Name validation
    if (!values.firstName) {
      isValid = false;
    }
  
    // Last Name validation
    if (!values.lastName) {
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
  
    // Country validation
    if (!values.country) {
      isValid = false;
    }
  
    // User Requirement validation
    if (!values.userRequirement) {
      isValid = false;
    }
  
    return isValid;
  };


  const handleFormSubmit = (values) => {
    if (validateForm(values)) {
      console.log(values);
      navigate("/supportPages");
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

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
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
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
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
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
                sx={{ gridColumn: "span 4" }}
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
              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 4" }}>
                <InputLabel id="city-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // error={!!touched.city && !!errors.city}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.iso2} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="User Requirements"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userRequirement}
                name="userRequirement"
                error={!!touched.userRequirement && !!errors.userRequirement}
                helperText={touched.userRequirement && errors.userRequirement}
                sx={{ gridColumn: "span 4" }}
                multiline
                rows={10}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
  .string()
  .matches(phoneRegExp, "Phone number is not valid")
  .required("required"),
  country: yup.string().required("required"),
  userRequirement: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  country: "",
  userRequirement: "",
};


export default Form;