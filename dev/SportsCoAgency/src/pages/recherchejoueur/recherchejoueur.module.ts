import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechercheJoueurPage } from './recherchejoueur';

@NgModule({
  declarations: [
    RechercheJoueurPage,
  ],
  imports: [
    IonicPageModule.forChild(RechercheJoueurPage),
  ],
  exports: [
    RechercheJoueurPage
  ]
})
export class RechercheJoueurModule {}
