import React from "react";
import { Games } from "../Hooks/UseGame";
import { Card, CardBody, Heading, Hide, Image } from "@chakra-ui/react";

interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={20} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
