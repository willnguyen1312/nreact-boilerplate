import React, { useCallback } from 'react';
import { Container, Subscribe } from 'unstated';
import Counter from './components/Counter';

interface IAppContainerState {
  amount: number;
}

export class AppContainer extends Container<IAppContainerState> {
  state = {
    amount: 1,
  };

  setAmount(amount: number) {
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
          <label>Amount: </label>
          <input
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
