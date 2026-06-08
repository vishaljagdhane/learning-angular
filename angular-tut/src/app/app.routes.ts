import { Routes } from '@angular/router';
import { Home } from './routing/home/home';
import { About } from './routing/about/about';
import { Contct } from './routing/contct/contct';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contct},
];
