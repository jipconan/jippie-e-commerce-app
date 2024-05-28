import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useApi } from "../utilities";

const TicketForm = () => {
  const { createDatas } = useApi("Forms", false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    orderid: "",
    message: "",
  });

  const [load, setLoad] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      orderid: "",
      message: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form) {
      try {
        const currentDate = new Date();
        setLoad(true);
        await createDatas({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          orderid: form.orderid,
          message: form.message,
          date: currentDate,
        });
        clearForm();
        setLoad(false);
      } catch (error) {
        console.error("Error submitting product:", error);
        setLoad(false);
      }
    }
  };

  return (
    <Box p={8} maxWidth={1000} w={"100%"}>
      <form onSubmit={handleSubmit}>
        <HStack spacing={4} mb={4}>
          <FormControl id="firstName" isRequired>
            <FormLabel color="black" fontSize="1xl">
              First name
            </FormLabel>
            <Input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleFormChange}
              borderColor="grey"
              size="lg"
              h={70}
            />
          </FormControl>

          <FormControl id="lastName" isRequired>
            <FormLabel color="black" fontSize="1xl">
              Last name
            </FormLabel>
            <Input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleFormChange}
              borderColor="grey"
              size="lg"
              h={70}
            />
          </FormControl>
        </HStack>

        <FormControl id="email" isRequired mb={4}>
          <FormLabel color="black" fontSize="1xl">
            Email
          </FormLabel>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleFormChange}
            borderColor="grey"
            size="lg"
            h={70}
          />
        </FormControl>

        <FormControl id="orderid" mb={4}>
          <FormLabel
            color="black"
            fontSize="1xl"
          >{`Order ID (if any)`}</FormLabel>
          <Input
            type="text"
            name="orderid"
            value={form.orderid}
            onChange={handleFormChange}
            borderColor="grey"
            size="lg"
            h={70}
          />
        </FormControl>

        <FormControl id="message" isRequired mb={4}>
          <FormLabel color="black" fontSize="1xl">
            Description
          </FormLabel>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleFormChange}
            rows={12}
            borderColor="grey"
          />
        </FormControl>

        <Stack mt={4}>
          <Button
            colorScheme="orange"
            type="submit"
            isLoading={load}
            loadingText="Submitting"
            variant="solid"
            size="lg"
            w={"100%"}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default TicketForm;
