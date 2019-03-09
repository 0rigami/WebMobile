import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailClubPage} from "../detailclub/detailclub";

/**
 * Generated class for the FavorisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage {


    Favoris = FavorisPage;
    selectedItem: any;
    icons: string[];
    items: Array<{title: string, division: string, localisation: string, icon: string, presentation: string, objectifs: string, historique: string}>;
    division: string[];
    localisation: string[];
    clubs: string[];
    presentation: string[];
    objectifs: string[];
    historique: string[];


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        // Let's populate this page with some filler content for funzies
        this.icons = ['https://static.wixstatic.com/media/8fe0fa_777edc6f59b74a9d845e49d9c6edc17f.png',
            'https://s1.static-footeo.com/uploads/es-maizieres/e71cf4d594e2f32ecc411c1f1318878ebd5b6c7f__nxnn3y.png',
            'https://upload.wikimedia.org/wikipedia/fr/c/c5/Logo_Thionville_FC.png' ];
        this.clubs = ['CSO Amnéville', 'ES Maizieres', 'FC Thionville'];
        this.division = ['Promotion','Excellence','Honneur'];
        this.localisation = ['Amneville','Maizieres','Thionville'];
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


        this.items = [];
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
    }

    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(DetailClubPage, {
            item: item
        });
    }
}
