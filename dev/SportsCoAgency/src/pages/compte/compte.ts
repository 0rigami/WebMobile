import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the Tab6Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {

    item: Array<{nom: string, prenom: string, ville: string, email: string, telephone: string}>;

    array: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

      this.array = new Array();
      this.item = [];
      this.http.get('http://127.0.0.1:8000/user/get').subscribe(data => {
          this.array = data.json();
          this.item.push({nom: this.array[0].name,
          prenom: this.array[0].prenom,
          ville: this.array[0].ville,
          email: this.array[0].email,
          telephone: this.array[0].telephone
          });
          console.log(this.item[0].nom)
      });



  }

    public firstname: string = 'John';

  ionViewDidLoad() {
    console.log('ionViewDidLoad Compte');
  }



}
