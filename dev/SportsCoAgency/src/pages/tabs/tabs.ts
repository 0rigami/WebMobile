import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = 'AccueilPage';
  tab2Root = 'OffreClubPage';
  tab3Root = 'RechercheClubPage';
  tab4Root = 'RechercheJoueurPage';
  tab5Root = 'MessagesPage';
  tab6Root = 'FavorisPage';
  tab7Root = 'ComptePage';
  tab8Root = 'Tab7Page';
  tab9Root = 'Tab9Page';
  tab10Root = 'Tab10Page';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

}
