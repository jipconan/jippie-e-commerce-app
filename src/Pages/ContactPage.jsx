import React from "react";
import { Stack, Text, HStack, Box, VStack, Heading } from "@chakra-ui/react";
import TicketForm from "../components/TicketForm";
import { FadingBox } from "../components";

const ContactPage = () => {
  return (
    <FadingBox>
      <Stack p={8} py={100}>
        <HStack spacing={8} align="flex-start" justify="space-between">
          <Box flex="1" p={4} maxWidth="50%">
            <VStack align="left" spacing={10} textAlign="left" maxWidth="80%">
              <Heading fontSize="4xl" fontWeight="bold">
                Need Assistance?
              </Heading>
              <Text fontSize="lg" fontWeight="bold">
                <strong>Notice:</strong>
                <br />
                I'm currently enjoying some time off - yay!
              </Text>
              <Text fontSize="lg">
                If you're here, you might be checking on your order status or
                looking for your tracking information. Here's the latest news:
              </Text>
              <Text fontSize="lg">
                All outstanding orders were shipped on September 12th. You
                should have received your tracking code by now.
              </Text>
              <Text fontSize="lg">
                For earlier updates, head over to my Instagram!
              </Text>
              <Text fontSize="lg">
                I've highlighted "Store Updates" on my Instagram profile, where
                you can find the latest information about store orders. The
                update dates are listed at the top.
              </Text>
              <Text fontSize="lg">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Visit my Instagram.
                </a>
              </Text>
              <Text fontSize="lg">
                For other questions regarding the website or orders, such as
                address changes, please use the contact form or email me at{" "}
                <a
                  href="mailto:jipconan@gmail.com"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  jipconan@gmail.com
                </a>
                .
              </Text>
              <Text fontSize="lg">
                Note: If your order has already been shipped, I'm unable to
                change the address or cancel the order.
              </Text>
              <Text fontSize="lg">
                I'll respond to your inquiries as soon as possible.
              </Text>
            </VStack>
          </Box>
          <Box flex="1">
            <TicketForm />
          </Box>
        </HStack>
      </Stack>
    </FadingBox>
  );
};

export default ContactPage;
