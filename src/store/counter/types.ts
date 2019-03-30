// Describing the shape of the counter's slice of state
export interface ICountState {
  count: number;
}

// Describing the different ACTION NAMES available
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface IIncrementAction {
  type: typeof INCREMENT;
}

interface IDecrementAction {
  type: typeof DECREMENT;
}

export type CounterActionTypes = IIncrementAction | IDecrementAction;
