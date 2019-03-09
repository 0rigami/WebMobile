import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DetailClubPage} from './detailclub';

@NgModule({
  declarations: [
    DetailClubPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailClubPage),
  ],
})
export class DetailClubPageModule {}
