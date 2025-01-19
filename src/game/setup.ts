import { GameState, Player, setupAreas } from "./gamestate";

export function setup(): GameState {
  // For now, just initialise with 2 players with empty hands
  const initialPlayerState: Player = { dollars: 10 };
  const players = {
    0: { ...initialPlayerState },
    1: { ...initialPlayerState },
  };
  const areas = setupAreas();

  return { areas, players };
}
