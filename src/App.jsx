import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { MainRoute } from "./pages/MainRoutes";

function App() {
  return (
    <Box>
      <Navbar />
      <MainRoute />
    </Box>
  );
}

export default App;
