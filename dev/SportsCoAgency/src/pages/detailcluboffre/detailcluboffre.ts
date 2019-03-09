import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailClubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailcluboffre',
  templateUrl: 'detailcluboffre.html',
})
export class DetailClubOffrePage {

  item: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
    Redirection() {
        this.navCtrl.setRoot('MenuPage');
    }
}
