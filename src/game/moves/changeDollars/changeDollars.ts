import { FnContext } from "boardgame.io";

type ChangeDollarsArgs = { playerId: string; value: number };

export function changeDollars(
  context: FnContext,
  args: ChangeDollarsArgs
): void {
  const { G } = context;
  const { value, playerId } = args;
  if (!Number.isInteger(value)) {
    throw new Error(
      "Can only change a player's dollars by a whole number value."
    );
  }
  const player = G.players[playerId];
  const newValue = player.dollars + value;
  player.dollars = newValue > 0 ? newValue : 0;
}
