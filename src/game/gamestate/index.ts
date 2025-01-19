import { Areas } from "./Areas";
import { Game } from "boardgame.io";

export interface GameState extends Game {
  areas: Areas;
  players: Record<string, Player>;
}

export type Player = {
  dollars: number;
};

export { setupAreas } from "./Areas";
