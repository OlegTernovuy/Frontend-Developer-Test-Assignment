import { Box, Typography } from "@mui/material";
import Form from "./Form";

const SignUpBlock = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: {
          xs: "0 16px",
          md: "0 32px",
          lg: "0 60px",
          xl: 0,
        },
        pb: "100px",
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: "50px", textAlign: "center" }}>
        Working with POST request
      </Typography>
      <Form />
    </Box>
  );
};

export default SignUpBlock;
