import { Box, Typography } from "@mui/material";

import HeroBack from "../../assets/hero.webp";
import CustomButton from "../../style/CustomButton";
import { login } from "../../features/action";

const Hero = () => {
  const handleLogin = () => {
    login();
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "xl",
        height: {
          xs: "500px",
          md: "650px",
        },
        mb: "140px",
        "&::before": {
          content: '""',
          overflow: "hidden",
          backgroundImage: `url(${HeroBack})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(50%)",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "380px",
          minWidth: "328px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography variant="subtitle1" color="white" sx={{ mb: "21px" }}>
          Test assignment for front-end developer
        </Typography>
        <Typography variant="body1" color="white" sx={{ mb: "32px" }}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Typography>
        <CustomButton desc="Sign up" action={handleLogin} />
      </Box>
    </Box>
  );
};

export default Hero;
