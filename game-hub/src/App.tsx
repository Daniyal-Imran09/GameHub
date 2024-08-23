import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import UseGenre, { Genre } from "./Hooks/UseGenre";
import PlaformSelector from "./components/PlatformSelector";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/UseGame";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  selectedorder: string;
  searchtext: string;
}

function App() {
  // const [selectedgenre, setselectedgenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [game, setgame] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onsearch={(searchtext) => setgame({ ...game, searchtext })} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={"5px"}>
          <GenreList
            selectedgenre={game.genre}
            onselectgenre={(genre) => setgame({ ...game, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading game={game} />
          <Flex marginBottom={4}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedplatform={game.platform}
                onselectplatform={(platform) => setgame({ ...game, platform })}
              />
            </Box>
            <SortSelector
              sortorder={game.selectedorder}
              onselectsortorder={(selectedorder) =>
                setgame({ ...game, selectedorder })
              }
            />
          </Flex>
        </Box>
        <GameGrid game={game} />
      </GridItem>
    </Grid>
  );
}

export default App;
