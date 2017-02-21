import * as board from '../actions/board';

export interface State {
  boards: {
    list: [
      {
        board: string,
        title: string,
      }
    ] | undefined[];
  };
};

const initialState: State = {
  boards: {
    list: []
  }
};

export function boardReducer(state = initialState, action: board.Actions) {
    switch (action.type) {
        case board.ActionTypes.GET_BOARDS:
            return state;
        case board.ActionTypes.GET_BOARDS_COMPLETE:
            const list = action.payload;
            return Object.assign({}, state, { list });
        default:
            return state;
    }
};
