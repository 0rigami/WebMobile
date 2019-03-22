import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailClubPage} from "../detailclub/detailclub";
import {Http}  from "@angular/http";


/**
 * Generated class for the RechercheClub page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-offreclub',
    templateUrl: 'offreclub.html',
})
export class OffreClubPage {

    DetailClubPage = DetailClubPage;
    selectedItem: any;
    icons: string[];
    items: Array<{title: string, division: string, localisation: string, icon: string, presentation: string, objectifs: string, historique: string}>;
    division: Array<string>;
    localisation: Array<string>;
    clubs: Array<string>;
    presentation: string[];
    objectifs: string[];
    historique: string[];
    //array: Array<{Nom: string, Division: string, Adresse: string}>;
    array: any;


    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

        this.array = new Array();
        this.http.get('http://127.0.0.1:8000/clubs/get').subscribe(data => {
            this.array = data.json();

            this.clubs = [];
            this.division = [];
            this.localisation = [];
            this.items = [];

            this.presentation = [
                'Amneville',
                'Maizieres',
                'Thionville'];
            this.objectifs = [
                'Amneville',
                'Maizieres',
                'Thionville'];
            this.historique = [
                'Amneville',
                'Maizieres',
                'Thionville'];

            this.icons = ['https://static.wixstatic.com/media/8fe0fa_777edc6f59b74a9d845e49d9c6edc17f.png',
                'https://s1.static-footeo.com/uploads/es-maizieres/e71cf4d594e2f32ecc411c1f1318878ebd5b6c7f__nxnn3y.png',
                'https://upload.wikimedia.org/wikipedia/fr/c/c5/Logo_Thionville_FC.png' ];

            for (let i = 0; i < this.array.length ; i++) {
                this.clubs.push(this.array[i].Nom);
                this.division.push(this.array[i].Division);
                this.localisation.push(this.array[i].Adresse);
            }

            for (let i = 0; i < this.clubs.length ; i++) {
                this.items.push({
                    title: this.clubs[i],
                    division: this.division[i] ,
                    localisation: this.localisation[i] ,
                    icon: this.icons[i],
                    presentation: this.presentation[i],
                    objectifs: this.objectifs[i],
                    historique: this.historique[i],
                });
            }
        });

        this.selectedItem = navParams.get('item');

    }

    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(DetailClubPage, {
            item: item
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad  RechercheJoueurPage');
    }

}
