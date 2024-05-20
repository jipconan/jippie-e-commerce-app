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
  const imageButton = {
    width: "1900px",
    height: "500px",
    bottomGap: 20,
    buttonColor: "orange",
    temporaryImage: "https://fakeimg.pl/1900x500",
  };

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
          mb={imageButton.bottomGap}
        >
          <Image
            src={imageButton.temporaryImage}
            alt="Rectangular Image"
            width={imageButton.width}
            height={imageButton.height}
          />
          <Center position="absolute" top="0" left="0" right="0" bottom="0">
            <Link href="/store/keychains">
              <Button colorScheme={imageButton.buttonColor}>Keychains</Button>
            </Link>
          </Center>
        </Box>
        <Box
          position="relative"
          display="inline-block"
          mb={imageButton.bottomGap}
        >
          <Image
            src={imageButton.temporaryImage}
            alt="Rectangular Image"
            width={imageButton.width}
            height={imageButton.height}
          />
          <Center position="absolute" top="0" left="0" right="0" bottom="0">
            <Link href="/store/stickers">
              <Button colorScheme={imageButton.buttonColor}>Stickers</Button>
            </Link>
          </Center>
        </Box>
        <Box
          position="relative"
          display="inline-block"
          mb={imageButton.bottomGap}
        >
          <Image
            src={imageButton.temporaryImage}
            alt="Rectangular Image"
            width={imageButton.width}
            height={imageButton.height}
          />
          <Center position="absolute" top="0" left="0" right="0" bottom="0">
            <Link href="/store/pins">
              <Button colorScheme={imageButton.buttonColor}>Pins</Button>
            </Link>
          </Center>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Home;
