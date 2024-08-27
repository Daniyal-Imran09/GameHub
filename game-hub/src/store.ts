import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    selectedorder?: string;
    searchtext?: string;
  }

  interface GameQueryStore{
    game: GameQuery
    setSearchText: (searchText: string) => void,
    setGenreId: (Genreid: number) => void,
    setPlatformId: (PlatformId: number) => void,
    setSortOrder: (sortOrder: string) => void
  }

  const useGameQueryStore = create<GameQueryStore>((set) => ({
    game: {},
    setSearchText: (searchtext) =>
      set(() => ({ game: { searchtext } })),
    setGenreId: (genreId) =>
      set((store) => ({
        game: { ...store.game, genreId, searchText: undefined },
      })),
    setPlatformId: (platformId) =>
      set((store) => ({
        game: {
          ...store.game,
          platformId,
          searchText: undefined,
        },
      })),
    setSortOrder: (sortOrder) =>
      set((store) => ({
        game: { ...store.game, sortOrder },
      })),
  }));
  
  export default useGameQueryStore;