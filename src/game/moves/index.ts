import { OmitContext } from "../types";
import { changeDollars } from "./changeDollars/changeDollars";
import { gainDollars } from "./gainDollars/gainDollars";
import { payDollars } from "./payDollars/payDollars";

export const moves = { changeDollars, gainDollars, payDollars } as const;

export type Moves = typeof moves;
export type MoveName = keyof Moves;
export type MovesWithoutContext = {
  [x in MoveName]: OmitContext<Moves[x]>;
};
