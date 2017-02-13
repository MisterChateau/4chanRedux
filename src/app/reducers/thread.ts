import * as thread from '../actions/thread';

export interface State {
  threads: [
    {
      message: string,
      imageUrl: string,
      imageThumbnailUrl: string
    }
  ] | undefined[];
};

const initialState: State = {
    threads: []
};

export function threadsReducer(state = initialState, action: thread.Actions) {
    switch(action.type) {
        case thread.ActionTypes.GET_THREADS_COMPLETE:
            const threads = action.payload;
            return Object.assign({}, state, { threads: threads });
        default:
            return state;
    }
};
