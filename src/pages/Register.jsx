import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/authReducer/action";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (email && username && password) {
      dispatch(
        register({ username, email, password, role: "user", quantity: [] })
      ).then((res) => {
        navigate("/login", { replace: true });
      });
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
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
          placeholder="Username"
          mb="10px"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <Button onClick={handleRegister}>Register</Button>
      </Flex>
    </Box>
  );
};
