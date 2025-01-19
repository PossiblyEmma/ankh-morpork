import { BoardProps } from "boardgame.io/dist/types/packages/react";
import { GameState } from "../gamestate";
import { MovesWithoutContext } from "../moves";

type Props = BoardProps<GameState> & { moves: MovesWithoutContext };

export function Board(props: Props) {
  const { moves } = props;

  return (
    <>
      <button onClick={() => moves.changeDollars({ playerId: "0", value: 1 })}>
        Give dollar
      </button>
      <button onClick={() => moves.changeDollars({ playerId: "0", value: -1 })}>
        Pay dollar
      </button>
    </>
  );
}
