import Header from "./Components/layout/Header";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./style/GlobalStyle";

import { Box, Container } from "@mui/material";
import Hero from "./Components/ui/Hero";
import Users from "./Components/screens/Users";
import SignUpBlock from "./Components/screens/SignUpBlock";
import Success from "./Components/ui/Success";
import { IsAuthenticatedProvider } from "./Context/TokenContext";
import { UserProvider } from "./Context/UsersContext";
import { ModalProvider } from "./Context/ModalContext";

export const url = "https://frontend-test-assignment-api.abz.agency/api/v1";

function App() {
  return (
    <>
      <ModalProvider>
        <UserProvider>
          <IsAuthenticatedProvider>
            <ThemeProvider theme={theme}>
              <Header />
              <Box sx={{ backgroundColor: "#F8F8F8" }}>
                <Container maxWidth="xl" disableGutters>
                  <Hero />
                  <Users />
                  <SignUpBlock />
                  <Success />
                </Container>
              </Box>
            </ThemeProvider>
          </IsAuthenticatedProvider>
        </UserProvider>
      </ModalProvider>
    </>
  );
}

export default App;
