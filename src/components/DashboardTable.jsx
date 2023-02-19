import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Img,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { getStock } from "../redux/appReducer/action";
import { deleteStock } from "../redux/appReducer/action";
import { EditModal } from "./EditModal";

export const DashboardTable = () => {
  const stocks = useSelector((store) => store.AppReducer.stocks);
  const dispatch = useDispatch();
  // console.log(stocks);
  useEffect(() => {
    dispatch(getStock());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteStock(id));
  };

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Company logo</Th>
            <Th>Company name</Th>
            <Th>Company Type</Th>
            <Th>Stock Exchange</Th>
            <Th>Total shares</Th>
            <Th>Cost per share</Th>
            <Th>Price action</Th>
            <Th>Edit Stock Button</Th>
            <Th>Delete Stock Button</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stocks?.map((stock) => {
            return (
              <Tr key={stock?.id}>
                <Td>
                  <Box>
                    <Img h="80px" w="150px" src={stock?.company_logo} />
                  </Box>
                </Td>
                <Td>{(stock?.company_name).toUpperCase()}</Td>
                <Td>{(stock?.company_type).toUpperCase()}</Td>
                <Td>{(stock?.stock_exchange).toUpperCase()}</Td>
                <Td>{stock?.total_shares}</Td>
                <Td>{stock?.cost_per_share}</Td>
                <Td>{stock?.price_action}</Td>
                <Td>
                  <EditModal id={stock?.id} />
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(stock?.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
