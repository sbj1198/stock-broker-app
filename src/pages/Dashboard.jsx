import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStock } from "../redux/appReducer/action";
import { DashboardTable } from "../components/DashboardTable";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [companyDetails, setCompanyDetails] = useState({
    company_logo: "",
    company_name: "",
    company_type: "",
    stock_exchange: "",
    total_shares: "",
    cost_per_share: "",
    price_action: "",
  });

  const listStock = () => {
    dispatch(addStock(companyDetails));
    setCompanyDetails({
      ...companyDetails,
      company_logo: "",
      company_name: "",
      company_type: "",
      stock_exchange: "",
      total_shares: "",
      cost_per_share: "",
      price_action: "",
    });
  };

  // useEffect(() => {}, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCompanyDetails((prevCompanyDetails) => ({
      ...prevCompanyDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <Text fontSize="4xl" textAlign="center">
        Admin Dashboard
      </Text>
      <Box
        margin="auto"
        boxShadow="rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
        marginTop="40px"
        w="450px"
        padding="40px"
      >
        <Flex flexDirection="column">
          <Input
            name="company_logo"
            type="url"
            placeholder="Company Logo"
            mb="10px"
            value={companyDetails.company_logo}
            onChange={handleChange}
          />
          <Input
            name="company_name"
            type="text"
            placeholder="Company Name"
            mb="10px"
            value={companyDetails.company_name}
            onChange={handleChange}
          />
          <Select
            name="company_type"
            placeholder="Company Type"
            mb="10px"
            value={companyDetails.company_type}
            onChange={handleChange}
          >
            <option value="bank">Bank</option>
            <option value="it">IT</option>
            <option value="automobile">Automobile</option>
            <option value="pharma">Pharma</option>
            <option value="oil">Oil</option>
          </Select>
          <Select
            name="stock_exchange"
            placeholder="Stock Exchange"
            mb="10px"
            value={companyDetails.stock_exchange}
            onChange={handleChange}
          >
            <option value="nse">NSE</option>
            <option value="bse">BSE</option>
          </Select>
          <Input
            name="total_shares"
            type="number"
            placeholder="Total shares"
            value={companyDetails.total_shares}
            mb="10px"
            onChange={handleChange}
          />
          <Input
            name="cost_per_share"
            type="number"
            placeholder="Cost per share"
            value={companyDetails.cost_per_share}
            mb="10px"
            onChange={handleChange}
          />
          <Input
            name="price_action"
            type="number"
            placeholder="Price action"
            value={companyDetails.price_action}
            mb="10px"
            onChange={handleChange}
          />
          <Button onClick={listStock}>List Stock</Button>
        </Flex>
      </Box>
      <Box mt="80px">
        <DashboardTable />
      </Box>
    </>
  );
};
