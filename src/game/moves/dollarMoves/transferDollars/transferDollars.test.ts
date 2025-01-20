import { GameState, PlayerColour } from "../../../gamestate";

import { FnContext } from "boardgame.io";
import { transferDollars } from "./transferDollars";

describe("transferDollars", () => {
  it("should throw an error if the provided value is not an integer", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      transferDollars(context, {
        fromPlayerColour: PlayerColour.GREEN,
        toPlayerColour: PlayerColour.RED,
        value: 0.5,
      })
    ).toThrow("Can only transfer a whole number of dollars.");
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
      transferDollars(context, {
        fromPlayerColour: PlayerColour.GREEN,
        toPlayerColour: PlayerColour.RED,
        value: -1,
      })
    ).toThrow("Cannot transfer a negative number of dollars.");
  });
  it("should throw an error if no player is found with the provided fromPlayerColour", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      transferDollars(context, {
        fromPlayerColour: PlayerColour.BLUE,
        toPlayerColour: PlayerColour.RED,
        value: 1,
      })
    ).toThrow(
      "Cannot find player with colour BLUE when attempting to transfer dollars."
    );
  });
  it("should throw an error if no player is found with the provided toPlayerColour", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      transferDollars(context, {
        fromPlayerColour: PlayerColour.GREEN,
        toPlayerColour: PlayerColour.BLUE,
        value: 1,
      })
    ).toThrow(
      "Cannot find player with colour BLUE when attempting to transfer dollars."
    );
  });
  it("should throw an error if underpayment is not allowed and the from player does not have sufficient dollars to pay", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    expect(() =>
      transferDollars(context, {
        fromPlayerColour: PlayerColour.GREEN,
        toPlayerColour: PlayerColour.RED,
        value: 11,
      })
    ).toThrow("GREEN player does not have $11.");
  });
  it("should be able to transfer dollars between players", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    transferDollars(context, {
      fromPlayerColour: PlayerColour.GREEN,
      toPlayerColour: PlayerColour.RED,
      value: 1,
    });

    expect(context.G.players).toEqual({
      [PlayerColour.GREEN]: { dollars: 9 },
      [PlayerColour.RED]: { dollars: 11 },
    });
  });
  it("should transfer all the players dollars if underpayment is allowed", () => {
    const G = {
      players: {
        [PlayerColour.GREEN]: { dollars: 10 },
        [PlayerColour.RED]: { dollars: 10 },
      },
    };
    const context = { G } as unknown as FnContext<GameState>;
    transferDollars(context, {
      fromPlayerColour: PlayerColour.GREEN,
      toPlayerColour: PlayerColour.RED,
      value: 11,
      allowUnderpayment: true,
    });

    expect(context.G.players).toEqual({
      [PlayerColour.GREEN]: { dollars: 0 },
      [PlayerColour.RED]: { dollars: 20 },
    });
  });
});
