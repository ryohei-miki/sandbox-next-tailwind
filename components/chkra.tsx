import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Header from "./organisms/Header";


const ChakraComponent: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
};

export default ChakraComponent;
