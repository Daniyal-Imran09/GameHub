import { Box } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="200px" borderRadius={20} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
