import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Flex,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editStock } from "../redux/appReducer/action";

export const EditModal = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCompanyDetails({
      [name]: value,
    });
  };

  const updateStock = () => {
    dispatch(editStock(companyDetails, id));
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

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Stock Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
              <Button
                onClick={() => {
                  updateStock();
                }}
              >
                Update
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
