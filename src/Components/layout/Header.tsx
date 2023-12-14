import { Box, ImageList, Stack } from "@mui/material";
import Logo from "../../assets/Logo.svg";
import CustomButton from "../../style/CustomButton";
import { getInitialState, login } from "../../features/action";
import React, { useEffect } from "react";
import { IState, IsAuthenticatedContext } from "../../Context/TokenContext";

const Header = () => {
  const { setIsAuthenticated } = React.useContext(
    IsAuthenticatedContext
  ) as IState;

  const getAuthenticated = () => {
    const initialState = getInitialState();

    setIsAuthenticated(initialState);
  };

  const handleLogin = () => {
    login();
  };

  useEffect(() => {
    getAuthenticated();
  }, [handleLogin]);

  return (
    <header>
      <Box
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: {
            xs: "0 16px",
            md: "0 32px",
            lg: "0 60px",
            xl: "0 auto",
          },
        }}
      >
        <ImageList>
          <img src={Logo} alt="Logo" width="104px" height="26px" />
        </ImageList>
        <Stack direction="row" spacing={2}>
          <CustomButton desc="Users" />
          <CustomButton desc="Sign up" action={handleLogin} />
        </Stack>
      </Box>
    </header>
  );
};

export default Header;
