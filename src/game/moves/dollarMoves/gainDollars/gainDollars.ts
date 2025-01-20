import { FnContext } from "boardgame.io";
import { PlayerColour } from "../../../gamestate";
import { changeDollars } from "../changeDollars/changeDollars";

type GainDollarsArgs = { playerColour: PlayerColour; value: number };

export function gainDollars(context: FnContext, args: GainDollarsArgs): void {
  const { value } = args;
  if (!Number.isInteger(value)) {
    throw new Error("Can only gain a whole number of dollars.");
  }
  if (value < 0) {
    throw new Error("Cannot gain a negative number of dollars.");
  }
  changeDollars(context, args);
}
