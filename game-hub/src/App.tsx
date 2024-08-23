import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import UseGenre, { Genre } from "./Hooks/UseGenre";

import PlaformSelector from "./components/PlatformSelector";
import PlatformSelector from "./components/PlatformSelector";
function App() {
  const [selectedgenre, setselectedgenre] = useState<Genre | null>(null);
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={"5px"}>
          <GenreList
            selectedgenre={selectedgenre}
            onselectgenre={(genre) => setselectedgenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector />
        <GameGrid selectedgenre={selectedgenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
