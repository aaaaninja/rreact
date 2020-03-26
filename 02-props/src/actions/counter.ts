export const ADD = 'ADD';
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';

export const add = (amount: number) =>
  ({
    type: ADD as typeof ADD,
    payload: { amount },
  } as const);

export const decrement = () =>
  ({
    type: DECREMENT as typeof DECREMENT,
  } as const);

export const increment = () =>
  ({
    type: INCREMENT as typeof INCREMENT,
  } as const);

export type CounterAction =
  | ReturnType<typeof add>
  | ReturnType<typeof decrement>
  | ReturnType<typeof increment>;
