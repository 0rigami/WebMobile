webpackJsonp([8],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompteModule", function() { return CompteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compte__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompteModule = (function () {
    function CompteModule() {
    }
    return CompteModule;
}());
CompteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__compte__["a" /* ComptePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__compte__["a" /* ComptePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__compte__["a" /* ComptePage */]
        ]
    })
], CompteModule);

//# sourceMappingURL=compte.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComptePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Tab6Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ComptePage = (function () {
    function ComptePage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.firstname = 'John';
        this.array = new Array();
        this.item = [];
        this.http.get('http://127.0.0.1:8000/user/get').subscribe(function (data) {
            _this.array = data.json();
            _this.item.push({ nom: _this.array[0].name,
                prenom: _this.array[0].prenom,
                ville: _this.array[0].ville,
                email: _this.array[0].email,
                telephone: _this.array[0].telephone
            });
            console.log(_this.item[0].nom);
        });
    }
    ComptePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Compte');
    };
    return ComptePage;
}());
ComptePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-compte',template:/*ion-inline-start:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/compte/compte.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>Mon compte</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="view-class">\n  <ion-slides pager="true">\n\n    <ion-slide *ngFor="let itm of item">\n      <h1>Mes informations</h1>\n      <ion-item>\n        <ion-label position="floating">Nom</ion-label>\n        <ion-input value="{{itm.nom}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position="floating">Prénom</ion-label>\n        <ion-input value="{{itm.prenom}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position="floating">Ville</ion-label>\n        <ion-input value="{{itm.ville}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position="floating">Email</ion-label>\n        <ion-input value="{{itm.email}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position="floating">Téléphone</ion-label>\n        <ion-input value="{{itm.telephone}}"></ion-input>\n      </ion-item>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card-header>\n\n        <ion-card-title>Mon CV</ion-card-title>\n      </ion-card-header>\n\n      <ion-item href="#" class="activated">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wifi" slot="start"></ion-icon>\n        <ion-label>Type de sport : FOOTBALL</ion-label>\n      </ion-item>\n\n      <ion-item href="#">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wine" slot="start"></ion-icon>\n        <ion-label>Date de naissance : 05/02/1985</ion-label>\n        <ion-label>Lieu de Naissance : Funchal</ion-label>\n        <ion-label>Pays de naissance : Portugal</ion-label>\n      </ion-item>\n\n      <ion-item href="#" class="activated">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wifi" slot="start"></ion-icon>\n        <ion-label>Poids : 82 kg</ion-label>\n        <ion-label>Taille en cm : 187</ion-label>\n        <ion-label>Pieds : Droit</ion-label>\n      </ion-item>\n\n      <ion-item href="#">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wine" slot="start"></ion-icon>\n        <ion-label>Poste principal : Attaquant</ion-label>\n        <ion-label>Côté principal : Gauche</ion-label>\n        <ion-label>Disponibilité : Jamais</ion-label>\n      </ion-item>\n\n      <ion-item href="#" class="activated">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wifi" slot="start"></ion-icon>\n        <ion-label>Lien de votre vidéo de présentation : </ion-label>\n      </ion-item>\n\n      <ion-card-header>\n\n        <ion-card-title>Historique</ion-card-title>\n      </ion-card-header>\n\n      <ion-item href="#" class="activated">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wifi" slot="start"></ion-icon>\n        <ion-label>2018 - 2019 : Ligue 2 / FRANCE</ion-label>\n      </ion-item>\n      <ion-item href="#">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wifi" slot="start"></ion-icon>\n        <ion-label>2017 - 2018 : Ligue 1 / FRANCE</ion-label>\n      </ion-item>\n\n      <ion-card-header>\n\n        <ion-card-title>Poste</ion-card-title>\n      </ion-card-header>\n\n      <ion-item href="#" class="activated">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wifi" slot="start"></ion-icon>\n        <ion-label>2018 - 2019 : Attaquant Gauche</ion-label>\n      </ion-item>\n      <ion-item href="#">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wifi" slot="start"></ion-icon>\n        <ion-label>2017 - 2018 : Attaquant Gauche </ion-label>\n      </ion-item>\n\n      <ion-card-header>\n\n        <ion-card-title>Palmarès</ion-card-title>\n      </ion-card-header>\n\n      <ion-item href="#" class="activated">\n        <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n        <ion-icon name="wifi" slot="start"></ion-icon>\n        <ion-label>2018 - 2019 : Coupe de France / FRANCE</ion-label>\n      </ion-item>\n\n    </ion-slide>\n\n    <ion-slide>\n      <h1>Ma recherche</h1>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/compte/compte.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ComptePage);

//# sourceMappingURL=compte.js.map

/***/ })

});
//# sourceMappingURL=8.js.map