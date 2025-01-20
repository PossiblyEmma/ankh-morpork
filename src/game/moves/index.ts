import { OmitContext } from "../types";
import { changeDollars } from "./changeDollars/changeDollars";
import { gainDollars } from "./gainDollars/gainDollars";

export const moves = { changeDollars, gainDollars } as const;

export type Moves = typeof moves;
export type MoveName = keyof Moves;
export type MovesWithoutContext = {
  [x in MoveName]: OmitContext<Moves[x]>;
};
