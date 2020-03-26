export enum CounterActionType {
  ADD = 'COUNTER/ADD',
  DEL = 'COUNTER/DELETE',
  DECREMENT = 'COUNTER/DECREMENT',
  INCREMENT = 'COUNTER/INCREMENT',
}

export interface CounterAction {
  type: CounterActionType;
  amount?: number;
}

export const add = (amount: number): CounterAction => ({
  amount,
  type: CounterActionType.ADD,
});

export const del = (amount: number): CounterAction => ({
  amount,
  type: CounterActionType.DEL,
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});
