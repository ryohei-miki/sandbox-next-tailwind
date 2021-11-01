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
      <Box>
        <HStack alignItems="start">
          <Box w="30%" h="100vh" bg="white" p="30">
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
          <Box w="70%" h="100vh" bg="gray.100" p="30">
            <HStack>
              <PhoneIcon />
            </HStack>
          </Box>
        </HStack>
      </Box>
    </ChakraProvider>
  );
};

export default ChakraComponent;
