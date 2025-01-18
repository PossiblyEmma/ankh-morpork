import { FnContext, Game, PlayerID } from "boardgame.io";

export interface GameState extends Game {
  players: Record<string, Player>;
}

export type Player = {
  dollars: number;
  hand: unknown[]; //TODO: This will be Card[] type
};

export type MoveFnArgs = FnContext<GameState> & {
  playerID: PlayerID;
};
