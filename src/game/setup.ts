import { GameState, Player, PlayerColour, setupAreas } from "./gamestate";

export function setup(): GameState {
  // For now, just initialise with 2 players with empty hands
  const initialPlayerState: Player = { dollars: 10 };
  const players = {
    [PlayerColour.GREEN]: { ...initialPlayerState },
    [PlayerColour.RED]: { ...initialPlayerState },
  };
  const areas = setupAreas();

  return { areas, players };
}
