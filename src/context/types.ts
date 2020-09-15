import { IEntity } from 'types';

export interface IData {
  resultCount: number;
  results: any[];
}

export type State = {
  entity: IEntity;
  data: IData | null;
  selected: any;
};

export type Action =
  | {
      type: 'set_selection';
      selected: any;
    }
  | {
      type: 'set_data';
      data: IData | null;
    }
  | {
      type: 'set_entity';
      entity: IEntity;
    };
