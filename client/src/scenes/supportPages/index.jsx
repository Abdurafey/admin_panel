import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Header from "../../Components/Header";
import { useParams } from 'react-router-dom';
import { FormDataContext } from "../form";
import axios from "axios";

const SupportPages = () => {
  const { username } = useParams();
  const { formData, setFormData } = useContext(FormDataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/formdata/${username}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, setFormData]);

  return (
    <Box m="20px">
      <Header title={`Support Page for ${username}`} />
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : formData ? (
        <>
          <Typography variant="h1">Welcome {username}</Typography>
          <Typography variant="body1">Email: {formData.email}</Typography>
          <Typography variant="body1">Contact: {formData.contact}</Typography>
          {/* Add more fields as needed */}
        </>
      ) : (
        <Typography variant="body1">User not found</Typography>
      )}
    </Box>
  );
};

export default SupportPages;

// import { Box, Typography } from '@mui/material';
// import React, {useContext} from 'react';
// import Header from "../../Components/Header";
// import { useParams } from 'react-router-dom';
// import { FormDataContext } from "../form";

// const SupportPages = () => {
//   // const { formData } = useContext(FormDataContext);
//   const { username } = useParams();

//   return (
//     <Box m="20px">
//       <Header title={`Support Page for ${username}`} />
//       <Typography variant="h1">Welcome {username}</Typography>
//     </Box>
//   );
// };

// export default SupportPages;

// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import Header from "../../Components/Header";
// import { useParams, useNavigate } from "react-router-dom";
// import { useUserContext } from "../form/UserContext";
// const SupportPages = () => {
//   const { firstName } = useParams();
//   const navigate = useNavigate();
//   const { getUserData, removeUserPage } = useUserContext();
//   const userData = getUserData(firstName);

//   const handleDisable = () => {
//     removeUserPage(firstName);
//     navigate.push("/"); // Redirect to the main page after disabling the support page
//   };

//   return (
//     <Box m="20px">
//       <Header title={`Support Page for ${firstName}`} subtitle="Create a New User Profile" />
//       {userData && (
//         <>
//           <Typography variant="h4">Welcome {firstName}</Typography>
//           <Typography variant="body1">User Requirements: {userData.userRequirement}</Typography>
//           <Button variant="outlined" onClick={handleDisable}>
//             Disable Support Page
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// };

// export default SupportPages;
