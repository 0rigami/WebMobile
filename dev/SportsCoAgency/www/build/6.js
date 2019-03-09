webpackJsonp([6],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheClubPageModule", function() { return RechercheClubPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rechercheclub__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RechercheClubPageModule = (function () {
    function RechercheClubPageModule() {
    }
    return RechercheClubPageModule;
}());
RechercheClubPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__rechercheclub__["a" /* RechercheClubPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rechercheclub__["a" /* RechercheClubPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__rechercheclub__["a" /* RechercheClubPage */]
        ]
    })
], RechercheClubPageModule);

//# sourceMappingURL=rechercheclub.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechercheClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailclub_detailclub__ = __webpack_require__(194);
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
 * Generated class for the RechercheClub page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RechercheClubPage = (function () {
    function RechercheClubPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DetailClubPage = __WEBPACK_IMPORTED_MODULE_2__detailclub_detailclub__["a" /* DetailClubPage */];
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['https://static.wixstatic.com/media/8fe0fa_777edc6f59b74a9d845e49d9c6edc17f.png',
            'https://s1.static-footeo.com/uploads/es-maizieres/e71cf4d594e2f32ecc411c1f1318878ebd5b6c7f__nxnn3y.png',
            'https://upload.wikimedia.org/wikipedia/fr/c/c5/Logo_Thionville_FC.png'];
        this.clubs = ['CSO Amnéville', 'ES Maizieres', 'FC Thionville'];
        this.division = ['Promotion', 'Excellence', 'Honneur'];
        this.localisation = ['Amneville', 'Maizieres', 'Thionville'];
        this.presentation = [
            'Amneville',
            'Maizieres',
            'Thionville'
        ];
        this.objectifs = [
            'Amneville',
            'Maizieres',
            'Thionville'
        ];
        this.historique = [
            'Amneville',
            'Maizieres',
            'Thionville'
        ];
        this.items = [];
        for (var i = 0; i < this.clubs.length; i++) {
            this.items.push({
                title: this.clubs[i],
                division: this.division[i],
                localisation: this.localisation[i],
                icon: this.icons[i],
                presentation: this.presentation[i],
                objectifs: this.objectifs[i],
                historique: this.historique[i],
            });
        }
    }
    RechercheClubPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detailclub_detailclub__["a" /* DetailClubPage */], {
            item: item
        });
    };
    RechercheClubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad  RechercheJoueurPage');
    };
    return RechercheClubPage;
}());
RechercheClubPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rechercheclub',template:/*ion-inline-start:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/rechercheclub/rechercheclub.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>Rechercher un club</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <p>Recherche club</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/rechercheclub/rechercheclub.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RechercheClubPage);

//# sourceMappingURL=rechercheclub.js.map

/***/ })

});
//# sourceMappingURL=6.js.map