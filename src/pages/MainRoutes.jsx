import { Route, Routes } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Stocks } from "./Stocks";
import { Portfolio } from "./Portfolio";
import { PrivateRoute } from "../components/PrivateRoute";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/stocks"
        element={
          <PrivateRoute>
            <Stocks />
          </PrivateRoute>
        }
      />
      <Route
        path="/portfolio"
        element={
          <PrivateRoute>
            <Portfolio />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
