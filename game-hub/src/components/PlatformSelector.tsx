import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import usePlatform from "../Hooks/UsePlatform";

const PlatformSelector = () => {
  const { Platform, Error } = usePlatform();
  if (Error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {Platform.map((p) => (
          <MenuItem key={p.id}>{p.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
