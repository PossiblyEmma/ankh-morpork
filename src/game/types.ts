export type GameState = {
  players: Player[];
};

export type Player = {
  dollars: number;
  hand: unknown[]; //TODO: This will be Card[] type
};
