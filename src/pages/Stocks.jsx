import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { buyStock, getStock } from "../redux/appReducer/action";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export const Stocks = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((store) => store.AppReducer.stocks);
  const id = useSelector((store) => store.AuthReducer.id);
  const [quantity, setQuantity] = useState({});
  const location = useLocation();

  // console.log(location);

  useEffect(() => {
    dispatch(getStock());
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setQuantity({
      ...quantity,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    dispatch(buyStock(quantity, id));
  };

  return (
    <Grid
      templateColumns="repeat(2, 350px)"
      templateRows="repeat(2, auto)"
      justifyContent="center"
      alignItems="center"
      gap="20px"
      pt="30px"
      pb="30px"
    >
      {stocks?.map((stock, index) => {
        return (
          <GridItem
            boxShadow="rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
            justifyContent="center"
            p="20px"
            key={stock.id}
          >
            <Box mb="10px">
              <Image h="80px" src={stock?.company_logo} />
            </Box>
            <Box mb="10px">
              <Heading size="md">{stock?.company_name}</Heading>
            </Box>
            <Box mb="10px">
              <Text as="span">EXCHANGE: </Text>
              <Text as="span">{(stock?.stock_exchange).toUpperCase()}</Text>
            </Box>
            <Box mb="10px">
              <Text as="span">TYPE: </Text>
              <Text as="span">{(stock?.company_type).toUpperCase()}</Text>
            </Box>
            <Box mb="10px">
              <Text as="span">TOTAL SHARES: </Text>
              <Text as="span">{stock?.total_shares}</Text>
            </Box>
            <Box mb="10px">
              <Text as="span">COST PER SHARE: </Text>
              <Text as="span">{stock?.cost_per_share}</Text>
            </Box>
            <Box mb="10px">
              <Text as="span">PRICE ACTION: </Text>
              <Text as="span">{stock?.price_action}</Text>
            </Box>
            <Box mb="10px">
              <Input
                name={stock?.company_name}
                value={quantity.company_name}
                type="number"
                placeholder="Quantity"
                onChange={handleChange}
              />
            </Box>
            <Box mb="10px">
              <Button onClick={handleClick} colorScheme="green">
                Buy
              </Button>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
};
