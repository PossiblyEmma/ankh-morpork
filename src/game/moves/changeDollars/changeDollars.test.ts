import { MoveFnArgs } from "../../types";
import { changeDollars } from "./changeDollars";

describe("changeDollars", () => {
  it("should throw an error if the provided value is not an integer", () => {
    const G = { players: { 0: { dollars: 10 }, 1: { dollars: 10 } } };
    const context = { G } as unknown as MoveFnArgs;
    expect(() => changeDollars(context, { playerId: "0", value: 0.5 })).toThrow(
      "Can only change a player's dollars by a whole number value."
    );
  });
  it("should be able to add to a player's dollars", () => {
    const G = { players: { 0: { dollars: 10 }, 1: { dollars: 10 } } };
    const context = { G } as unknown as MoveFnArgs;
    changeDollars(context, { playerId: "0", value: 1 });

    expect(context.G.players).toEqual({
      0: { dollars: 11 },
      1: { dollars: 10 },
    });
  });
  it("should be able to subtract from a player's dollars", () => {
    const G = { players: { 0: { dollars: 10 }, 1: { dollars: 10 } } };
    const context = { G } as unknown as MoveFnArgs;
    console.log(JSON.stringify(context));
    changeDollars(context, { playerId: "0", value: -1 });

    expect(context.G.players).toEqual({
      0: { dollars: 9 },
      1: { dollars: 10 },
    });
  });
  it("should not be able to reduce a player's dollars below zero", () => {
    const G = { players: { 0: { dollars: 10 }, 1: { dollars: 10 } } };
    const context = { G } as unknown as MoveFnArgs;
    console.log(JSON.stringify(context));
    changeDollars(context, { playerId: "0", value: -11 });

    expect(context.G.players).toEqual({
      0: { dollars: 0 },
      1: { dollars: 10 },
    });
  });
});
