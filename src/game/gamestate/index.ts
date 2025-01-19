import { Game } from "boardgame.io";

export interface GameState extends Game {
  players: Record<string, Player>;
}

export type Player = {
  dollars: number;
};
