import React, { useCallback } from 'react';
import { Container, Subscribe } from 'unstated';
import Counter from './components/Counter';

interface AppContainerState {
  amount: number;
}

export class AppContainer extends Container<AppContainerState> {
  public state = {
    amount: 1,
  };

  public setAmount(amount: number) {
    this.setState({ amount });
  }
}

const App: any = () => {
  const onChangeHandler = useCallback(
    app => event => app.setAmount(+event.currentTarget.value),
    []
  );

  return (
    <Subscribe to={[AppContainer]}>
      {app => (
        <div>
          <Counter />
          <label htmlFor="amount">Amount: </label>
          <input
            id="amount"
            type="number"
            value={app.state.amount}
            onChange={onChangeHandler(app)}
          />
        </div>
      )}
    </Subscribe>
  );
};

export default App;
