import { Board } from "./board";
import { Client } from "boardgame.io/react";
import type { Game } from "boardgame.io";
import { GameState } from "./gamestate";
import { moves } from "./moves";
import { setup } from "./setup";

const AnkhMorpork: Game<GameState> = {
  setup,
  moves,
};

export const GameClient = Client({ game: AnkhMorpork, board: Board });
