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

interface Props {
  onselectgenre: (genre: Genre) => void;
  selectedgenre: Genre | null;
}
const GenreList = ({ selectedgenre, onselectgenre }: Props) => {
  const { data, error, isLoading } = UseGenre();
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
                fontWeight={genre.id === selectedgenre?.id ? "bold" : "normal"}
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
    </>
  );
};

export default GenreList;
