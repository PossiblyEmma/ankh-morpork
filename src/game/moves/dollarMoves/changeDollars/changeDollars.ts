import { FnContext } from "boardgame.io";
import { PlayerColour } from "../../../gamestate";

type ChangeDollarsArgs = { playerColour: PlayerColour; value: number };

/**
 * Change the dollars owned by a player.
 *
 * Almost always, this move is used by other, more circumstance-specific moves
 * such as gainDollars, payDollars, and transferDollars. It will rarely be
 * necessary to directly change the players' dollar values directly outside of
 * those moves.
 */
export function changeDollars(
  context: FnContext,
  args: ChangeDollarsArgs
): void {
  const { G } = context;
  const { value, playerColour } = args;
  if (!Number.isInteger(value)) {
    throw new Error(
      "Can only change a player's dollars by a whole number value."
    );
  }
  const player = G.players[playerColour];
  const newValue = player.dollars + value;
  player.dollars = newValue > 0 ? newValue : 0;
}
