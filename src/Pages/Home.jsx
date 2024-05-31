import React from "react";
import {
  Button,
  Stack,
  Text,
  Image,
  Box,
  Center,
  Link,
} from "@chakra-ui/react";

import { FadingBox } from "../components";

const Home = () => {
  const imageProp = {
    width: "1900",
    height: "800",
    bottomGap: 20,
    buttonColor: "orange",
    buttonW: "250px",
    buttonH: "70px",
    buttonFont: "20px",
  };
  // const temporaryImage = `https://fakeimg.pl/${`${imageProp.width}`}x${`${imageProp.height}`}`;

  const capyKeychains = "/media/capykeychains.png";
  const capyStickers = "/media/capystickers.png";
  const capyPins = "/media/capypins.png";

  return (
    <Stack>
      <Stack d="flex" spacing={4} align="center" p={8}>
        <FadingBox>
          <Text fontSize="2xl" whiteSpace="pre-line">
            Welcome Peeps! This is Jippie!! {"\n"}♥{"\n"}
            Feel free to explore the store and website at your leisure!
          </Text>
        </FadingBox>
      </Stack>
      <Stack direction="column">
        {/* Capybara Keychains Header */}
        <FadingBox>
          <Box
            position="relative"
            display="inline-block"
            mb={imageProp.bottomGap}
          >
            <Image
              src={`${capyKeychains}`}
              alt="Rectangular Image"
              width={`${imageProp.width}px`}
              height={`${imageProp.height}px`}
            />
            <Center position="absolute" top="0" left="0" right="0" bottom="0">
              <Link href="/store/keychains">
                <Button
                  colorScheme={imageProp.buttonColor}
                  w={imageProp.buttonW}
                  h={imageProp.buttonH}
                  fontSize={imageProp.buttonFont}
                  _hover={{ opacity: 0.75 }}
                >
                  Keychains
                </Button>
              </Link>
            </Center>
          </Box>
        </FadingBox>
        {/* Capybara Stickers Header */}
        <FadingBox>
          <Box
            position="relative"
            display="inline-block"
            mb={imageProp.bottomGap}
          >
            <Image
              src={capyStickers}
              alt="Rectangular Image"
              width={`${imageProp.width}px`}
              height={`${imageProp.height}px`}
            />
            <Center position="absolute" top="0" left="0" right="0" bottom="0">
              <Link href="/store/stickers">
                <Button
                  colorScheme={imageProp.buttonColor}
                  w={imageProp.buttonW}
                  h={imageProp.buttonH}
                  fontSize={imageProp.buttonFont}
                  _hover={{ opacity: 0.75 }}
                >
                  Stickers
                </Button>
              </Link>
            </Center>
          </Box>
        </FadingBox>
        {/* Capybara Pins Header */}
        <FadingBox>
          <Box
            position="relative"
            display="inline-block"
            mb={imageProp.bottomGap}
          >
            <Image
              src={capyPins}
              alt="Rectangular Image"
              width={`${imageProp.width}px`}
              height={`${imageProp.height}px`}
            />
            <Center position="absolute" top="0" left="0" right="0" bottom="0">
              <Link href="/store/pins">
                <Button
                  colorScheme={imageProp.buttonColor}
                  w={imageProp.buttonW}
                  h={imageProp.buttonH}
                  fontSize={imageProp.buttonFont}
                  _hover={{ opacity: 0.75 }}
                >
                  Pins
                </Button>
              </Link>
            </Center>
          </Box>
        </FadingBox>
      </Stack>
    </Stack>
  );
};

export default Home;
