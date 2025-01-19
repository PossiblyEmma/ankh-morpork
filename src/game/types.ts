import { FnContext } from "boardgame.io";

/**
 * Sometimes, we need to omit the context passed as the first argument to a
 * function, eg for moves which are going to be called using only the
 * m-specific args. This type strips the context arg from the function type.
 */
export type OmitContext<Fn> = Fn extends (
  context: FnContext,
  ...args: infer Args
) => infer Returns
  ? (...args: Args) => Returns
  : never;
