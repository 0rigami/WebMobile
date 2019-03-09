import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DetailMessagesPage} from './detailmessages';

@NgModule({
  declarations: [
    DetailMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailMessagesPage),
  ],
})
export class DetailMessagesPageModule {}
