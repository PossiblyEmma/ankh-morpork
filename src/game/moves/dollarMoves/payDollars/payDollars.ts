import { GameState, PlayerColour } from "../../../gamestate";

import { FnContext } from "boardgame.io";
import { changeDollars } from "../changeDollars/changeDollars";

type PayDollarsArgs = {
  playerColour: PlayerColour;
  value: number;
  allowUnderpayment?: boolean;
};

export function payDollars(
  context: FnContext<GameState>,
  args: PayDollarsArgs
): void {
  const { G } = context;
  const { playerColour, value, allowUnderpayment } = args;

  if (!Number.isInteger(value)) {
    throw new Error("Can only pay a whole number of dollars.");
  }
  if (value < 0) {
    throw new Error("Cannot pay a negative number of dollars.");
  }

  const player = G.players[playerColour];

  if (!player) {
    throw new Error(
      `Cannot find player with colour ${playerColour} when attempting to pay dollars.`
    );
  }
  if (!allowUnderpayment && player.dollars < value) {
    throw new Error(`${playerColour} player does not have $${value}.`);
  }

  changeDollars(context, { playerColour, value: -value });
}
