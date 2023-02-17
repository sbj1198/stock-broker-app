import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/authReducer/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const comingFrom = location.state?.data || "/stocks";

  const handleLogin = () => {
    if (email === "admin@stockbroker.com" && password === "admin123") {
      dispatch(login({ email, password, role: "admin" }))
        .then((res) => {
          alert("login successful");
          navigate("/dashboard", { replace: true });
        })
        .catch((e) => alert("login failed"));
    } else if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        alert("login successful");
        navigate(comingFrom, { replace: true });
      });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Box>
      <Box
        margin="auto"
        boxShadow="rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
        marginTop="40px"
        w="450px"
        padding="40px"
      >
        <Flex flexDirection="column">
          <Input
            type="text"
            placeholder="Email"
            mb="10px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            mb="10px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </Flex>
      </Box>
    </Box>
  );
};
