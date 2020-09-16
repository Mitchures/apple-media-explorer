import { State } from './types';
import { entities } from 'config/entity'

export const initialState: State = {
  entity: entities[0],
  data: null,
  genres: null,
  selected: null
};
