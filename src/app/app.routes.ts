import { Routes } from '@angular/router';
import { Start } from './components/start/start';
import { Activities } from './components/activities/activities';
import { About } from './components/about/about';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: Start
    },
    {
        path: 'activiteiten',
        component: Activities
    },
    {
        path: 'over-deze-app',
        component: About
    },
    {
        path: '**',
        redirectTo: 'start',
        pathMatch: 'full'
    }
];
