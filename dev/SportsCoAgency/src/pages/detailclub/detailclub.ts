import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailClubOffrePage} from "../detailcluboffre/detailcluboffre";

/**
 * Generated class for the DetailClubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailclub',
  templateUrl: 'detailclub.html',
})
export class DetailClubPage {

  item: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailClubOffrePage, {
          item: item
      });
  }

    montrerOffre() {
        this.navCtrl.setRoot('DetailClubOffrePage');
  }




}
