webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenav mode=\"side\" opened=\"true\" class=\"app-sidenav\">\r\n\r\n    <nav class=\"menu\" tabindex=\"0\">\r\n\t    <div class=\"smartphone-menu-trigger\"></div>\r\n      <header class=\"avatar\">\r\n        <div class=\"app-title\">nadzweb.com</div>\r\n        <div class=\"app-sub-title\">Customer Portal</div>\r\n        <img src=\"https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg\" />\r\n        <div class=\"user-name\">Mark Robert</div>\r\n      </header>\r\n      <ul>\r\n        <li><mat-icon>dashboard</mat-icon><span>Dashboard</span></li>\r\n        <li><mat-icon>line_style</mat-icon><span>Projects</span></li>\r\n        <li><mat-icon>description</mat-icon><span>Documents</span></li>\r\n        <li><mat-icon>web</mat-icon><span>News</span></li>\r\n        <li><mat-icon>event</mat-icon><span>Events</span></li>\r\n        <li><mat-icon>settings</mat-icon><span>Settings</span></li>\r\n      </ul>\r\n    </nav>\r\n  </mat-sidenav>\r\n  \r\n  <mat-toolbar color=\"primary\" class=\"\">\r\n    <div class=\"row\">\r\n      <div class=\"col s2\">\r\n        <a mat-mini-fab color=\"default\" (click)=\"sidenav.toggle()\"><mat-icon>menu</mat-icon></a>\r\n      </div>\r\n      <div class=\"col s8\">\r\n        <div class=\"title\">Client Portal</div>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar>\r\n  \r\n  <div class=\"app-content\">\r\n   \t<mat-card>\r\n   \t\t<a mat-mini-fab color=\"primary\"><mat-icon>edit</mat-icon></a>\r\n   \t\t<a mat-mini-fab color=\"accent\"><mat-icon>edit</mat-icon></a>\r\n   \t\t<a mat-mini-fab color=\"default\"><mat-icon>edit</mat-icon></a>\r\n   \t\t<a mat-mini-fab color=\"warn\"><mat-icon>edit</mat-icon></a>\r\n    </mat-card>\r\n  </div>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(location, authService) {
        this.location = location;
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.location.path() === '/callback') {
            this.authService.handleAuthentication();
        }
        else {
            if (!this.authService.isAuthenticated()) {
                this.authService.login();
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_shared_material_module__ = __webpack_require__("../../../../../src/app/core/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_services_index__ = __webpack_require__("../../../../../src/app/core/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_callback_callback_component__ = __webpack_require__("../../../../../src/app/auth/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_projects_page_projects_page_component__ = __webpack_require__("../../../../../src/app/pages/projects-page/projects-page.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__auth_callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_projects_page_projects_page_component__["a" /* ProjectsPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_shared_material_module__["a" /* AppMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* ROUTES */])
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MATERIAL_COMPATIBILITY_MODE */], useValue: true },
            __WEBPACK_IMPORTED_MODULE_8__core_services_index__["a" /* AuthService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_callback_callback_component__ = __webpack_require__("../../../../../src/app/auth/callback/callback.component.ts");
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { PingComponent } from './ping/ping.component';

var ROUTES = [
    // { path: '', component: HomeComponent },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_0__auth_callback_callback_component__["a" /* CallbackComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  callback works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/callback/callback.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallbackComponent = (function () {
    function CallbackComponent(authService) {
        this.authService = authService;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        // this.authService.handleAuthentication();
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-callback',
        template: __webpack_require__("../../../../../src/app/auth/callback/callback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/callback/callback.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], CallbackComponent);

var _a;
//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].auth0.clientID,
            domain: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].auth0.domain,
            responseType: 'token id_token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].auth0.redirectUri,
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        console.log('login');
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var materialModules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* A11yModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatLineModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatPseudoCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatStepperModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["L" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["M" /* MatTooltipModule */]
];
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    return AppMaterialModule;
}());
AppMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [materialModules],
        exports: [materialModules],
    })
], AppMaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/projects-page/projects-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  projects-page works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/projects-page/projects-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/projects-page/projects-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsPageComponent = (function () {
    function ProjectsPageComponent() {
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
    };
    return ProjectsPageComponent;
}());
ProjectsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projects-page',
        template: __webpack_require__("../../../../../src/app/pages/projects-page/projects-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/projects-page/projects-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsPageComponent);

//# sourceMappingURL=projects-page.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    auth0: {
        clientID: 'dF1lxGOBreAb1xmZsskKI9nxKjrfSr2f',
        domain: 'nadzweb.auth0.com',
        redirectUri: 'https://nadzweb.github.io/angular-material-client-portal/callback'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map