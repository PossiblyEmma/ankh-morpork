import { OmitContext } from "../types";
import { changeDollars } from "./changeDollars/changeDollars";

export const moves = { changeDollars } as const;

export type Moves = typeof moves;
export type MoveName = keyof Moves;
export type MovesWithoutContext = {
  [x in MoveName]: OmitContext<Moves[x]>;
};
