import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
    GET_THREADS: type('GET_THREADS'),
    LOAD_THREAD: type('LOAD_THREAD'),
    GET_THREADS_COMPLETE: type('GET_THREADS_COMPLETE')
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class GetThreadsAction implements Action {
    type = ActionTypes.GET_THREADS;

    constructor(public payload: string) {}
}

export class LoadThreadAction implements Action {
    type = ActionTypes.LOAD_THREAD;

    constructor(public payload: {}) {}
}

export class GetThreadsComplete implements Action {
    type = ActionTypes.GET_THREADS_COMPLETE;

    constructor(public payload: any[]) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = GetThreadsAction
  | LoadThreadAction
  | GetThreadsComplete;
