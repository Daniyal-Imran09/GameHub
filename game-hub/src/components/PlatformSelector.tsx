import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import usePlatform from "../Hooks/UsePlatform";
import { Platform } from "../Hooks/UseGame";

interface Props {
  onselectplatform: (platform: Platform) => void;
  selectedplatform: Platform | null;
}
const PlatformSelector = ({ onselectplatform, selectedplatform }: Props) => {
  const { Platform, Error } = usePlatform();
  if (Error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedplatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {Platform.map((p) => (
          <MenuItem key={p.id} onClick={() => onselectplatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
