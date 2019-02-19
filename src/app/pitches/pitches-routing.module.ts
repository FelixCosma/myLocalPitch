import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PitchesComponent } from './pitches.component';
import { PitchesGridComponent } from './pitches-grid/pitches-grid.component';

const routes: Routes = [
  { path: 'pitches', component: PitchesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PitchesRoutingModule {
  static components = [ PitchesComponent, PitchesGridComponent ];
}
