import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DetailClubOffrePage} from './detailcluboffre';

@NgModule({
  declarations: [
    DetailClubOffrePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailClubOffrePage),
  ],
})
export class DetailClubOffrePageModule {}
