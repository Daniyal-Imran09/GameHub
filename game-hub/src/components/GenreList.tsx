import React from "react";
import UseGenre from "../Hooks/UseGenre";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../Hooks/UseGenre";

interface Props {
  onselectgenre: (genre: Genre) => void;
}
const GenreList = ({ onselectgenre }: Props) => {
  const { Genres, Error, isloading } = UseGenre();
  if (Error) return null;

  if (isloading) return <Spinner />;

  return (
    <List>
      {Genres.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => {
                onselectgenre(genre);
              }}
              fontSize={"lg"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
