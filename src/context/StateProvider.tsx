import React, { createContext, useContext, useReducer } from 'react';
import { State, Action } from './types';
import { reducer } from './reducer';

type ContextValue = [State, React.Dispatch<Action>];

export const StateContext = createContext<ContextValue>({} as ContextValue);

interface ProviderProps {
  children?: React.ReactNode;
  initialState: State;
}

export const StateProvider = ({ initialState, children }: ProviderProps) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
