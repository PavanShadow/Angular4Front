(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/ngx-bootstrap-alert/node_modules/@angular/core/esm5 lazy recursive":
/*!************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap-alert/node_modules/@angular/core/esm5 lazy namespace object ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/ngx-bootstrap-alert/node_modules/@angular/core/esm5 lazy recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/order-confirmation/order-confirmation.component */ "./src/app/components/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_store_front_store_front_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/store-front/store-front.component */ "./src/app/components/store-front/store-front.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _route_gaurds_populated_cart_route_gaurd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./route-gaurds/populated-cart.route-gaurd */ "./src/app/route-gaurds/populated-cart.route-gaurd.ts");
/* harmony import */ var _services_delivery_options_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/delivery-options.service */ "./src/app/services/delivery-options.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_send_order_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/send-order.service */ "./src/app/services/send-order.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _components_chef_view_chef_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/chef-view/chef-view.component */ "./src/app/components/chef-view/chef-view.component.ts");
/* harmony import */ var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/login/login.component */ "./src/app/components/admin/login/login.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap-alert */ "./node_modules/ngx-bootstrap-alert/esm5/ngx-bootstrap-alert.js");




















// import { DisplayComponent } from './components/display/display.component';







var firebaseConfig = {
    apiKey: "AIzaSyDN1C2X4xyC169alIrhvLupk7mZNro6pQc",
    authDomain: "designproject-d0329.firebaseapp.com",
    databaseURL: "https://designproject-d0329.firebaseio.com",
    projectId: "designproject-d0329",
    storageBucket: "designproject-d0329.appspot.com",
    messagingSenderId: "272077004339",
    appId: "1:272077004339:web:427f4508a04ca4c69a4d46"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartComponent"],
                _components_store_front_store_front_component__WEBPACK_IMPORTED_MODULE_11__["StoreFrontComponent"],
                _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["OrderConfirmationComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _components_chef_view_chef_view_component__WEBPACK_IMPORTED_MODULE_20__["ChefViewComponent"],
                _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_23__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__["AngularFireAuthModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_25__["BootstrapAlertModule"]
            ],
            providers: [
                _services_products_service__WEBPACK_IMPORTED_MODULE_15__["ProductsDataService"],
                _services_delivery_options_service__WEBPACK_IMPORTED_MODULE_14__["DeliveryOptionsDataService"],
                _route_gaurds_populated_cart_route_gaurd__WEBPACK_IMPORTED_MODULE_13__["PopulatedCartRouteGuard"],
                _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["LocalStorageServie"],
                _services_send_order_service__WEBPACK_IMPORTED_MODULE_18__["SendOrderService"],
                _services_admin_service__WEBPACK_IMPORTED_MODULE_19__["AdminService"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                { provide: _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"], useClass: _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["LocalStorageServie"] },
                {
                    deps: [_services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"], _services_products_service__WEBPACK_IMPORTED_MODULE_15__["ProductsDataService"], _services_delivery_options_service__WEBPACK_IMPORTED_MODULE_14__["DeliveryOptionsDataService"]],
                    provide: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartService"],
                    useClass: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartService"]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/order-confirmation/order-confirmation.component */ "./src/app/components/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _components_store_front_store_front_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/store-front/store-front.component */ "./src/app/components/store-front/store-front.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/login/login.component */ "./src/app/components/admin/login/login.component.ts");
/* harmony import */ var _route_gaurds_populated_cart_route_gaurd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-gaurds/populated-cart.route-gaurd */ "./src/app/route-gaurds/populated-cart.route-gaurd.ts");
/* harmony import */ var _components_chef_view_chef_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chef-view/chef-view.component */ "./src/app/components/chef-view/chef-view.component.ts");










var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        canActivate: [_route_gaurds_populated_cart_route_gaurd__WEBPACK_IMPORTED_MODULE_8__["PopulatedCartRouteGuard"]],
                        component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"],
                        path: "checkout"
                    },
                    {
                        canActivate: [_route_gaurds_populated_cart_route_gaurd__WEBPACK_IMPORTED_MODULE_8__["PopulatedCartRouteGuard"]],
                        component: _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["OrderConfirmationComponent"],
                        path: "confirmed"
                    },
                    {
                        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                        path: "admin"
                    },
                    {
                        component: _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        path: "login"
                    },
                    {
                        component: _components_chef_view_chef_view_component__WEBPACK_IMPORTED_MODULE_9__["ChefViewComponent"],
                        path: "chef-view"
                    },
                    {
                        component: _components_store_front_store_front_component__WEBPACK_IMPORTED_MODULE_5__["StoreFrontComponent"],
                        path: "**"
                    }
                ])
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                localStorage.setItem('user', JSON.stringify(_this.user));
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    AuthService.prototype.login = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['admin']);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        alert("Error!" + e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        localStorage.removeItem('user');
                        this.router.navigate(['login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    \n    <div class=\"col-6\">\n        <div class=\"adminTopic\">\n            <h3>Add Products</h3>\n        </div>\n      <form #productForm=\"ngForm\" (ngSubmit)=\"onSubmit(productForm)\" autocomplete=\"off\">\n        <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"productsService.selectedProduct._id\">\n          <div class=\"form-group\">\n            <label>Product Name</label>\n            <input class=\"form-control\" type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"productsService.selectedProduct.name\" placeholder=\"Enter the Name\" required>\n            \n          </div>\n          <div class=\"form-group\">\n            <label >Product Description</label>\n            <input class=\"form-control\" type=\"text\" name=\"description\" #name=\"ngModel\" [(ngModel)]=\"productsService.selectedProduct.description\" placeholder=\"Enter the Description\" required>\n          </div>\n\n          <div class=\"form-group\">\n              <label >Product Price</label>\n              <input class=\"form-control\" type=\"text\" name=\"price\" #name=\"ngModel\" [(ngModel)]=\"productsService.selectedProduct.price\" placeholder=\"Enter the Price\" required>\n          </div>\n\n          <!-- <div class=\"form-group\">\n              <label >Product Image</label>\n              <input class=\"form-control-file\" type=\"file\" name=\"image\" #name=\"ngModel\" [(ngModel)]=\"productsService.products.image\" required>\n          </div> -->\n\n          <div class=\"text-right\">\n             <button class=\"btn btn-secondary\" type=\"button\" (click)=\"resetForm(productForm)\" >Reset</button>\n              <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!productForm.valid\">Submit</button>\n          </div>\n         \n\n      </form>\n\n      <div>\n        <h3>View Records</h3>\n        <button class=\" backbtn btn btn-primary\"\n          routerLink=\"/chef-view\">Chef View</button>\n      </div>\n          \n       \n    </div>\n\n    <div class=\"col-6\">\n        <div class=\"adminTopic\">\n            <h3 >Edit Products</h3>\n            <!-- <div *ngIf=\"authService.isLoggedIn\">\n                <button  class=\"btn btn-dark\"  (click)=\"authService.logout()\">Logout</button>\n            </div> -->\n            \n        </div>\n        \n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Product</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">Price</th>\n                <th scope=\"col\">Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let pro of productsService.products | async\">\n                  <td>{{pro.name}}</td>\n                  <td>{{pro.description}}</td>\n                 \n                  <td>{{pro.price}}</td>\n                  <td>\n                    <button class=\"btn btn-primary\" (click)=\"onEdit(pro)\">\n                      <!-- <i class=\"material-icons\">edit</i> -->\n                      edit\n                    </button>\n                    <button class=\"btn btn-danger\" (click)=\"onDelete(pro._id,productForm)\">\n                      <!-- <i class=\"material-icons\">delete</i> -->\n                      delete\n                    </button>\n                  </td>\n              </tr>\n              \n            </tbody>\n          </table>\n    </div>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adminTopic {\n  margin-top: 90px;\n  margin-bottom: 20px;\n  font-size: 30px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9GOlxcU09TIERlc2lnbiBQcm9qZWN0XFxEZXNpZ24tUHJvamVjdFxcQW5ndWxhclRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hZG1pblRvcGlje1xyXG4gIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_send_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/send-order.service */ "./src/app/services/send-order.service.ts");
/* harmony import */ var app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");






var AdminComponent = /** @class */ (function () {
    function AdminComponent(productsService, sendorderservice, shoppingCartService, authService) {
        this.productsService = productsService;
        this.sendorderservice = sendorderservice;
        this.shoppingCartService = shoppingCartService;
        this.authService = authService;
        this.name = [];
        this.quantity = [];
        this.chart = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.refreshProducts();
        this.products = this.productsService.all();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
            _this.productsService.all().subscribe(function (products) {
                _this.product = products;
                _this.cartItems = cart.items
                    .map(function (item) {
                    var product = _this.product.find(function (p) { return p._id === item.productId; });
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { product: product, totalCost: product.price * item.quantity });
                });
            });
        });
        // this.sendorderservice.getOrder().subscribe((res: SendOrder[]) => {
        //   let i = 0;
        //   res.forEach(y => {
        //     this.name.push(y.items[i]._id);
        //     this.quantity.push(y.items[i].quantity);
        //   });
        //   this.chart = new Chart('canvas', { 
        //   type:'line',
        //   data:{
        //     labels:this.name,
        //     datasets:[{
        //       data:this.quantity,
        //       borderColor: '#3cba9f',
        //       fill: false
        //     }]
        //   },
        //   options:{
        //     legend:{
        //       display:false
        //     },
        //     scales:{
        //       xAxes:[{
        //         display:true
        //       }],
        //       yAxes:[{
        //         display:true
        //       }],
        //     }
        //   }
        // });
        // })
    };
    AdminComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.productsService.selectedProduct = {
            _id: "",
            name: "",
            description: "",
            price: null,
            updateFrom: null
        };
    };
    AdminComponent.prototype.onSubmit = function (form) {
        var _this = this;
        // console.log('hello');
        if (form.value._id == "") {
            this.productsService.postProduct(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.refreshProducts();
                // this.productsService.all();
                alert("Saved Successfully");
                window.location.reload();
            });
        }
        else {
            this.productsService.putProduct(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.refreshProducts();
                // this.productsService.all();
                alert("Updated Successefully");
                window.location.reload();
            });
        }
    };
    AdminComponent.prototype.refreshProducts = function () {
        var _this = this;
        this.productsService.getProduct().subscribe(function (res) {
            _this.productsService.product = res;
        });
    };
    AdminComponent.prototype.onEdit = function (pro) {
        this.productsService.selectedProduct = pro;
        // console.log(pro);
        // this.productsService.putProduct(product).subscribe((res) => {
        //   this.productsService.selectedProduct = product;
        // })
    };
    AdminComponent.prototype.onDelete = function (_id, form) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.productsService.deleteProduct(_id).subscribe(function (res) {
                // this.productSelect();
                form.reset();
                M.toast({ html: 'Deleted Successfully', classes: 'rounded' });
            });
        }
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            providers: [app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsDataService"]],
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsDataService"],
            app_services_send_order_service__WEBPACK_IMPORTED_MODULE_2__["SendOrderService"],
            app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"login-admin\">\n          <div class=\"col-6\">\n          <div class=\"log-in-form\" autocomplete=\"off\" >\n          <h4 class=\"text-center\">Log in with your credintials</h4>\n          <label>Username\n            <input type=\"text\" placeholder=\"Email\" #userEmail required autofocus>\n          </label>\n          <label>Password\n            <input type=\"password\" placeholder=\"Password\" #userPassword required>\n          </label>\n          <input id=\"show-password\" type=\"checkbox\"><label for=\"show-password\">Show password</label>\n          <button  class=\"button expanded\"  (click)=\"authService.login(userEmail.value, userPassword.value)\">Login</button>\n          <p class=\"text-center\"><a href=\"#\">Forgot your password?</a></p>\n        </div>\n        </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n -->\n\n\n<div class=\"container-fluid image \">\n  <div class=\"row login-form\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n          <div class=\"card card-signin my-5\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title text-center\">Admin Sign In</h5>\n              <form class=\"form-signin\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\"  class=\"form-control\" #userEmail  placeholder=\"Email address\" required autofocus>\n                  \n                </div>\n  \n                <div class=\"form-label-group\">\n                  <input type=\"password\"  #userPassword class=\"form-control\" placeholder=\"Password\" required>\n                  \n                </div>\n  \n                <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" (click)=\"authService.login(userEmail.value, userPassword.value)\">Sign in</button>\n                <hr class=\"my-4\">\n                \n                \n              </form>\n            </div>\n          </div>\n        </div>\n  </div>\n</div>\n \n"

/***/ }),

/***/ "./src/app/components/admin/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/login/login.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  background: url('login.jpg');\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: fixed;\n  left: 0;\n  right: 0; }\n\n.login-form {\n  margin-top: 120px; }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n  background-color: azure; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 80%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  height: 50px;\n  border-radius: 1rem;\n  padding-top: 0;\n  padding-left: 15px;\n  line-height: 1em; }\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x); }\n\n.form-label-group > ::-webkit-input-placeholder {\n  padding-left: 15px; }\n\n.form-label-group > ::-moz-placeholder {\n  padding-left: 15px; }\n\n.form-label-group > :-ms-input-placeholder {\n  padding-left: 15px; }\n\n.form-label-group > ::-ms-input-placeholder {\n  padding-left: 15px; }\n\n.form-label-group > ::placeholder {\n  padding-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9sb2dpbi9GOlxcU09TIERlc2lnbiBQcm9qZWN0XFxEZXNpZ24tUHJvamVjdFxcQW5ndWxhclRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkbWluXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBK0M7RUFDL0MsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUtWO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBRUUsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMsdUJBQ0YsRUFBQTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUduQjs7RUFFRSxzREFBc0QsRUFBQTs7QUFHeEQ7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvbG9naW4uanBnJyk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIFxyXG59XHJcblxyXG4ubG9naW4tZm9ybXtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG4uY2FyZC1zaWduaW4ge1xyXG4gIFxyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmVcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgbGluZS1oZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XHJcbiAgXHJcbn1cclxuLmZvcm0tbGFiZWwtZ3JvdXA+OjpwbGFjZWhvbGRlcntcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi8vIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiAxNXB4O1xyXG4vLyAgIGxlZnQ6IDE1cHg7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuLy8gICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4vLyAgIGNvbG9yOiAjNDk1MDU3O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuLy8gICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gfVxyXG5cclxuLy8gLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gfVxyXG5cclxuLy8gLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4vLyAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbi8vICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuLy8gICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgY29sb3I6ICM3Nzc7XHJcbi8vIH1cclxuXHJcbi8vIC5idG4tZ29vZ2xlIHtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxuLy8gfVxyXG5cclxuLy8gLmJ0bi1mYWNlYm9vayB7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/admin/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/admin/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col\">\n    <h2>\n      <i class=\"material-icons\">shopping_basket</i>\n      <span>Checkout</span>\n    </h2>\n  </div>\n  <div class=\"col text-left\">\n    <h4>\n      Order Total\n      <span class=\"text-right\" >{{(cart | async).grossTotal | currency:'USD':true}}</span>\n    \n    </h4>\n  </div>\n  <div class=\"col text-right\" >\n      \n     \n\n  </div>\n  <hr/>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"row checkout_row\"\n        *ngFor=\"let item of cartItems\">\n      <div class=\"col\">\n          <img src=\"./assets/{{item.product._id}}.jpg\"\n                class=\"product_image\"/>\n      </div>\n      <div class=\" col\">\n        \n          <span class=\"text--bold js-product-name\">{{item.product.name}}</span>\n          <p class=\"js-product-desc\">{{item.product.description}}</p>\n          \n      </div>\n      <div class=\" col text-right\">\n          <p class=\"text--red js-product-costs\">{{item.quantity}} x {{item.product.price | currency:'USD':true}}</p>\n      </div>\n      <div class=\"col text-right\">\n          <p class=\"text--bold text--red js-product-total\">{{item.totalCost | currency:'USD':true}}</p>\n         \n      </div>\n      \n\n    </div>\n   \n  </div>\n\n\n  <div class=\"col\" >\n     <h4>Pay via paypal</h4>\n    \n        Table No : <input type=\"text\" #model=\"ngModel\" [(ngModel)]=\"tableNo\" maxlength=\"1\" >\n        Telephone No : <input type=\"text\" #model=\"ngModel\" [(ngModel)]=\"telNo\" maxlength=\"14\" >\n     \n      \n  </div>\n\n\n  <div class=\"row\">\n    <div class=\" col\">\n      <a class=\"warning button\"\n        routerLink=\"/\">Back to List</a>\n    </div>\n  </div>\n</div>\n\n\n</div> -->\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-8\">\n\n      <div class=\"orderTopic\"> \n          <ul class=\"list-inline\">\n             <li>Orderd Items</li>\n          </ul>\n      </div>\n      \n\n          <table class=\"table table-borderless table-image\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Image</th>\n                  <th scope=\"col\">Name</th>\n                  <th scope=\"col\">Quantity</th>\n                  <th scope=\"col\">Total</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of cartItems\">\n                  <td class=\"w-25\" ><img src=\"./assets/{{item.product._id}}.jpg \"\n                    class=\"img-fluid img-thumbnail\"/></td>\n                  <td>{{item.product.name}}</td>\n                  <td>{{item.quantity}}</td>\n                  <td>{{item.totalCost | currency:'USD':true}}</td>\n                </tr>\n              </tbody>\n            </table>\n\n      <div>\n          <button class=\" backbtn btn btn-warning\"\n          routerLink=\"/\">Back to List</button>\n      </div>\n\n    </div>\n    \n\n    <div class=\"col-4 leftside\">\n      <div class=\"itemTot \">\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item\">Total</li>\n            <li class=\"list-inline-item\">{{(cart | async).grossTotal | currency:'USD':true}}</li>\n        </ul>\n        \n        <!-- <h3>Total</h3><span>{{(cart | async).grossTotal | currency:'USD':true}}</span> -->\n      </div>\n        <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Table No</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" #model=\"ngModel\" [(ngModel)]=\"tableNo\" maxlength=\"1\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label  class=\"col-sm-2 col-form-label\">Mobile</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" #model=\"ngModel\" [(ngModel)]=\"telNo\" maxlength=\"14\">\n            </div>\n          </div>\n\n          <h4 class=\"paypal\">Pay via paypal</h4>\n          <div id=\"paypal-button\" ></div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backbtn {\n  position: fixed;\n  bottom: 30px;\n  left: 30px;\n  margin-left: 10px; }\n\n.itemTot, .orderTopic, .paypal {\n  margin-top: 90px;\n  margin-bottom: 20px;\n  font-size: 30px;\n  font-weight: 700; }\n\n.orderTopic {\n  margin-left: 10px; }\n\ntable th {\n  text-align: center;\n  font-size: 25px; }\n\ntable td {\n  text-align: center;\n  vertical-align: 50%;\n  font-size: 20px;\n  font-weight: 600; }\n\n.leftside {\n  border-left: 4px solid black;\n  height: 100%;\n  position: fixed;\n  left: 66%;\n  margin-left: -3px;\n  top: 0; }\n\ninput {\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9GOlxcU09TIERlc2lnbiBQcm9qZWN0XFxEZXNpZ24tUHJvamVjdFxcQW5ndWxhclRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoZWNrb3V0XFxjaGVja291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUNGLEVBQUE7O0FBQ0E7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUNGLEVBQUE7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLE1BQU0sRUFBQTs7QUFFUjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0bntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7IFxuICBsZWZ0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5pdGVtVG90LCAub3JkZXJUb3BpYywucGF5cGFse1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDBcbn1cbi5vcmRlclRvcGlje1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbnRhYmxlIHRoe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbnRhYmxlIHRke1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLmxlZnRzaWRle1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNjYlO1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgdG9wOiAwO1xufVxuaW5wdXR7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var app_services_send_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/send-order.service */ "./src/app/services/send-order.service.ts");
/* harmony import */ var app_models_send_order_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/models/send-order.model */ "./src/app/models/send-order.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(productsService, sendorderservice, shoppingCartService, http, router) {
        this.productsService = productsService;
        this.sendorderservice = sendorderservice;
        this.shoppingCartService = shoppingCartService;
        this.http = http;
        this.router = router;
        this.itemList = new app_models_send_order_model__WEBPACK_IMPORTED_MODULE_6__["SendOrder"]();
        this.today = new Date();
        this.grossT = 0;
        this.gross = 1;
    }
    CheckoutComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
    };
    CheckoutComponent.prototype.setDeliveryOption = function (option) {
        this.shoppingCartService.setDeliveryOption(option);
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.deliveryOptions = this.deliveryOptionService.all();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
            _this.productsService.all().subscribe(function (products) {
                _this.products = products;
                _this.cartItems = cart.items
                    .map(function (item) {
                    var product = _this.products.find(function (p) { return p._id === item.productId; });
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { product: product, totalCost: product.price * item.quantity });
                });
            });
        });
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    CheckoutComponent.prototype.orderConfirm = function () {
        var _this = this;
        this.itemList.date = this.today.toString();
        this.itemList.tnumber = this.tableNo;
        this.itemList.mobileNo = this.telNo;
        this.itemList.items = new Array();
        this.cartItems.forEach(function (value) {
            this.itemList.items.push(new app_models_send_order_model__WEBPACK_IMPORTED_MODULE_6__["Item"](value.productId, value.quantity));
        }, this);
        this.sendorderservice.sendOrder(this.itemList).subscribe(function (res) {
            M.toast({ html: 'Added Successfully', classes: 'rounded' });
            _this.http.get("https://app.notify.lk/api/v1/send?user_id=10760&api_key=rQ8LexGbadgc9bWRvZmd&sender_id=NotifyDEMO&to=" + _this.telNo + "&message=TestWork")
                .subscribe(function (data) {
                alert("reqested");
                console.log("data", data);
            });
            // console.log(this.itemList);
        });
        // console.log(this.itemList);
    };
    CheckoutComponent.prototype.loadExternalScript = function (scriptUrl) {
        return new Promise(function (resolve, reject) {
            var scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    };
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.grossT = this.shoppingCartService.retrieve().grossTotal;
        //alert(this.shoppingCartService.retrieve().grossTotal);
        console.log(this.grossT);
        this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(function () {
            paypal.Button.render({
                env: 'sandbox',
                style: {
                    size: 'large',
                    color: 'blue',
                    shape: 'pill',
                    label: 'checkout'
                    // tagline: 'false'
                },
                client: {
                    sandbox: 'Ad8OC35xsz0-ted689Wctn_UHATDlkxEa7Y4io18LUlHiO-SORnNMHo3zamZSem-f6pBxUugkre2gWBp'
                },
                commit: true,
                payment: function (data, actions) {
                    return actions.payment.create({
                        payment: {
                            transactions: [
                                { amount: { total: _this.grossT, currency: 'USD' } }
                            ]
                        }
                    });
                },
                onAuthorize: function (data, actions) {
                    return actions.payment.execute().then(function (payment) {
                        window.alert('Payment Complete! Order will be soon');
                        // this.orderConfirm();
                        _this.tableNo = null;
                        _this.telNo = null;
                        _this.emptyCart();
                        _this.router.navigateByUrl('/');
                    });
                }
            }, '#paypal-button');
        });
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/components/checkout/checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsDataService"],
            app_services_send_order_service__WEBPACK_IMPORTED_MODULE_5__["SendOrderService"],
            app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/chef-view/chef-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chef-view/chef-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col s6\">\n        <h1>Customer needs</h1>\n        <table>\n          <thead>\n            <tr>\n              \n              <td>Table Number</td>\n              <td>Quantity</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of sendOrders\">\n              <td>{{item.tnumber}}</td>\n              <td>{{item._id}}</td>\n            </tr>\n          </tbody>\n        </table>\n        \n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/chef-view/chef-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/chef-view/chef-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlZi12aWV3L2NoZWYtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/chef-view/chef-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chef-view/chef-view.component.ts ***!
  \*************************************************************/
/*! exports provided: ChefViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefViewComponent", function() { return ChefViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_send_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/send-order.service */ "./src/app/services/send-order.service.ts");



// import { Chart } from 'chart.js';
var ChefViewComponent = /** @class */ (function () {
    function ChefViewComponent(sendorderservice) {
        this.sendorderservice = sendorderservice;
    }
    ChefViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sendorderservice.getOrder().subscribe(function (res) {
            _this.sendOrders = res;
            console.log(res);
        });
    };
    ChefViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chef-view',
            template: __webpack_require__(/*! ./chef-view.component.html */ "./src/app/components/chef-view/chef-view.component.html"),
            styles: [__webpack_require__(/*! ./chef-view.component.scss */ "./src/app/components/chef-view/chef-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_send_order_service__WEBPACK_IMPORTED_MODULE_2__["SendOrderService"]])
    ], ChefViewComponent);
    return ChefViewComponent;
}());



/***/ }),

/***/ "./src/app/components/order-confirmation/order-confirmation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"medium-12 columns\">\n    <h1>Thank you for your order, it will be dispatched shortly!</h1>\n  </div>\n</div>\n<br/>\n<br/>\n<div class=\"row\">\n  <div class=\"medium-8 small-12 columns small-centered text-center\">\n    <a routerLink=\"/\" class=\"button success large expanded\">Continue Shopping!</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/order-confirmation/order-confirmation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationComponent", function() { return OrderConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");



var OrderConfirmationComponent = /** @class */ (function () {
    function OrderConfirmationComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
        this.shoppingCartService.empty();
    };
    OrderConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-order-confirmation",
            template: __webpack_require__(/*! ./order-confirmation.component.html */ "./src/app/components/order-confirmation/order-confirmation.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], OrderConfirmationComponent);
    return OrderConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n      <h3 class=\"frontTopic\">\n        Your Product List\n      </h3>\n      <h5>\n        Sub Total ({{itemCount}} items):\n        <span class=\"blockquote mb-0\">{{(cart | async).grossTotal | currency:'USD':true}}</span>\n      </h5>\n\n        <button \n          class=\"btn btn-warning btn-lg btn-block proceedBtn\"\n          [attr.disabled]=\"itemCount === 0 ? true : null\"\n          routerLink=\"/checkout\">\n          Proceed To Checkout\n        </button>\n       \n       <button type=\"button\"\n          class=\"btn btn-dark btn-lg btn-block\"\n          (click)=\"emptyCart()\"\n          [attr.disabled]=\"itemCount === 0 ? true : null\">\n          Empty shopping basket\n      </button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frontTopic {\n  margin-top: 90px;\n  margin-bottom: 20px;\n  font-size: 30px;\n  font-weight: 700; }\n\n.proceedBtn {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L0Y6XFxTT1MgRGVzaWduIFByb2plY3RcXERlc2lnbi1Qcm9qZWN0XFxBbmd1bGFyVGVzdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hvcHBpbmctY2FydFxcc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZyb250VG9waWN7XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5wcm9jZWVkQnRue1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");




var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(productsService, shoppingCartService) {
        this.productsService = productsService;
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.productsService.all();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
        });
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            selector: "app-shopping-cart",
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/components/shopping-cart/shopping-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsDataService"],
            app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/components/store-front/store-front.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/store-front/store-front.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row \">\n\n  <div class=\"col-8\">\n    <h3 class=\"frontTopic\">Pick your favourite foods</h3>\n        <div class=\"row\">\n              <ng-container *ngFor=\"let product of products | async\" >\n                \n                    <div class=\"col\">\n\n                        <div class=\"card\" style=\"width: 18rem;\">\n                            <img src=\"./assets/{{product._id}}.jpg\" class=\"card-img-top img-fluid img-thumbnail frontImg\" alt=\"\">\n                            <div class=\"card-body\">\n                              <h5 class=\"card-title\">{{product.price | currency:'USD':true}}</h5>\n\n                              <ul class=\"list-inline\">\n                                <li class=\"list-inline-item itemName\">{{product.name}}</li>\n                                <li class=\"list-inline-item\">{{product.description}}</li>\n                              </ul>\n                              \n                              <div class=\"btn-group\" role=\"group\" >\n                                  <button type=\"button\" class=\"btn btn-success selItem\" (click)=\"addProductToCart(product, 1)\">Select</button>\n                                  <button type=\"button\" class=\"btn btn-danger \" *ngIf=\"productInCart(product) | async\"\n                                  (click)=\"removeProductFromCart(product, 1)\">Remove</button>\n                                  \n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    \n                   \n                \n                  \n              </ng-container>\n        </div>      \n    \n    \n  </div>\n  <div class=\"col-4 rightSide\">\n    \n      <app-shopping-cart></app-shopping-cart>\n\n  </div>\n\n  \n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/store-front/store-front.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/store-front/store-front.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frontTopic {\n  margin-top: 90px;\n  margin-bottom: 20px;\n  font-size: 30px;\n  font-weight: 700; }\n\n.selItem {\n  margin-right: 86px; }\n\n.itemName {\n  font-size: 26px;\n  font-weight: 700; }\n\n.frontImg {\n  width: 100%;\n  height: 220px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.card {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1mcm9udC9GOlxcU09TIERlc2lnbiBQcm9qZWN0XFxEZXNpZ24tUHJvamVjdFxcQW5ndWxhclRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHN0b3JlLWZyb250XFxzdG9yZS1mcm9udC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUNGLEVBQUE7O0FBQ0E7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQ0osRUFBQTs7QUFDQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1mcm9udC9zdG9yZS1mcm9udC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcm9udFRvcGlje1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDBcbn1cbi5zZWxJdGVte1xuICAgIG1hcmdpbi1yaWdodDogODZweDtcbn1cbi5pdGVtTmFtZXtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMFxufVxuLmZyb250SW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/store-front/store-front.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/store-front/store-front.component.ts ***!
  \*****************************************************************/
/*! exports provided: StoreFrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFrontComponent", function() { return StoreFrontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");





var StoreFrontComponent = /** @class */ (function () {
    function StoreFrontComponent(productsService, shoppingCartService) {
        this.productsService = productsService;
        this.shoppingCartService = shoppingCartService;
    }
    StoreFrontComponent.prototype.addProductToCart = function (product) {
        this.shoppingCartService.addItem(product, 1);
    };
    StoreFrontComponent.prototype.removeProductFromCart = function (product) {
        this.shoppingCartService.addItem(product, -1);
    };
    StoreFrontComponent.prototype.productInCart = function (product) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (obs) {
            var sub = _this.shoppingCartService
                .get()
                .subscribe(function (cart) {
                obs.next(cart.items.some(function (i) { return i.productId === product._id; }));
                obs.complete();
            });
            sub.unsubscribe();
        });
    };
    StoreFrontComponent.prototype.ngOnInit = function () {
        this.products = this.productsService.all();
        // console.log(this.products.map);
    };
    StoreFrontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            selector: "app-store-front",
            template: __webpack_require__(/*! ./store-front.component.html */ "./src/app/components/store-front/store-front.component.html"),
            styles: [__webpack_require__(/*! ./store-front.component.scss */ "./src/app/components/store-front/store-front.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsDataService"],
            app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], StoreFrontComponent);
    return StoreFrontComponent;
}());



/***/ }),

/***/ "./src/app/models/cart-item.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/cart-item.model.ts ***!
  \*******************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem() {
        this.quantity = 0;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/models/delivery-option.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/delivery-option.model.ts ***!
  \*************************************************/
/*! exports provided: DeliveryOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOption", function() { return DeliveryOption; });
var DeliveryOption = /** @class */ (function () {
    function DeliveryOption() {
    }
    DeliveryOption.prototype.updateFrom = function (src) {
        this.id = src.id;
        this.name = src.name;
        this.description = src.description;
        this.price = src.price;
    };
    return DeliveryOption;
}());



/***/ }),

/***/ "./src/app/models/product.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
// import { Ingredient } from "app/models/ingredient.model";
var Product = /** @class */ (function () {
    function Product() {
    }
    // public ingredients: Ingredient[];
    Product.prototype.updateFrom = function (src) {
        this._id = src._id;
        this.name = src.name;
        this.description = src.description;
        this.price = src.price;
        // this.ingredients = src.ingredients.map((i) => {
        //   let ingredient = new Ingredient();
        //   ingredient.updateFrom(i);
        //   return ingredient;
        // });
    };
    return Product;
}());



/***/ }),

/***/ "./src/app/models/send-order.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/send-order.model.ts ***!
  \********************************************/
/*! exports provided: SendOrder, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOrder", function() { return SendOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var SendOrder = /** @class */ (function () {
    function SendOrder() {
        this.tnumber = null;
        this.mobileNo = null;
        this.date = null;
        this.items = null;
    }
    return SendOrder;
}());

var Item = /** @class */ (function () {
    function Item(_id, quantity) {
        this._id = _id;
        this.quantity = quantity;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/models/shopping-cart.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/shopping-cart.model.ts ***!
  \***********************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = new Array();
        this.grossTotal = 0;
        this.deliveryTotal = 0;
        this.itemsTotal = 0;
    }
    ShoppingCart.prototype.updateFrom = function (src) {
        this.items = src.items;
        this.deliveryOptionId = src.deliveryOptionId;
        this.grossTotal = src.grossTotal;
        this.deliveryTotal = src.deliveryTotal;
        this.itemsTotal = src.itemsTotal;
    };
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/route-gaurds/populated-cart.route-gaurd.ts":
/*!************************************************************!*\
  !*** ./src/app/route-gaurds/populated-cart.route-gaurd.ts ***!
  \************************************************************/
/*! exports provided: PopulatedCartRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopulatedCartRouteGuard", function() { return PopulatedCartRouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");





var PopulatedCartRouteGuard = /** @class */ (function () {
    function PopulatedCartRouteGuard(router, shoppingCartService) {
        this.router = router;
        this.shoppingCartService = shoppingCartService;
    }
    PopulatedCartRouteGuard.prototype.canActivate = function () {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var cartSubscription = _this.shoppingCartService
                .get()
                .subscribe(function (cart) {
                if (cart.items.length === 0) {
                    observer.next(false);
                    _this.router.navigate(["/"]);
                }
                else {
                    observer.next(true);
                }
            });
            return function () { return cartSubscription.unsubscribe(); };
        });
    };
    PopulatedCartRouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]])
    ], PopulatedCartRouteGuard);
    return PopulatedCartRouteGuard;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/admins';
    }
    AdminService.prototype.getAdmin = function () {
        return this.http.get(this.baseUrl);
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/caching.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/caching.service.ts ***!
  \*********************************************/
/*! exports provided: CachcingServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachcingServiceBase", function() { return CachcingServiceBase; });
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/share */ "./node_modules/rxjs-compat/_esm5/add/operator/share.js");

var CachcingServiceBase = /** @class */ (function () {
    function CachcingServiceBase() {
    }
    CachcingServiceBase.prototype.cache = function (getter, setter, retreive) {
        var cached = getter();
        if (cached !== undefined) {
            return cached;
        }
        else {
            var val = retreive().share();
            setter(val);
            return val;
        }
    };
    return CachcingServiceBase;
}());



/***/ }),

/***/ "./src/app/services/delivery-options.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/delivery-options.service.ts ***!
  \******************************************************/
/*! exports provided: DeliveryOptionsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsDataService", function() { return DeliveryOptionsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_delivery_option_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/delivery-option.model */ "./src/app/models/delivery-option.model.ts");
/* harmony import */ var _caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caching.service */ "./src/app/services/caching.service.ts");






var DeliveryOptionsDataService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeliveryOptionsDataService, _super);
    function DeliveryOptionsDataService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    DeliveryOptionsDataService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.deliveryOptions; }, function (val) { return _this.deliveryOptions = val; }, function () { return _this.http
            .get("./assets/delivery-options.json")
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new _models_delivery_option_model__WEBPACK_IMPORTED_MODULE_4__["DeliveryOption"]();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    DeliveryOptionsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DeliveryOptionsDataService);
    return DeliveryOptionsDataService;
}(_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachcingServiceBase"]));



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDataService", function() { return ProductsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/product.model */ "./src/app/models/product.model.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caching.service */ "./src/app/services/caching.service.ts");






var count = 0;
var ProductsDataService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductsDataService, _super);
    function ProductsDataService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.baseURL = 'http://localhost:3000/products';
        return _this;
    }
    ProductsDataService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.products; }, function (val) { return _this.products = val; }, function () { return _this.http
            .get(_this.baseURL)
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new _models_product_model__WEBPACK_IMPORTED_MODULE_3__["Product"]();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    ProductsDataService.prototype.postProduct = function (pro) {
        return this.http.post(this.baseURL, pro);
    };
    ProductsDataService.prototype.getProduct = function () {
        return this.http.get(this.baseURL);
    };
    ProductsDataService.prototype.putProduct = function (pro) {
        return this.http.put(this.baseURL + ("/" + pro._id), pro);
    };
    ProductsDataService.prototype.deleteProduct = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    ProductsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProductsDataService);
    return ProductsDataService;
}(_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachcingServiceBase"]));



/***/ }),

/***/ "./src/app/services/send-order.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/send-order.service.ts ***!
  \************************************************/
/*! exports provided: SendOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOrderService", function() { return SendOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SendOrderService = /** @class */ (function () {
    // readonly smsurl = 'https://app.notify.lk/api/v1/send?user_id=10760&api_key=rQ8LexGbadgc9bWRvZmd&sender_id=NotifyDEMO&to=94712013009&message=TestWork';
    function SendOrderService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:3000/orders';
    }
    SendOrderService.prototype.sendOrder = function (sendlist) {
        return this.http.post(this.baseURL, sendlist);
    };
    SendOrderService.prototype.getOrder = function () {
        return this.http.get(this.baseURL);
    };
    SendOrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SendOrderService);
    return SendOrderService;
}());



/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var _models_cart_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cart-item.model */ "./src/app/models/cart-item.model.ts");
/* harmony import */ var _models_shopping_cart_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/shopping-cart.model */ "./src/app/models/shopping-cart.model.ts");
/* harmony import */ var _services_delivery_options_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/delivery-options.service */ "./src/app/services/delivery-options.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");









var CART_KEY = "cart";
var ShoppingCartService = /** @class */ (function () {
    // private baseURL = 'http://localhost:3000/orders';
    function ShoppingCartService(storageService, productService, deliveryOptionsService, http) {
        var _this = this;
        this.storageService = storageService;
        this.productService = productService;
        this.deliveryOptionsService = deliveryOptionsService;
        this.http = http;
        this.subscribers = new Array();
        this.storage = this.storageService.get();
        this.productService.all().subscribe(function (products) { return _this.products = products; });
        this.deliveryOptionsService.all().subscribe(function (options) { return _this.deliveryOptions = options; });
        this.subscriptionObservable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.subscribers.push(observer);
            observer.next(_this.retrieve());
            return function () {
                _this.subscribers = _this.subscribers.filter(function (obs) { return obs !== observer; });
            };
        });
    }
    ShoppingCartService.prototype.get = function () {
        return this.subscriptionObservable;
    };
    ShoppingCartService.prototype.addItem = function (product, quantity) {
        var cart = this.retrieve();
        var item = cart.items.find(function (p) { return p.productId === product._id; });
        if (item === undefined) {
            item = new _models_cart_item_model__WEBPACK_IMPORTED_MODULE_5__["CartItem"]();
            item.productId = product._id;
            cart.items.push(item);
        }
        item.quantity += quantity;
        cart.items = cart.items.filter(function (cartItem) { return cartItem.quantity > 0; });
        if (cart.items.length === 0) {
            cart.deliveryOptionId = undefined;
        }
        this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    };
    ShoppingCartService.prototype.empty = function () {
        var newCart = new _models_shopping_cart_model__WEBPACK_IMPORTED_MODULE_6__["ShoppingCart"]();
        this.save(newCart);
        this.dispatch(newCart);
    };
    ShoppingCartService.prototype.setDeliveryOption = function (deliveryOption) {
        var cart = this.retrieve();
        cart.deliveryOptionId = deliveryOption.id;
        this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    };
    ShoppingCartService.prototype.calculateCart = function (cart) {
        var _this = this;
        cart.itemsTotal = cart.items
            .map(function (item) { return item.quantity * _this.products.find(function (p) { return p._id === item.productId; }).price; })
            .reduce(function (previous, current) { return previous + current; }, 0);
        cart.deliveryTotal = cart.deliveryOptionId ?
            this.deliveryOptions.find(function (x) { return x.id === cart.deliveryOptionId; }).price :
            0;
        cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
    };
    ShoppingCartService.prototype.retrieve = function () {
        var cart = new _models_shopping_cart_model__WEBPACK_IMPORTED_MODULE_6__["ShoppingCart"]();
        var storedCart = this.storage.getItem(CART_KEY);
        if (storedCart) {
            cart.updateFrom(JSON.parse(storedCart));
        }
        return cart;
    };
    ShoppingCartService.prototype.save = function (cart) {
        this.storage.setItem(CART_KEY, JSON.stringify(cart));
    };
    ShoppingCartService.prototype.dispatch = function (cart) {
        this.subscribers
            .forEach(function (sub) {
            try {
                sub.next(cart);
            }
            catch (e) {
                // we want all subscribers to get the update even if one errors.
            }
        });
    };
    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductsDataService"],
            _services_delivery_options_service__WEBPACK_IMPORTED_MODULE_7__["DeliveryOptionsDataService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService, LocalStorageServie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageServie", function() { return LocalStorageServie; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/share */ "./node_modules/rxjs-compat/_esm5/add/operator/share.js");



var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    return StorageService;
}());

// tslint:disable-next-line:max-classes-per-file
var LocalStorageServie = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalStorageServie, _super);
    function LocalStorageServie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorageServie.prototype.get = function () {
        return localStorage;
    };
    LocalStorageServie = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LocalStorageServie);
    return LocalStorageServie;
}(StorageService));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\SOS Design Project\Design-Project\AngularTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map