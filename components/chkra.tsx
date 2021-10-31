import { ChakraProvider } from "@chakra-ui/react";
import Header from "./organisms/Header";

const ChakraComponent: React.FC = () => {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
};

export default ChakraComponent;
