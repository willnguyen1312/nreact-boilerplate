import React, { useCallback } from 'react';
import { Container, Subscribe } from 'unstated';
import { AppContainer } from '../..';

const sleep = (seconds: number) =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

interface ICounterState {
  count: number;
}

class CounterContainer extends Container<ICounterState> {
  state = {
    count: 0,
  };

  increment(amount: number) {
    this.setState({ count: this.state.count + amount });
  }

  async incrementAsync(amount: number) {
    await sleep(1);
    this.setState({ count: this.state.count + amount });
  }

  decrement(amount: number) {
    this.setState({ count: this.state.count - amount });
  }

  async decrementAsync(amount: number) {
    await sleep(1);
    this.setState({ count: this.state.count - amount });
  }
}

export default function Counter() {
  const incrementCallback = useCallback(
    (app, counter) => () => (counter as any).increment(app.state.amount),
    []
  );

  const incrementAsyncCallback = useCallback(
    (app, counter) => () => (counter as any).incrementAsync(app.state.amount),
    []
  );

  const decrementCallback = useCallback(
    (app, counter) => () => (counter as any).decrement(app.state.amount),
    []
  );

  const decrementAsyncCallback = useCallback(
    (app, counter) => () => (counter as any).decrementAsync(app.state.amount),
    []
  );

  return (
    <Subscribe to={[AppContainer, CounterContainer]}>
      {(app, counter) => (
        <div>
          <span>Count: {counter.state.count}</span>
          <h1>Sync</h1>
          <button onClick={incrementCallback(app, counter)}>-</button>
          <button onClick={decrementCallback(app, counter)}>+</button>

          <h1>Async</h1>
          <button onClick={decrementAsyncCallback(app, counter)}>-</button>
          <button onClick={incrementAsyncCallback(app, counter)}>+</button>
        </div>
      )}
    </Subscribe>
  );
}
