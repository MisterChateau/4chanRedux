import { Routes } from '@angular/router';
import { FindThreadComponent } from './find-thread/find-thread.component';

export const routes: Routes = [
    { path: 'thread', component: FindThreadComponent },
    { path: '', redirectTo:'/thread', pathMatch: 'full' }
]
