import { Routes } from '@angular/router';
import { FindThreadComponent } from './containers/find-thread/find-thread.component';

export const routes: Routes = [
    { path: 'thread/:board', component: FindThreadComponent },
    { path: '', redirectTo: '/thread', pathMatch: 'full' }
]
