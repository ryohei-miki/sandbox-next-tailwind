import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Button,
  ButtonGroup,
  Badge,
  Stack,
  Select,
} from "@chakra-ui/react";
const ChakraComponent: React.FC = () => {
  return (
    <ChakraProvider>
      <Box>
        <Button colorScheme="blue">Button</Button>
        <Stack direction="row">
          <Badge>Default</Badge>
          <Badge colorScheme="green">Success</Badge>
          <Badge colorScheme="red">Removed</Badge>
          <Badge colorScheme="purple">New</Badge>
        </Stack>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </ChakraProvider>
  );
};

export default ChakraComponent;
