import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {PlusSquareIcon} from "@chakra-ui/icons"
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1200px"} p={"5"}>
      <Flex
        h={"15"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "20", sm: "25" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, #7928CA, #FF0080)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
            <Link to="/create"><PlusSquareIcon fontSize={"30"}/></Link>



            <Button onClick={toggleColorMode}>
                {colorMode ==="light" ? <IoMoon size="20"/> :<LuSun size="20"/>}
            </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;