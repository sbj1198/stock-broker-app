import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";

export const Dashboard = () => {
  const [companyDetails, setCompanyDetails] = useState({
    company_logo: "",
    company_name: "",
    company_type: "",
    stock_exchange: "",
    total_shares: undefined,
    cost_per_share: undefined,
    price_action: undefined,
  });

  const listStock = () => {};

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
          type="url"
          placeholder="Company Logo"
          mb="10px"
          value={companyDetails.company_logo}
          onChange={(e) =>
            setCompanyDetails((companyDetails.company_logo = e.target.value))
          }
        />
        <Input
          type="text"
          placeholder="Company Name"
          mb="10px"
          value={companyDetails.company_name}
          onChange={(e) =>
            setCompanyDetails((companyDetails.company_name = e.target.value))
          }
        />
        <Select
          placeholder="Company Type"
          mb="10px"
          value={companyDetails.company_name}
          onChange={(e) => (companyDetails.company_name = e.target.value)}
        >
          <option value="bank">Bank</option>
          <option value="it">IT</option>
          <option value="automobile">Automobile</option>
          <option value="pharma">Pharma</option>
          <option value="oil">Oil</option>
        </Select>
        <Select
          placeholder="Stock Exchange"
          mb="10px"
          value={companyDetails.stock_exchange}
          onChange={(e) => (companyDetails.stock_exchange = e.target.value)}
        >
          <option value="nse">NSE</option>
          <option value="bse">BSE</option>
        </Select>
        <Input
          placeholder="Total shares"
          value={companyDetails.total_shares}
          mb="10px"
          onChange={(e) =>
            setCompanyDetails((companyDetails.total_shares = e.target.value))
          }
        />
        <Input
          placeholder="Cost per share"
          value={companyDetails.cost_per_share}
          mb="10px"
          onChange={(e) =>
            setCompanyDetails((companyDetails.cost_per_share = e.target.value))
          }
        />
        <Input
          placeholder="Price action"
          value={companyDetails.price_action}
          mb="10px"
          onChange={(e) =>
            setCompanyDetails((companyDetails.price_action = e.target.value))
          }
        />
        <Button onClick={listStock}>List Stock</Button>
      </Flex>
    </Box>
  );
};
