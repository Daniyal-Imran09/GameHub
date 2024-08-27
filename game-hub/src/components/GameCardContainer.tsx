import { Box } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={20}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
