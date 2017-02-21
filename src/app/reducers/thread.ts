import * as thread from '../actions/thread';

export interface State {
  threads: {
    board: string | undefined;
    list: [
      {
        message: string,
        imageUrl: string,
        imageThumbnailUrl: string
      }
    ] | undefined[];
  };
};

const initialState: State = {
  threads: {
    board: undefined,
    list: []
  }
};

export function threadsReducer(state = initialState, action: thread.Actions) {
    switch(action.type) {
        case thread.ActionTypes.GET_THREADS:
            const board = action.payload;
            return Object.assign({}, state, { board });
        case thread.ActionTypes.GET_THREADS_COMPLETE:
            const list = action.payload;
            return Object.assign({}, state, { list });
        default:
            return state;
    }
};
