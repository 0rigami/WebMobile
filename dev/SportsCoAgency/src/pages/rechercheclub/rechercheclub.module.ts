import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechercheClubPage } from './rechercheclub';

@NgModule({
  declarations: [
    RechercheClubPage,
  ],
  imports: [
    IonicPageModule.forChild(RechercheClubPage),
  ],
  exports: [
    RechercheClubPage
  ]
})
export class RechercheClubPageModule {}
