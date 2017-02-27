/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { InteractiveComponent } from './interactive/interactive.component';
import { HistoryComponent } from './history/history.component';
import { BarchartComponent } from './barchart/barchart.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'about', component: AboutComponent},
    {path: 'realtime', component: RealtimeComponent},
    {path: 'interactive', component: InteractiveComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'barchart', component: BarchartComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
