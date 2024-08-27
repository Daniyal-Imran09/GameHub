import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import usePlatform from "../Hooks/UsePlatform";
import { Platform } from "../entities/Platform";
import usePlatforms from "../Hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedplatformId = useGameQueryStore((s) => s.game.platformId);
  const setselectedplatformId = useGameQueryStore((S) => S.setPlatformId);
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
          <MenuItem key={p.id} onClick={() => setselectedplatformId(p.id)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
