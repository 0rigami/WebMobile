webpackJsonp([7],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorisModule", function() { return FavorisModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favoris__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavorisModule = (function () {
    function FavorisModule() {
    }
    return FavorisModule;
}());
FavorisModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__favoris__["a" /* FavorisPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favoris__["a" /* FavorisPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__favoris__["a" /* FavorisPage */]
        ]
    })
], FavorisModule);

//# sourceMappingURL=favoris.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailclub_detailclub__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(193);
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
 * Generated class for the FavorisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FavorisPage = FavorisPage_1 = (function () {
    function FavorisPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.DetailClubPage = __WEBPACK_IMPORTED_MODULE_2__detailclub_detailclub__["a" /* DetailClubPage */];
        this.Favoris = FavorisPage_1;
        this.array = new Array();
        this.http.get('http://127.0.0.1:8000/favori/get').subscribe(function (data) {
            _this.array = data.json();
            _this.clubs = [];
            _this.division = [];
            _this.localisation = [];
            _this.items = [];
            _this.presentation = [
                'Amneville',
                'Maizieres',
                'Thionville'
            ];
            _this.objectifs = [
                'Amneville',
                'Maizieres',
                'Thionville'
            ];
            _this.historique = [
                'Amneville',
                'Maizieres',
                'Thionville'
            ];
            _this.icons = ['https://static.wixstatic.com/media/8fe0fa_777edc6f59b74a9d845e49d9c6edc17f.png',
                'https://s1.static-footeo.com/uploads/es-maizieres/e71cf4d594e2f32ecc411c1f1318878ebd5b6c7f__nxnn3y.png',
                'https://upload.wikimedia.org/wikipedia/fr/c/c5/Logo_Thionville_FC.png'];
            for (var i = 0; i < _this.array.length; i++) {
                _this.clubs.push(_this.array[i].Nom);
                _this.division.push(_this.array[i].Division);
                _this.localisation.push(_this.array[i].Adresse);
            }
            for (var i = 0; i < _this.clubs.length; i++) {
                _this.items.push({
                    title: _this.clubs[i],
                    division: _this.division[i],
                    localisation: _this.localisation[i],
                    icon: _this.icons[i],
                    presentation: _this.presentation[i],
                    objectifs: _this.objectifs[i],
                    historique: _this.historique[i],
                });
            }
        });
        this.selectedItem = navParams.get('item');
    }
    FavorisPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detailclub_detailclub__["a" /* DetailClubPage */], {
            item: item
        });
    };
    return FavorisPage;
}());
FavorisPage = FavorisPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favoris',template:/*ion-inline-start:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/favoris/favoris.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Favoris</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" >\n      <!--<ion-icon [name]="item.icon" item-start></ion-icon>-->\n      <ion-img src="{{item.icon}}"></ion-img>\n      <div class="info-club">\n        <p class="info-club-titre">{{item.title}} </p>\n        <p>{{item.division}} </p>\n        <p> {{item.localisation}}</p>\n      </div>\n      <div class="item-note" item-end>\n        {{item.points}}\n      </div>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/favoris/favoris.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], FavorisPage);

var FavorisPage_1;
//# sourceMappingURL=favoris.js.map

/***/ })

});
//# sourceMappingURL=7.js.map