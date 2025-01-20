import { gainDollars } from "./gainDollars/gainDollars";
import { payDollars } from "./payDollars/payDollars";
import { transferDollars } from "./transferDollars/transferDollars";

export const dollarMoves = {
  gainDollars,
  payDollars,
  transferDollars,
} as const;
