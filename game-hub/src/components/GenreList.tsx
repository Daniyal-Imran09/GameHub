import React from "react";
import UseGenre from "../Hooks/IUseGenre";

const GenreList = () => {
  const { Genres } = UseGenre();

  return (
    <ul>
      {Genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
