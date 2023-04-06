import { GET_GIFS } from "./types";

export const getGifsAction = (offset) => {
  return {
    type: GET_GIFS,
    offset,
  };
};
