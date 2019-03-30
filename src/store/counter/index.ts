import { CounterActionTypes, DECREMENT, ICountState, INCREMENT } from './types';

const initialState: ICountState = {
  count: 0,
};

export default function chatReducer(
  state = initialState,
  action: CounterActionTypes
): ICountState {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
