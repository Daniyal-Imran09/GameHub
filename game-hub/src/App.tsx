import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"yellow"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"rebeccapurple"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"dodgerblue"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
