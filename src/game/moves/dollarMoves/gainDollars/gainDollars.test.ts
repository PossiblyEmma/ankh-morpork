import { GameState, PlayerColour } from "../../../gamestate";

import { FnContext } from "boardgame.io";
import { gainDollars } from "./gainDollars";

describe("gainDollars", () => {
  it("should throw an error if the provided value is not an integer", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      gainDollars(context, { playerColour: PlayerColour.GREEN, value: 0.5 })
    ).toThrow("Can only gain a whole number of dollars.");
  });
  it("should throw an error if the provided value is negative", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      gainDollars(context, { playerColour: PlayerColour.GREEN, value: -1 })
    ).toThrow("Cannot gain a negative number of dollars.");
  });
  it("should be able to add to a player's dollars", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    gainDollars(context, { playerColour: PlayerColour.GREEN, value: 1 });

    expect(context.G.players).toEqual({
      [PlayerColour.GREEN]: { dollars: 11 },
      [PlayerColour.RED]: { dollars: 10 },
    });
  });
});
