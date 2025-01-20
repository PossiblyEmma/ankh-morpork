import { OmitContext } from "../types";
import { gainDollars } from "./gainDollars/gainDollars";
import { payDollars } from "./payDollars/payDollars";
import { transferDollars } from "./transferDollars/transferDollars";

export const moves = { gainDollars, payDollars, transferDollars } as const;

export type Moves = typeof moves;
export type MoveName = keyof Moves;
export type MovesWithoutContext = {
  [x in MoveName]: OmitContext<Moves[x]>;
};
