import { GameState, Player } from "./types";

export function setup(): GameState {
  // For now, just initialise with 2 players with empty hands
  const initialPlayerState: Player = { dollars: 10, hand: [] };
  const players = {
    0: { ...initialPlayerState },
    1: { ...initialPlayerState },
  };

  return { players };
}
