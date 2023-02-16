import { Flex, Box, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box fontSize="20px">
      <Flex justifyContent="flex-end" pr="20px" pt="20px">
        <Box pr="10px">
          <RouteLink to="/register">
            {/* <Link textDecoration="none">Register</Link> */}
            Register
          </RouteLink>
        </Box>
        <Box pr="10px">
          <RouteLink to="/login">
            {/* <Link textDecoration="none">Login</Link> */}
            Login
          </RouteLink>
        </Box>
      </Flex>
    </Box>
  );
};
