import { OmitContext } from "../types";
import { dollarMoves } from "./dollarMoves";

export const moves = { ...dollarMoves } as const;

export type Moves = typeof moves;
export type MoveName = keyof Moves;
export type MovesWithoutContext = {
  [x in MoveName]: OmitContext<Moves[x]>;
};
