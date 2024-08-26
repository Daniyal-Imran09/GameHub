import UseGenre from "./UseGenre";

const useGenres = (id? : number) =>{
    const { data: genres } = UseGenre();
    return genres.results.find((g) => g.id === id);
}

export default useGenres