import React from "react";
import { Games } from "../Hooks/UseGame";
import { Card, CardBody, Heading, Hide, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={20} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          Platforms={game.parent_platforms.map((p) => p.platform)}
        />
        {/* {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))} */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
