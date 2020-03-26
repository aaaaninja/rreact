import React, { FC } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import './Counter.css';

export interface CounterProps {
  count?: number;
  add?: (amount: number) => void;
  del?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

const Counter: FC<CounterProps> = ({
  count = 0,
  add = () => undefined,
  del = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>count</Statistic.Label>
      <Statistic.Value>{count}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <div className="ui two buttons">
        <Button color="red" onClick={decrement}>
          -1
        </Button>
        <Button color="green" onClick={increment}>
          +1
        </Button>
      </div>
      <div className="fluid-button">
        <Button fluid color="grey" onClick={() => add(10)}>
          +10
        </Button>
      </div>
      <div className="ui two buttons">
        <Button fluid color="teal" onClick={() => add(45)}>
          +45
        </Button>
        <Button fluid color="grey" onClick={() => add(-45)}>
          -45
        </Button>
        <Button fluid color="grey" onClick={() => add(-45)}>
          -45
        </Button>
      </div>
      <div className="fluid-button">
        <Button fluid color="linkedin" onClick={() => add(1000)}>
          +10
        </Button>
      </div>
      <div className="fluid-button">
        <Button fluid color="violet" onClick={() => del(1000)}>
          -1000
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default Counter;
