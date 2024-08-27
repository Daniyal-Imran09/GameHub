import React from "react";
import useTrailers from "../Hooks/useTrailers";
import { useQuery } from "@tanstack/react-query";
interface Props {
  gameid: number;
}
const GameTrailer = ({ gameid }: Props) => {
  const { data, error, isLoading } = useTrailers(gameid);

  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];

  if (!first) return null;
  return (
    <div>
      <video src={first.data[480]} poster={first.preview} controls />
    </div>
  );
};

export default GameTrailer;
