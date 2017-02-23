import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
    GET_BOARDS: type('GET_BOARDS'),
    GET_BOARDS_COMPLETE: type('GET_BOARDS_COMPLETE')
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class GetBoardsAction implements Action {
    type = ActionTypes.GET_BOARDS;

    constructor() {}
}

export class GetBoardsCompleteAction implements Action {
    type = ActionTypes.GET_BOARDS_COMPLETE;

    constructor(public payload: any[]) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = GetBoardsAction
  | GetBoardsCompleteAction;
