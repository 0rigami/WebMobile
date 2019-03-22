webpackJsonp([13],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accueil/accueil.module": [
		265,
		9
	],
	"../pages/compte/compte.module": [
		266,
		8
	],
	"../pages/detailclub/detailclub.module": [
		267,
		12
	],
	"../pages/detailcluboffre/detailcluboffre.module": [
		268,
		11
	],
	"../pages/detailmessages/detailmessages.module": [
		270,
		10
	],
	"../pages/favoris/favoris.module": [
		269,
		7
	],
	"../pages/login/login.module": [
		273,
		6
	],
	"../pages/menu/menu.module": [
		272,
		5
	],
	"../pages/messages/messages.module": [
		271,
		4
	],
	"../pages/offreclub/offreclub.module": [
		275,
		3
	],
	"../pages/rechercheclub/rechercheclub.module": [
		274,
		2
	],
	"../pages/recherchejoueur/recherchejoueur.module": [
		277,
		1
	],
	"../pages/tabs/tabs.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 148;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailcluboffre_detailcluboffre__ = __webpack_require__(195);
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
 * Generated class for the DetailClubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailClubPage = (function () {
    function DetailClubPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
    }
    DetailClubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    DetailClubPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detailcluboffre_detailcluboffre__["a" /* DetailClubOffrePage */], {
            item: item
        });
    };
    DetailClubPage.prototype.montrerOffre = function () {
        this.navCtrl.setRoot('DetailClubOffrePage');
    };
    return DetailClubPage;
}());
DetailClubPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detailclub',template:/*ion-inline-start:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/detailclub/detailclub.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{item.title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="detailclub">\n\n    <ion-card>\n            <ion-card-header>\n\n                <ion-card-title><ion-img src="{{item.icon}}"></ion-img>{{item.title}}</ion-card-title>\n            </ion-card-header>\n\n\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n\n                <ion-card-title>Presentation du club</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n            </ion-card-content>\n\n\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n\n            <ion-card-title>Objectifs</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Les objectifs sont...\n        </ion-card-content>\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-card-title>Historique</ion-card-title>\n        </ion-card-header>\n\n        <ion-item href="#" class="activated">\n            <ion-icon name="wifi" slot="start"></ion-icon>\n            <ion-label>2018-2019 LIGUE 2 FRANCE</ion-label>\n        </ion-item>\n\n\n    </ion-card>\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-card-title>Palmares</ion-card-title>\n        </ion-card-header>\n\n        <ion-item href="#" class="activated">\n            <ion-icon name="wifi" slot="start"></ion-icon>\n            <ion-label>Coupe de France </ion-label>\n        </ion-item>\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-card-title>Offres proposés</ion-card-title>\n        </ion-card-header>\n\n        <ion-item (click)="montrerOffre()" class="activated">\n            <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n            <ion-icon name="wifi" slot="start"></ion-icon>\n            <ion-label>Offre 1</ion-label>\n        </ion-item>\n\n        <ion-item (click)="montrerOffre()">\n            <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n            <ion-icon name="wine" slot="start"></ion-icon>\n            <ion-label>Offre 2</ion-label>\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/detailclub/detailclub.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], DetailClubPage);

var _a, _b;
//# sourceMappingURL=detailclub.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
 * Generated class for the DetailMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailMessagesPage = (function () {
    function DetailMessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
    }
    DetailMessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return DetailMessagesPage;
}());
DetailMessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detailmessages',template:/*ion-inline-start:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/detailmessages/detailmessages.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Messages avec {{item.title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="detailmessage">\n    <ion-content>\n        <ion-grid>\n            <ion-row *ngFor="let message of messages">\n                <ion-col col-9 *ngIf="message.from!==currentUser" class="message" [ngClass]="{\'mymessage\': message.from === currentUser, \'othermessage\': message.from !== currentUser}">\n                    <span class="user_name">{{ message.from }}:</span>\n                    <br>\n                    <span>{{ message.text }}</span>\n                    <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n                </ion-col>\n\n                <ion-col offset-3 col-9 *ngIf="message.from===currentUser" class="message" [ngClass]="{\'mymessage\': message.from === currentUser, \'othermessage\': message.from !== currentUser}">\n                    <span class="user_name">{{ message.from }}:</span>\n                    <br>\n                    <span>{{ message.text }}</span>\n                    <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-content>\n</ion-content>'/*ion-inline-end:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/detailmessages/detailmessages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DetailMessagesPage);

//# sourceMappingURL=detailmessages.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailClubOffrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
 * Generated class for the DetailClubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailClubOffrePage = (function () {
    function DetailClubOffrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
    }
    DetailClubOffrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    DetailClubOffrePage.prototype.Redirection = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    return DetailClubOffrePage;
}());
DetailClubOffrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detailcluboffre',template:/*ion-inline-start:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/detailcluboffre/detailcluboffre.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title> Offre </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="detailclub">\n\n    <ion-card>\n        <ion-card-header>\n\n            <ion-card-title>Club</ion-card-title>\n        </ion-card-header>\n\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n\n            <ion-card-title>Recherche</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n        </ion-card-content>\n\n\n    </ion-card>\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-card-title>Details</ion-card-title>\n        </ion-card-header>\n\n        <ion-item href="#" class="activated">\n            <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n            <ion-icon name="wifi" slot="start"></ion-icon>\n            <ion-label>Poste :</ion-label>\n        </ion-item>\n\n        <ion-item href="#">\n            <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n            <ion-icon name="wine" slot="start"></ion-icon>\n            <ion-label>Pied: </ion-label>\n        </ion-item>\n\n        <ion-item href="#" class="activated">\n            <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n            <ion-icon name="wifi" slot="start"></ion-icon>\n            <ion-label>Disponibilité :</ion-label>\n        </ion-item>\n\n        <ion-item href="#">\n            <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n            <ion-icon name="wine" slot="start"></ion-icon>\n            <ion-label>Niveau: </ion-label>\n        </ion-item>\n\n        <ion-item href="#" class="activated">\n            <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n            <ion-icon name="wifi" slot="start"></ion-icon>\n            <ion-label>Nationalité :</ion-label>\n        </ion-item>\n\n        <ion-item href="#">\n            <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" />-->\n            <ion-icon name="wine" slot="start"></ion-icon>\n            <ion-label>Pays: </ion-label>\n        </ion-item>\n\n\n\n\n    </ion-card>\n\n    <!--<button (click)="itemTapped($event, item)" />-->\n    <button ion-button full (click)="Redirection()">Postuler</button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/pages/detailcluboffre/detailcluboffre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DetailClubOffrePage);

//# sourceMappingURL=detailcluboffre.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detailclub_detailclub__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detailmessages_detailmessages__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_detailclub_detailclub__["a" /* DetailClubPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_detailmessages_detailmessages__["a" /* DetailMessagesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/accueil/accueil.module#AccueilPageModule', name: 'AccueilPage', segment: 'accueil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/compte/compte.module#CompteModule', name: 'ComptePage', segment: 'compte', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detailclub/detailclub.module#DetailClubPageModule', name: 'DetailClubPage', segment: 'detailclub', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detailcluboffre/detailcluboffre.module#DetailClubOffrePageModule', name: 'DetailClubOffrePage', segment: 'detailcluboffre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favoris/favoris.module#FavorisModule', name: 'FavorisPage', segment: 'favoris', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detailmessages/detailmessages.module#DetailMessagesPageModule', name: 'DetailMessagesPage', segment: 'detailmessages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/messages/messages.module#MessagesModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rechercheclub/rechercheclub.module#RechercheClubPageModule', name: 'RechercheClubPage', segment: 'rechercheclub', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/offreclub/offreclub.module#OffreClubPageModule', name: 'OffreClubPage', segment: 'offreclub', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recherchejoueur/recherchejoueur.module#RechercheJoueurModule', name: 'RechercheJoueurPage', segment: 'recherchejoueur', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_detailclub_detailclub__["a" /* DetailClubPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_detailmessages_detailmessages__["a" /* DetailMessagesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/tomybien/Documents/LP/WebMobile/dev/SportsCoAgency/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map