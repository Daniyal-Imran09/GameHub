import React from "react";
import UseGenre from "../Hooks/UseGenre";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../Hooks/UseGenre";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = UseGenre();
  const selectedgenreId = useGameQueryStore((s) => s.game.genreId);
  const setselectedgenreid = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"} paddingX={"3px"}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedgenreId ? "bold" : "normal"}
                onClick={() => {
                  setselectedgenreid(genre.id);
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
    </>
  );
};

export default GenreList;
