import { Box, Typography } from '@mui/material';
import Header from "../../Components/Header";


const SupportPages = () => {




  return (
    <Box m="20px">
      <Header title={`Support Page for user`} />
        <Typography variant="body1">Loading...</Typography>
      
        <Typography variant="body1">User not found</Typography>
    </Box>
  );
};

export default SupportPages;