import { PlayerColour } from "./PlayerColour";

export enum NeutralMinionType {
  DEMON = "DEMON",
  TROLL = "TROLL",
}

export type MinionType = PlayerColour | NeutralMinionType;
