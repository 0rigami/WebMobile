import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffreClubPage } from './offreclub';

@NgModule({
  declarations: [
    OffreClubPage,
  ],
  imports: [
    IonicPageModule.forChild(OffreClubPage),
  ],
  exports: [
    OffreClubPage
  ]
})
export class OffreClubPageModule {}
