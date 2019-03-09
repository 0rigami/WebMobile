import { PageInterface } from './menu';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Accueil', pageName: 'AccueilPage', tabComponent: 'AccueilPage', index: 0, icon: 'home' },
      { title: 'OffreClub', pageName: 'OffreClubPage', tabComponent: 'OffreClubPage', index: 1, icon: 'football' },
    { title: 'Rechercher un club', pageName: 'RechercherClubPage', tabComponent: 'RechercherClubPage', index: 2, icon: 'football' },
    { title: 'Rechercher un joueur', pageName: 'RechercherJoueurPage', tabComponent: 'RechercherJoueurPage', index: 3, icon: 'man' },
    { title: 'Messages', pageName: 'MessagesPage', tabComponent: 'MessagesPage', index: 4, icon: 'chatbubbles' },
    { title: 'Favoris', pageName: 'FavorisPage', tabComponent: 'FavorisPage', index: 5, icon: 'star' },
    { title: 'Compte', pageName: 'ComptePage', tabComponent: 'ComptePage', index: 6, icon: 'person' },
    { title: 'Tab 8', pageName: 'TabsPage', tabComponent: 'Tab8Page', index: 7, icon: 'contacts' },
    { title: 'Tab 9', pageName: 'TabsPage', tabComponent: 'Tab9Page', index: 8, icon: 'contacts' },
    { title: 'Tab 10', pageName: 'TabsPage', tabComponent: 'Tab10Page', index: 9, icon: 'contacts' },
    { title: 'Special', pageName: 'SpecialPage', icon: 'home' },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index};
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

}
