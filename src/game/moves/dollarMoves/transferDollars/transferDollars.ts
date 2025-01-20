import { GameState, PlayerColour } from "../../../gamestate";

import { FnContext } from "boardgame.io";
import { gainDollars } from "../gainDollars/gainDollars";
import { payDollars } from "../payDollars/payDollars";

type TransferDollarsArgs = {
  fromPlayerColour: PlayerColour;
  toPlayerColour: PlayerColour;
  value: number;
  allowUnderpayment?: boolean;
};

export function transferDollars(
  context: FnContext<GameState>,
  args: TransferDollarsArgs
): void {
  const { G } = context;
  const { fromPlayerColour, toPlayerColour, value, allowUnderpayment } = args;

  if (!Number.isInteger(value)) {
    throw new Error("Can only transfer a whole number of dollars.");
  }
  if (value < 0) {
    throw new Error("Cannot transfer a negative number of dollars.");
  }

  const fromPlayer = G.players[fromPlayerColour];
  const toPlayer = G.players[toPlayerColour];

  if (!fromPlayer) {
    throw new Error(
      `Cannot find player with colour ${fromPlayerColour} when attempting to transfer dollars.`
    );
  }
  if (!toPlayer) {
    throw new Error(
      `Cannot find player with colour ${toPlayerColour} when attempting to transfer dollars.`
    );
  }
  if (!allowUnderpayment && fromPlayer.dollars < value) {
    throw new Error(`${fromPlayerColour} player does not have $${value}.`);
  }

  const valueToTransfer =
    allowUnderpayment && fromPlayer.dollars < value
      ? fromPlayer.dollars
      : value;

  payDollars(context, {
    playerColour: fromPlayerColour,
    value: valueToTransfer,
  });
  gainDollars(context, {
    playerColour: toPlayerColour,
    value: valueToTransfer,
  });
}
