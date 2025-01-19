import { PlayerColour } from "./PlayerColour";

export type AreaNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Area = {
  name: string;
  minions: { [colour in PlayerColour]: number } & {
    demon: number;
    troll: number;
  };
  building: PlayerColour | null;
  trouble: boolean;
  cost: number;
  adjacentToRiver: boolean;
  adjacentToAreas: AreaNumber[];
  // TODO: power will need to be a move of some sort
};

export type Areas = Record<AreaNumber, Area>;

function getEmptyMinions(): Area["minions"] {
  return {
    [PlayerColour.BLUE]: 0,
    [PlayerColour.GREEN]: 0,
    [PlayerColour.RED]: 0,
    [PlayerColour.YELLOW]: 0,
    demon: 0,
    troll: 0,
  };
}

export function setupAreas(): Areas {
  //TODO: assign minions to dolly sisters, shades and scours
  return {
    1: {
      name: "Dolly Sisters",
      minions: getEmptyMinions(),
      building: null,
      trouble: true,
      cost: 6,
      adjacentToRiver: true,
      adjacentToAreas: [2, 3, 12],
    },
    2: {
      name: "Unreal Estate",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 18,
      adjacentToRiver: true,
      adjacentToAreas: [1, 3, 4, 10, 11, 12],
    },
    3: {
      name: "Dragon's Landing",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 12,
      adjacentToRiver: false,
      adjacentToAreas: [1, 2, 4],
    },
    4: {
      name: "Small Gods",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 18,
      adjacentToRiver: true,
      adjacentToAreas: [2, 3, 5, 6, 10],
    },
    5: {
      name: "The Scours",
      minions: getEmptyMinions(),
      building: null,
      trouble: true,
      cost: 6,
      adjacentToRiver: true,
      adjacentToAreas: [4, 6, 7, 8, 10],
    },
    6: {
      name: "The Hippo",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 12,
      adjacentToRiver: false,
      adjacentToAreas: [4, 5, 7],
    },
    7: {
      name: "The Shades",
      minions: getEmptyMinions(),
      building: null,
      trouble: true,
      cost: 6,
      adjacentToRiver: true,
      adjacentToAreas: [5, 6, 8],
    },
    8: {
      name: "Dimwell",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 6,
      adjacentToRiver: true,
      adjacentToAreas: [5, 7, 9],
    },
    9: {
      name: "Longwall",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 12,
      adjacentToRiver: true,
      adjacentToAreas: [8, 10, 11],
    },
    10: {
      name: "Isle of Gods",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 12,
      adjacentToRiver: true,
      adjacentToAreas: [2, 4, 5, 9, 11],
    },
    11: {
      name: "Seven Sleepers",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 18,
      adjacentToRiver: true,
      adjacentToAreas: [2, 9, 10, 12],
    },
    12: {
      name: "Nap Hill",
      minions: getEmptyMinions(),
      building: null,
      trouble: false,
      cost: 12,
      adjacentToRiver: true,
      adjacentToAreas: [1, 2, 11],
    },
  };
}
