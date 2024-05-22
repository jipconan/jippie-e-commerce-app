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

const Home = () => {
  const imageProp = {
    width: "1900",
    height: "800",
    bottomGap: 20,
    buttonColor: "orange",
    buttonW: "200px",
    buttonH: "50px",
  };
  const temporaryImage = `https://fakeimg.pl/${`${imageProp.width}`}x${`${imageProp.height}`}`;

  return (
    <Stack>
      <Stack d="flex" spacing={4} align="center" p={8}>
        <Text fontSize="2xl" whiteSpace="pre-line">
          Welcome Peeps! This is Jippie!! {"\n"}♥{"\n"}
          Feel free to explore the store and website at your leisure!
        </Text>
      </Stack>
      <Stack direction="column">
        <Box
          position="relative"
          display="inline-block"
          mb={imageProp.bottomGap}
        >
          <Image
            src={`${temporaryImage}`}
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
              >
                Keychains
              </Button>
            </Link>
          </Center>
        </Box>
        <Box
          position="relative"
          display="inline-block"
          mb={imageProp.bottomGap}
        >
          <Image
            src={temporaryImage}
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
              >
                Stickers
              </Button>
            </Link>
          </Center>
        </Box>
        <Box
          position="relative"
          display="inline-block"
          mb={imageProp.bottomGap}
        >
          <Image
            src={temporaryImage}
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
              >
                Pins
              </Button>
            </Link>
          </Center>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Home;
