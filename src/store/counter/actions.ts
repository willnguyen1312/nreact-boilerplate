import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from 'store';
import { sleep } from 'utils/sleep';
import { DECREMENT, INCREMENT } from './types';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export const incrementAsync = (): ThunkAction<
  void,
  AppState,
  null,
  Action
> => async dispatch => {
  await sleep(1);
  dispatch(increment());
};

export const decrementAsync = (): ThunkAction<
  void,
  AppState,
  null,
  Action
> => async dispatch => {
  await sleep(1);
  dispatch(decrement());
};
