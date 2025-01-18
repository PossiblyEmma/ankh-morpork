import { Client } from "boardgame.io/react";
import type { Game } from "boardgame.io";
import { GameState } from "./types";
import { changeDollars } from "./moves";
import { setup } from "./setup";

const AnkhMorpork: Game<GameState> = {
  setup,
  moves: { changeDollars },
};

export const GameClient = Client({ game: AnkhMorpork });
