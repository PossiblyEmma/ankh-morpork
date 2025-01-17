import { Client } from "boardgame.io/react";
import type { Game } from "boardgame.io";
import { GameState } from "./types";
import { setup } from "./setup";

const AnkhMorpork: Game<GameState> = { setup };

export const GameClient = Client({ game: AnkhMorpork });
