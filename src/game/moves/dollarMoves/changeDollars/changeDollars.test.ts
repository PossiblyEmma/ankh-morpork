import { GameState, PlayerColour } from "../../../gamestate";

import { FnContext } from "boardgame.io";
import { changeDollars } from "./changeDollars";

describe("changeDollars", () => {
  it("should throw an error if the provided value is not an integer", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      changeDollars(context, { playerColour: PlayerColour.GREEN, value: 0.5 })
    ).toThrow("Can only change a player's dollars by a whole number value.");
  });
  it("should be able to add to a player's dollars", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    changeDollars(context, { playerColour: PlayerColour.GREEN, value: 1 });

    expect(context.G.players).toEqual({
      [PlayerColour.GREEN]: { dollars: 11 },
      [PlayerColour.RED]: { dollars: 10 },
    });
  });
  it("should be able to subtract from a player's dollars", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    console.log(JSON.stringify(context));
    changeDollars(context, { playerColour: PlayerColour.GREEN, value: -1 });

    expect(context.G.players).toEqual({
      [PlayerColour.GREEN]: { dollars: 9 },
      [PlayerColour.RED]: { dollars: 10 },
    });
  });
  it("should not be able to reduce a player's dollars below zero", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    console.log(JSON.stringify(context));
    changeDollars(context, { playerColour: PlayerColour.GREEN, value: -11 });

    expect(context.G.players).toEqual({
      [PlayerColour.GREEN]: { dollars: 0 },
      [PlayerColour.RED]: { dollars: 10 },
    });
  });
});
