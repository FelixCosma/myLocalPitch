import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PitchesRoutingModule } from './pitches-routing.module';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [SharedModule, PitchesRoutingModule, MomentModule],
  declarations: [PitchesRoutingModule.components]
})
export class PitchesModule { }
