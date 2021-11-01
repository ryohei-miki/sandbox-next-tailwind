import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  VStack,
  Avatar,
  Spacer,
  Flex,
  Container,
  Center,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

const ChakraComponent: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <HStack>
        <Box w="30%" bg="whit">
          <VStack>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Heading as="h2" size="md">
              Miranda
            </Heading>
            <Text fontSize="md" fontWeight="medium" color="gray.400">
              Lead Designer
            </Text>
            <Wrap direction="column">
              <WrapItem>Work</WrapItem>
              <WrapItem>Plan</WrapItem>
              <WrapItem>Stats</WrapItem>
              <WrapItem>Documents</WrapItem>
              <WrapItem>Users</WrapItem>
              <WrapItem>Settings</WrapItem>
            </Wrap>
          </VStack>
        </Box>
        <Box w="70%" bg="gray.200">
          <HStack>
            <PhoneIcon />
          </HStack>
        </Box>
        {/* <Container>ここは左側</Container>
        <Container>ここは右</Container> */}
      </HStack>
    </ChakraProvider>
  );
};

export default ChakraComponent;
