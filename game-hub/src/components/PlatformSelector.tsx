import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import usePlatform from "../Hooks/UsePlatform";
import { Platform } from "../Hooks/UsePlatform";
import usePlatforms from "../Hooks/usePlatforms";

interface Props {
  onselectplatform: (platform: Platform) => void;
  selectedplatformId?: number;
}
const PlatformSelector = ({ onselectplatform, selectedplatformId }: Props) => {
  const { data, error, isLoading } = usePlatform();
  const selectedplatform = usePlatforms(selectedplatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedplatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem key={p.id} onClick={() => onselectplatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
