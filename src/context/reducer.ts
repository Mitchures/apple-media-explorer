import { State, Action } from './types';

export const reducer = (state: State, action: Action): State => {
  console.log(state, action);
  switch (action.type) {
    case 'set_selection':
      return {
        ...state,
        selected: action.selected,
      };
    case 'set_data':
      return {
        ...state,
        data: action.data,
      };
    case 'set_entity':
      return {
        ...state,
        entity: action.entity,
      };
    default:
      return state;
  }
};
