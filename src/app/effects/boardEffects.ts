import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { ChanService } from '../chan.service';
import * as board from '../actions/board';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
**/


@Injectable()
export class BoardEffects {
    constructor (private action$: Actions, private chanService: ChanService) {}

    @Effect()
    get$: Observable<Action> = this.action$
            .ofType(board.ActionTypes.GET_BOARDS)
            .switchMap(() => {
                return this.chanService.getBoards()
                    .map((boards) => new board.GetBoardsCompleteAction(boards))
                    .catch(() => of(new board.GetBoardsCompleteAction([])));
            });
}
