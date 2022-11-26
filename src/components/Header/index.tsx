import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Flex
      id="app-root"
      as="nav"
      align="center"
      backgroundColor="rgba(0, 0, 0, 0.52)"
      color="gray.50"
      p={4}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      maxHeight="40px"
      boxSizing="border-box"
    >
      <Image
        src="https://cdn-icons-png.flaticon.com/512/6473/6473883.png"
        height="26px"
        alt="LOGO"
      />
      <Text fontWeight="medium" pl="2">
        Kanban
      </Text>
    </Flex>
  );
};

export default Header;
