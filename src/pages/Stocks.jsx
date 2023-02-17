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
import { getStock } from "../redux/appReducer/action";
import { useDispatch } from "react-redux";

export const Stocks = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("");
  const stocks = useSelector((store) => store.AppReducer.stocks);

  useEffect(() => {
    dispatch(getStock());
  }, []);

  return (
    <Grid
      templateColumns="repeat(2, 350px)"
      templateRows="repeat(2, 1fr)"
      justifyContent="center"
      alignItems="center"
      gap="20px"
    >
      {stocks?.map((stock) => {
        return (
          <GridItem
            boxShadow="rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
            justifyContent="center"
            p="20px"
          >
            <Box>
              <Image h="80px" src={stock?.company_logo} />
            </Box>
            <Box>
              <Heading size="md">{stock?.company_name}</Heading>
            </Box>
            <Box>
              <Text as="span">EXCHANGE: </Text>
              <Text as="span">{(stock?.stock_exchange).toUpperCase()}</Text>
            </Box>
            <Box>
              <Text as="span">TYPE: </Text>
              <Text as="span">{(stock?.company_type).toUpperCase()}</Text>
            </Box>
            <Box>
              <Text as="span">TOTAL SHARES: </Text>
              <Text as="span">{stock?.total_shares}</Text>
            </Box>
            <Box>
              <Text as="span">COST PER SHARE: </Text>
              <Text as="span">{stock?.cost_per_share}</Text>
            </Box>
            <Box>
              <Text as="span">PRICE ACTION: </Text>
              <Text as="span">{stock?.price_action}</Text>
            </Box>
            <Box>
              <Input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </Box>
            <Box>
              <Button>Buy</Button>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
};
