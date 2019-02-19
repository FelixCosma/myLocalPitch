import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pitches' },
  { path: 'pitches', loadChildren: 'app/pitches/pitches.module#PitchesModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/pitches' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
