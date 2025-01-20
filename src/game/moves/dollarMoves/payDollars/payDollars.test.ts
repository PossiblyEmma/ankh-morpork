import { GameState, PlayerColour } from "../../../gamestate";

import { FnContext } from "boardgame.io";
import { payDollars } from "./payDollars";

describe("payDollars", () => {
  it("should throw an error if the provided value is not an integer", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      payDollars(context, { playerColour: PlayerColour.GREEN, value: 0.5 })
    ).toThrow("Can only pay a whole number of dollars.");
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
      payDollars(context, { playerColour: PlayerColour.GREEN, value: -1 })
    ).toThrow("Cannot pay a negative number of dollars.");
  });
  it("should throw an error if no player is found with the provided colour", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      payDollars(context, { playerColour: PlayerColour.BLUE, value: 1 })
    ).toThrow(
      "Cannot find player with colour BLUE when attempting to pay dollars."
    );
  });
  it("should throw an error if underpayment is not allowed and the player does not have sufficient dollars to pay", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      payDollars(context, { playerColour: PlayerColour.GREEN, value: 11 })
    ).toThrow("GREEN player does not have $11.");
  });
  it("should be able to pay dollars", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    payDollars(context, { playerColour: PlayerColour.GREEN, value: 1 });

    expect(context.G.players).toEqual({
      [PlayerColour.GREEN]: { dollars: 9 },
      [PlayerColour.RED]: { dollars: 10 },
    });
  });
  it("should pay all the players dollars if underpayment is allowed", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    payDollars(context, {
      playerColour: PlayerColour.GREEN,
      value: 11,
      allowUnderpayment: true,
    });

    expect(context.G.players).toEqual({
      [PlayerColour.GREEN]: { dollars: 0 },
      [PlayerColour.RED]: { dollars: 10 },
    });
  });
});
