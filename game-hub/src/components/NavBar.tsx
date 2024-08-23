import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onsearch: (searchtext: string) => void;
}

const NavBar = ({ onsearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onsearch={onsearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
