import { Box, HStack, Spacer, Flex } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Box px={12} py={10}>
      <HStack>
        <Box>Logo</Box>
        <Spacer />
        <Box>マグロ</Box>
        <Box>エビ</Box>
        <Box>かに</Box>
        <Box>たこ</Box>
      </HStack>
    </Box>
    // <Flex px={12} py={10}>
    //   <Box>Logo</Box>
    //   <Spacer />
    //   <Box>マグロ</Box>
    //   <Box>エビ</Box>
    //   <Box>かに</Box>
    //   <Box>たこ</Box>
    // </Flex>
  );
};

export default Header;
