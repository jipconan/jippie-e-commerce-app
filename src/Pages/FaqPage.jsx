import React from "react";
import { Stack, Text, Flex, Heading, Box } from "@chakra-ui/react";
import { FadingBox } from "../components";

const FaqPage = () => {
  return (
    <Stack py={100}>
      <Flex h="100%" justify="center" align="center">
        <Stack p={8} spacing={10} align="flex-start" maxWidth="50%">
          {/* Shipping Inquiries */}
          <FadingBox>
            <Box
              spacing={8}
              borderBottom="1px solid black"
              borderTop="1px solid black"
              py={16}
              w={"100%"}
            >
              <Heading fontSize="4xl" fontWeight="bold" textAlign="left">
                Shipping Inquiries
              </Heading>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Can I request signed items?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Absolutely! Select prints or books can be signed at checkout.
                  <br />
                  Unfortunately, other items cannot be signed.
                </Text>
              </Stack>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Can modifications be made to an order?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Feel free to email me at jipconan@gmail.com regarding order
                  adjustments.
                  <br />
                  During busy periods, like store openings or new product
                  launches, response times may be delayed.
                </Text>
              </Stack>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Received the wrong item or missing something?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Drop me an email at jipconan@gmail.com detailing the issue,
                  <br />
                  and I'll rectify it promptly.
                </Text>
              </Stack>
            </Box>
          </FadingBox>

          {/* Queries About Orders */}
          <FadingBox>
            <Box spacing={8} borderBottom="1px solid black" py={8} w={"100%"}>
              <Heading fontSize="4xl" fontWeight="bold" textAlign="left">
                Queries About Orders
              </Heading>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Need to update your shipping address?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  If your order hasn't shipped yet,
                  <br />
                  simply email me at jipconan@gmail.com with your order number
                  and new address.
                  <br />
                  Prompt notification helps prevent misdeliveries.
                </Text>
              </Stack>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Can I request signed items?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Absolutely! Select prints or books can be signed at checkout.
                  Unfortunately, other items cannot be signed.
                </Text>
              </Stack>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Can modifications be made to an order?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Feel free to email me jipconan@gmail.com regarding order
                  adjustments.
                  <br />
                  During busy periods, like store openings or new product
                  launches, response times may be delayed.
                </Text>
              </Stack>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Can modifications be made to an order?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Received the wrong item or missing something?
                  <br />
                  Drop me an email at jipconan@gmail.com detailing the issue,
                  and I'll rectify it promptly.
                </Text>
              </Stack>
            </Box>
          </FadingBox>

          {/* Cancellation and Returns */}
          <FadingBox>
            <Box spacing={8} borderBottom="1px solid black" py={8}>
              <Heading
                fontSize="4xl"
                fontWeight="bold"
                textAlign="left"
                w={"100%"}
              >
                Cancellation and Returns
              </Heading>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Can I cancel my order?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Orders can be cancelled and fully refunded if not yet shipped.
                </Text>
              </Stack>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Are returns accepted?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Apologies, but I cannot accommodate returns at this time.
                </Text>
              </Stack>
            </Box>
          </FadingBox>

          {/* Covid-19 Measures */}
          <FadingBox>
            <Box spacing={8} borderBottom="1px solid black" py={8} w={"100%"}>
              <Heading fontSize="4xl" fontWeight="bold" textAlign="left">
                Covid-19 Measures
              </Heading>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  How are Covid-19 precautions handled?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  While the risk of transmission from objects is low according
                  to WHO,
                  <br />
                  I continuously monitor the situation and implement appropriate
                  measures.
                  <br />
                  If required to isolate, shipping may temporarily halt, with
                  updates posted on my website and social media.
                </Text>
              </Stack>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  What's the shipping status to my country amid Covid-19?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Check Singapore Post's updates and your country's shipping
                  status for the latest information.
                </Text>
              </Stack>
            </Box>
          </FadingBox>

          {/* Other Inquiries */}
          <FadingBox>
            <Box spacing={8} borderBottom="1px solid black" py={8} w={"100%"}>
              <Heading fontSize="4xl" fontWeight="bold" textAlign="left">
                Other Inquiries
              </Heading>

              <Stack py={8}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="left">
                  Do you accept commissions?
                </Text>
                <Text fontSize="2xl" textAlign="left">
                  Currently, I'm not taking commissions, but I appreciate your
                  interest!
                </Text>
              </Stack>
            </Box>
          </FadingBox>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default FaqPage;
