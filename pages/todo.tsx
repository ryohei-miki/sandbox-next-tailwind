import {
  AddIcon,
  PhoneIcon,
  EmailIcon,
  BellIcon,
  Search2Icon,
  CheckCircleIcon,
  CalendarIcon,
  InfoOutlineIcon,
  EditIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
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
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

const ChakraComponent: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <HStack alignItems="start">
          <Box w="30%" minH="100vh" bg="white" p="30">
            <VStack p="1rem">
              <Box marginBottom="60px">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Heading as="h2" size="md" mt="20px">
                  Miranda
                </Heading>
                <Text fontSize="sm" fontWeight="medium" color="gray.400">
                  Lead Designer
                </Text>
              </Box>
              <Wrap direction="column" spacing="20px">
                <WrapItem>
                  <HStack>
                    <CalendarIcon color="pink" />
                    <Box fontWeight="medium" color="gray.500"> Plan</Box>
                  </HStack>
                </WrapItem>
                <WrapItem>
                  <HStack>
                    <InfoOutlineIcon  color="pink"  />
                    <Box fontWeight="medium"  color="gray.500"> Stats</Box>
                  </HStack>
                </WrapItem>
                <WrapItem>
                  <HStack>
                    <EditIcon color="pink"  />
                    <Box fontWeight="medium"  color="gray.500">Documents</Box>
                  </HStack>
                </WrapItem>
                <WrapItem>
                  <HStack>
                    <SettingsIcon color="pink" />
                    <Box fontWeight="medium" color="gray.500">Settings</Box>
                  </HStack>
                </WrapItem>
              </Wrap>
            </VStack>
          </Box>
          <Box w="70%" minH="100vh" bg="gray.100" p="30">
            <HStack>
              <Box borderRadius="50%" p="3" bg="white">
                <EmailIcon w={6} h={6} color="gray.400" />
              </Box>
              <Box borderRadius="50%" p="3" bg="white">
                <BellIcon w={6} h={6} color="gray.400" />
              </Box>
              <Spacer />
              <Box>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Search2Icon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    bg="white"
                    w="450px"
                    type="tel"
                    placeholder="Search Projects"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack
              mt="72px"
              spacing="30px"
              paddingTop="40px"
              borderTop="1px"
              borderColor="gray.200"
            >
              <Box>
                <Heading as="h2" size="md">
                  Projects Title
                </Heading>
                <Text>Short Description</Text>
              </Box>
              <Box>
                <Heading as="h2" size="sm">
                  DUE DATE
                </Heading>
                <Text>Mon ,Aug 28, 2021</Text>
              </Box>
              <Spacer />
              <HStack spacing="30px">
                <Avatar
                  size="md"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar
                  size="md"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar
                  size="md"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </HStack>
            </HStack>
            <Flex
              mt="40px"
              justify="right"
              paddingTop="40px"
              borderTop="1px"
              borderColor="gray.200"
            >
              <HStack>
                <Button colorScheme="pink" variant="solid" borderRadius="20px">
                  CREATE NEW TICKET
                </Button>
                <Button
                  leftIcon={<AddIcon />}
                  variant="ghost"
                  color="gray.500"
                  focusBorderColor="none"
                >
                  Add column{" "}
                </Button>
              </HStack>
            </Flex>
            {/* ここからタスク表示 */}
            <HStack mt="40px" alignItems="start">
              <Box>
                <Heading as="h3" size="md" paddingBottom="20px">
                  Backlog
                </Heading>
                <Wrap direction="column" spacing="50px">
                  <WrapItem
                    bg="white"
                    w="300px"
                    h="190px"
                    p="25px"
                    flexDirection="column"
                  >
                    <Flex direction="column" spacing="30px">
                      <Heading as="h4" size="ms">
                        Task Name
                      </Heading>
                      <HStack>
                        <Text>Design</Text>
                        <CheckCircleIcon color="cyan.300" />
                      </HStack>
                      <Text color="gray.500">Description</Text>
                    </Flex>
                    <Spacer />
                    <HStack spacing="20px">
                      <Avatar
                        size="sm"
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Box>
                        <Text color="gray.600">08/09/21</Text>
                      </Box>
                      <Text color="gray.600" fontWeight="bold">
                        2 subtasks
                      </Text>
                    </HStack>
                  </WrapItem>
                  <WrapItem
                    bg="white"
                    w="300px"
                    h="190px"
                    p="25px"
                    flexDirection="column"
                  >
                    <Flex direction="column" spacing="30px">
                      <Heading as="h4" size="ms">
                        Task Name
                      </Heading>
                      <HStack>
                        <Text>Design</Text>
                        <CheckCircleIcon color="cyan.300" />
                      </HStack>
                      <Text color="gray.500">Description</Text>
                    </Flex>
                    <Spacer />
                    <HStack spacing="20px">
                      <Avatar
                        size="sm"
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Box>
                        <Text color="gray.600">08/09/21</Text>
                      </Box>
                      <Text color="gray.600" fontWeight="bold">
                        2 subtasks
                      </Text>
                    </HStack>
                  </WrapItem>
                </Wrap>
              </Box>
              <Box>
                <Heading as="h3" size="md" paddingBottom="20px">
                  In Progress
                </Heading>
                <Wrap direction="column" spacing="50px">
                  <WrapItem
                    bg="white"
                    w="300px"
                    h="190px"
                    p="25px"
                    flexDirection="column"
                  >
                    <Flex direction="column" spacing="30px">
                      <Heading as="h4" size="ms">
                        Task Name
                      </Heading>
                      <HStack>
                        <Text>Design</Text>
                        <CheckCircleIcon color="cyan.300" />
                      </HStack>
                      <Text color="gray.500">Description</Text>
                    </Flex>
                    <Spacer />
                    <HStack spacing="20px">
                      <Avatar
                        size="sm"
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Box>
                        <Text color="gray.600">08/09/21</Text>
                      </Box>
                      <Text color="gray.600" fontWeight="bold">
                        2 subtasks
                      </Text>
                    </HStack>
                  </WrapItem>
                  <WrapItem
                    bg="white"
                    w="300px"
                    h="190px"
                    p="25px"
                    flexDirection="column"
                  >
                    <Flex direction="column" spacing="30px">
                      <Heading as="h4" size="ms">
                        Task Name
                      </Heading>
                      <HStack>
                        <Text>Design</Text>
                        <CheckCircleIcon color="cyan.300" />
                      </HStack>
                      <Text color="gray.500">Description</Text>
                    </Flex>
                    <Spacer />
                    <HStack spacing="20px">
                      <Avatar
                        size="sm"
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Box>
                        <Text color="gray.600">08/09/21</Text>
                      </Box>
                      <Text color="gray.600" fontWeight="bold">
                        2 subtasks
                      </Text>
                    </HStack>
                  </WrapItem>
                </Wrap>
              </Box>
              <Box>
                <Heading as="h3" size="md" paddingBottom="20px">
                  Review
                </Heading>
                <Wrap direction="column" spacing="50px">
                  <WrapItem
                    bg="white"
                    w="300px"
                    h="190px"
                    p="25px"
                    flexDirection="column"
                  >
                    <Flex direction="column" spacing="30px">
                      <Heading as="h4" size="ms">
                        Task Name
                      </Heading>
                      <HStack>
                        <Text>Design</Text>
                        <CheckCircleIcon color="cyan.300" />
                      </HStack>
                      <Text color="gray.500">Description</Text>
                    </Flex>
                    <Spacer />
                    <HStack spacing="20px">
                      <Avatar
                        size="sm"
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Box>
                        <Text color="gray.600">08/09/21</Text>
                      </Box>
                      <Text color="gray.600" fontWeight="bold">
                        2 subtasks
                      </Text>
                    </HStack>
                  </WrapItem>
                </Wrap>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </ChakraProvider>
  );
};

export default ChakraComponent;
