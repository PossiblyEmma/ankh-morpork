import { GameState, PlayerColour } from "../gamestate";

import { BoardProps } from "boardgame.io/dist/types/packages/react";
import { MovesWithoutContext } from "../moves";

type Props = BoardProps<GameState> & { moves: MovesWithoutContext };

export function Board(props: Props) {
  const { moves } = props;

  return (
    <>
      <button
        onClick={() =>
          moves.gainDollars({ playerColour: PlayerColour.GREEN, value: 1 })
        }
      >
        Give dollar
      </button>
      <button
        onClick={() =>
          moves.payDollars({ playerColour: PlayerColour.GREEN, value: 1 })
        }
      >
        Pay dollar
      </button>
    </>
  );
}
