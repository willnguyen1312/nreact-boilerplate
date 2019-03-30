import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Flex, Text } from 'rebass';
import { AppState } from 'store';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from 'store/counter/actions';

interface ICounterProps extends RouteComponentProps {
  count: number;
  decrement: typeof decrement;
  decrementAsync: typeof decrementAsync;
  increment: typeof increment;
  incrementAsync: typeof incrementAsync;
}

const Counter: React.FC<ICounterProps> = props => {
  return (
    <Flex flexDirection="column">
      <Text my={10}>Counter: {props.count}</Text>
      <Flex mb={10}>
        <Button mr={20} onClick={props.increment}>
          Increment
        </Button>
        <Button onClick={props.decrement}>Decrement</Button>
      </Flex>
      <Flex>
        <Button mr={20} onClick={props.incrementAsync}>
          Increment Async
        </Button>
        <Button onClick={props.decrementAsync}>Decrement ASync</Button>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state: AppState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as any) as any;
