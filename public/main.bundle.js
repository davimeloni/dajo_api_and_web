webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_kitchen_kitchen_component__ = __webpack_require__("../../../../../src/app/components/kitchen/kitchen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_kitchen_service__ = __webpack_require__("../../../../../src/app/services/kitchen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_manageaccounts_manageaccounts_component__ = __webpack_require__("../../../../../src/app/components/manageaccounts/manageaccounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_manageaccounts_service__ = __webpack_require__("../../../../../src/app/services/manageaccounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_manageitens_manageitens_component__ = __webpack_require__("../../../../../src/app/components/manageitens/manageitens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_manageitens_service__ = __webpack_require__("../../../../../src/app/services/manageitens.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_item_item_component__ = __webpack_require__("../../../../../src/app/components/item/item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'kitchen', component: __WEBPACK_IMPORTED_MODULE_14__components_kitchen_kitchen_component__["a" /* KitchenComponent */] },
    { path: 'manageaccounts', component: __WEBPACK_IMPORTED_MODULE_19__components_manageaccounts_manageaccounts_component__["a" /* ManageaccountsComponent */] },
    { path: 'manageitens', component: __WEBPACK_IMPORTED_MODULE_21__components_manageitens_manageitens_component__["a" /* ManageitensComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_kitchen_kitchen_component__["a" /* KitchenComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_manageaccounts_manageaccounts_component__["a" /* ManageaccountsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_manageitens_manageitens_component__["a" /* ManageitensComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_item_item_component__["a" /* ItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material__["b" /* MdDialogModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_18__components_dialog_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_23__components_item_item_component__["a" /* ItemComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_15__services_kitchen_service__["a" /* KitchenService */],
            __WEBPACK_IMPORTED_MODULE_20__services_manageaccounts_service__["a" /* ManageaccountsService */],
            __WEBPACK_IMPORTED_MODULE_22__services_manageitens_service__["a" /* ManageitensService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n</div>\n\n<div class=\"modal-body\">\n  <p>\n    {{message}}\n  </p>\n</div>\n\n<div class=\"modal-footer\">\n  <button class=\"btn btn-primary\" (click)=\"reallyRemoveItem()\">Yes</button>\n  <button class=\"btn btn-secondary\" (click)=\"dialogRef.close()\">No</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_manageitens_service__ = __webpack_require__("../../../../../src/app/services/manageitens.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogComponent = (function () {
    function DialogComponent(dialogRef, manageItensService, flashMessage) {
        this.dialogRef = dialogRef;
        this.manageItensService = manageItensService;
        this.flashMessage = flashMessage;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.reallyRemoveItem = function () {
        var _this = this;
        console.log(this.itemId);
        this.manageItensService.deleteItem(this.itemId)
            .subscribe(function (res) {
            console.log(res);
            _this.flashMessage.show('Item deletado com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
        });
        this.dialogRef.close();
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/components/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dialog/dialog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_manageitens_service__["a" /* ManageitensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_manageitens_service__["a" /* ManageitensService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], DialogComponent);

var _a, _b, _c;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Food App</h1>\n  <p class=\"lead\">Restaurante Home Page</p>\n  <button (click)=\"testDialog()\">Test Modal</button>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.testDialog = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_dialog_dialog_component__["a" /* DialogComponent */]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal-body\">\n  <form (submit)=\"saveItem(item)\">\n  <div class=\"form-group\">\n    <label>*Item:</label>\n    <input type=\"text\" [(ngModel)]=\"item.name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>*Descricao:</label>\n    <textarea rows=\"3\" [(ngModel)]=\"item.description\" name=\"description\" class=\"form-control\">\n    </textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <label>*Categoria:</label>\n    <select [(ngModel)]=\"selectedCategory\" name=\"category\" class=\"form-control\" >\n      <option class=\"dropdown\" *ngFor=\"let c of categories\" [ngValue]=\"c\">\n        {{c.category}}\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label>*Tipo:</label>\n    <select [(ngModel)]=\"selectedCategoryType\" name=\"categorytype\" class=\"form-control\" >\n      <option class=\"dropdown\" *ngFor=\"let categorytype of selectedCategory.categorytype\" [ngValue]=\"categorytype\">\n        {{categorytype}}\n    </select>\n  </div>\n  \n  <div class=\"form-group\">\n    <label>*Preco:</label>\n    <input type=\"number\" [(ngModel)]=\"item.price\" name=\"price\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group form-inline\">\n    <label>Ativo: </label>\n    <input type=\"checkbox\" [(ngModel)]=\"item.isActive\" name=\"isActive\" class=\"form-control\">\n  </div>\n\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Salvar\">\n    <a class=\"btn btn-secondary\" (click)=\"onClose()\" \n      style=\"background: lightsalmon; color: white\">Fechar</a>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_manageitens_service__ = __webpack_require__("../../../../../src/app/services/manageitens.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemComponent = (function () {
    function ItemComponent(dialogRef, manageItensService, flashMessage) {
        this.dialogRef = dialogRef;
        this.manageItensService = manageItensService;
        this.flashMessage = flashMessage;
        this.item = {};
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedCategory = {};
        this.manageItensService.getAllCategories()
            .subscribe(function (res) {
            console.log(res);
            _this.categories = res;
            console.log(_this.categories);
            _this.selectedCategory = _this.categories[0];
            _this.selectedCategoryType = _this.selectedCategory.categorytype[0];
        });
    };
    ItemComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ItemComponent.prototype.saveItem = function (item) {
        var _this = this;
        if (item.name === undefined || item.description === undefined ||
            this.selectedCategory === undefined || this.selectedCategoryType === undefined ||
            item.price === undefined) {
            console.log('vindo aquii:?');
            alert('Por favor preencha os campos obrigatorios');
            return false;
        }
        item.category = this.selectedCategory.category;
        item.categorytype = this.selectedCategoryType;
        console.log(item);
        if (item._id) {
            console.log('editar');
            this.manageItensService.updateItem(item)
                .subscribe(function (res) {
                console.log(res);
                _this.flashMessage.show('Item editado com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
            });
        }
        else {
            console.log('criar');
            this.manageItensService.createItem(item)
                .subscribe(function (res) {
                console.log(res);
                _this.flashMessage.show('Item criado com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
            });
        }
        this.dialogRef.close();
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/components/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_manageitens_service__["a" /* ManageitensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_manageitens_service__["a" /* ManageitensService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ItemComponent);

var _a, _b, _c;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/kitchen/kitchen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    opacity: .8; \n    height: 480px;\n    overflow-y:scroll; \n}\n\n.col-md-4 {\n    border: 1px solid #777;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/kitchen/kitchen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div class=\"container\">\n    <div class=\"form row\">\n\n      <div class=\"col-md-4\">\n        Recebidos -> Prepará-los\n        <ul class=\"media-list\">\n          <p>\n            <button class=\"btn btn-primary\" (click)=\"cookItens()\">Processar</button>\n            <label style=\"float: right\">\n              Todos\n              <input type=\"checkbox\" (click)=\"selectAllItensToCook()\">\n            </label>\n          </p>\n          <li class=\"media list-group-item\" *ngFor=\"let oitem of itensOrdered\">\n            <div class=\"media-heading\">\n              {{oitem.orderedItem.name}}\n              <input style=\"float: right\" type=\"checkbox\" [(ngModel)]=\"oitem.isSelected\">\n            </div>\n            <div class=\"media-body\">\n              {{oitem.comments}}\n            </div>\n            <div class=\"media-bottom\">\n              <p>\n                Customer Name\n                <strong style=\"float: right;\">\n                  Mesa: {{oitem.table}}\n                </strong>\n              </p>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-4\">\n        Preparando -> Finalizar\n        <ul class=\"media-list\">\n          <p>\n            <button class=\"btn btn-primary\" (click)=\"finishItens()\">Finalizar</button>\n            <label style=\"float: right\">\n              Todos\n              <input type=\"checkbox\" (click)=\"selectAllItensToFinish()\">\n            </label>\n          </p>\n          <li class=\"media list-group-item\" *ngFor=\"let pitem of itensCooking\">\n            <div class=\"media-heading\">\n              {{pitem.orderedItem.name}}\n              <input style=\"float: right\" type=\"checkbox\" [(ngModel)]=\"pitem.isSelected\">\n            </div>\n            <div class=\"media-body\">\n              {{pitem.comments}}\n            </div>\n            <div class=\"media-bottom\">\n              <p>\n                Customer Name\n                <strong style=\"float: right;\">\n                  Mesa: {{pitem.table}}\n                </strong>\n              </p>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-4\">\n        Finalizados -> Entregar\n        <ul class=\"media-list\">\n          <p>\n            <button class=\"btn btn-primary\" (click)=\"deliveryItens()\">Entregar</button>\n            <label style=\"float: right\">\n              Todos\n              <input type=\"checkbox\" (click)=\"selectAllItensToDelivery()\">\n            </label>\n          </p>\n          <li class=\"media list-group-item\" *ngFor=\"let ditem of itensCooked\">\n            <div class=\"media-heading\">\n              {{ditem.orderedItem.name}}\n              <input style=\"float: right\" type=\"checkbox\" [(ngModel)]=\"ditem.isSelected\">\n            </div>\n            <div class=\"media-body\">\n              {{ditem.comments}}\n            </div>\n            <div class=\"media-bottom\">\n              <p>\n                Customer Name\n                <strong style=\"float: right;\">\n                  Mesa: {{ditem.table}}\n                </strong>\n              </p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/kitchen/kitchen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitchenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_kitchen_service__ = __webpack_require__("../../../../../src/app/services/kitchen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KitchenComponent = (function () {
    function KitchenComponent(kitchenService, router, authService, flashMessage) {
        this.kitchenService = kitchenService;
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.itensOrdered = [];
        this.itensCooking = [];
        this.itensCooked = [];
    }
    KitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Por favor autentique-se para acessar uma area restrita.', { cssClass: 'alert-warning', timeout: 5000 });
            this.router.navigate(['']);
        }
        this.getData();
        setTimeout(function () {
            _this.getData();
        }, 10000);
    };
    // ---------------- ITEMS TO COOK ---------------------------------------
    KitchenComponent.prototype.selectAllItensToCook = function () {
        this.itensOrdered.forEach(function (item) {
            item.isSelected = !item.isSelected;
        });
    };
    KitchenComponent.prototype.cookItens = function () {
        var _this = this;
        var updateItemData = {};
        this.itensOrdered.forEach(function (itemToCook) {
            if (itemToCook.isSelected) {
                itemToCook.status = 'Cooking';
                updateItemData = {
                    accountId: itemToCook.accountId,
                    orderedItens: itemToCook
                };
                console.log(updateItemData);
                _this.kitchenService.updateItensAccount(updateItemData)
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    };
    // -------------------- ITEMS TO FINISH -----------------------
    KitchenComponent.prototype.selectAllItensToFinish = function () {
        this.itensCooking.forEach(function (item) {
            item.isSelected = !item.isSelected;
        });
    };
    KitchenComponent.prototype.finishItens = function () {
        var _this = this;
        var updateItemData = {};
        this.itensCooking.forEach(function (itemToFinish) {
            if (itemToFinish.isSelected) {
                itemToFinish.status = 'Cooked';
                updateItemData = {
                    accountId: itemToFinish.accountId,
                    orderedItens: itemToFinish
                };
                console.log(updateItemData);
                _this.kitchenService.updateItensAccount(updateItemData)
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    };
    // -----------------ITENS TO DELIVERY ------------------
    KitchenComponent.prototype.selectAllItensToDelivery = function () {
        this.itensCooked.forEach(function (item) {
            item.isSelected = !item.isSelected;
        });
    };
    KitchenComponent.prototype.deliveryItens = function () {
        var _this = this;
        var updateItemData = {};
        this.itensCooked.forEach(function (itemToDelivery) {
            if (itemToDelivery.isSelected) {
                itemToDelivery.status = 'Delivered';
                updateItemData = {
                    accountId: itemToDelivery.accountId,
                    orderedItens: itemToDelivery
                };
                console.log(updateItemData);
                _this.kitchenService.updateItensAccount(updateItemData)
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    };
    // -------- GET DATA -------------------
    KitchenComponent.prototype.getData = function () {
        var _this = this;
        this.itensCooked = [];
        this.itensCooking = [];
        this.itensCooked = [];
        this.kitchenService.getKitchenItens().subscribe(function (accounts) {
            console.log(accounts);
            accounts.forEach(function (account) {
                account.orderedItens.forEach(function (item) {
                    if (item.status === 'Ordered') {
                        _this.orderedItem = {
                            accountId: account._id,
                            counter: account.counter,
                            customer: account.customer,
                            table: account.table,
                            isSelected: false,
                            _id: item._id,
                            orderedItemUpdatedAt: item.updatedAt,
                            status: item.status,
                            orderedItem: item.orderedItem,
                            comments: item.comments
                        };
                        _this.itensOrdered.push(_this.orderedItem);
                    }
                    else if (item.status === 'Cooking') {
                        _this.cookingItem = {
                            accountId: account._id,
                            counter: account.counter,
                            customer: account.customer,
                            table: account.table,
                            isSelected: false,
                            _id: item._id,
                            orderedItemUpdatedAt: item.updatedAt,
                            status: item.status,
                            orderedItem: item.orderedItem,
                            comments: item.comments
                        };
                        _this.itensCooking.push(_this.cookingItem);
                    }
                    else if (item.status === 'Cooked') {
                        _this.cookedItem = {
                            accountId: account._id,
                            counter: account.counter,
                            customer: account.customer,
                            table: account.table,
                            isSelected: false,
                            _id: item._id,
                            orderedItemUpdatedAt: item.updatedAt,
                            status: item.status,
                            orderedItem: item.orderedItem,
                            comments: item.comments
                        };
                        _this.itensCooked.push(_this.cookedItem);
                    }
                });
            });
            console.log(_this.itensCooked);
            console.log(_this.itensCooking);
            console.log(_this.itensOrdered);
        });
    };
    return KitchenComponent;
}());
KitchenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kitchen',
        template: __webpack_require__("../../../../../src/app/components/kitchen/kitchen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/kitchen/kitchen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_kitchen_service__["a" /* KitchenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_kitchen_service__["a" /* KitchenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], KitchenComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=kitchen.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['kitchen']);
                _this.authService.isLoggedIn = true;
                console.log(data);
            }
            else {
                _this.flashMessage.show('Usuario ou senha incorretos', { cssClass: 'alert-warning', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manageaccounts/manageaccounts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    opacity: .8; \n    height: 480px;\n    overflow-y:scroll; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manageaccounts/manageaccounts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <table class=\"table table-responsive table-hover\">\n    <thead>\n      <tr>\n        <th>Itens</th>\n        <th>Numero</th>\n        <th>Cliente</th>\n        <th>Mesa</th>\n        <th>Status</th>\n        <th>Aberta em</th>\n        <th>Ultima Atualização</th>\n        <th>Preço</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let account of accounts; let i = index\">\n      <tr>\n        <td>\n          <a class=\"btn btn-link\" (click)=\"toggle[i] = !toggle[i]\">\n            <span class=\"glyphicon glyphicon-plus-sign\" *ngIf=\"!toggle[i]\"></span>\n            <span class=\"glyphicon glyphicon-minus-sign\" *ngIf=\"toggle[i]\"></span>\n          </a>\n        </td>\n        <td style=\"padding-top: 20px;\">{{account.counter}}</td>\n        <td style=\"padding-top: 20px;\">{{account.customer.username}}</td>\n        <td style=\"padding-top: 20px;\">{{account.table}}</td>\n        <td style=\"padding-top: 20px;\">{{account.status}}</td>\n        <td style=\"padding-top: 20px;\">{{account.createdAt | date:'dd/MM/yyyy @ h:mma'}}</td>\n        <td style=\"padding-top: 20px;\">{{account.updatedAt | date:'dd/MM/yyyy @ h:mma'}}</td>\n        <td style=\"padding-top: 20px;\">{{account.price | currency:'BRL':true}}</td>\n      </tr>\n      <tr *ngIf=\"toggle[i]\" style=\"background: darkgray; color: white;\">\n        <td colspan=\"8\">\n          <div class=\"row-fluid\" style=\"text-align: center justify; margin-left: 100px;\" *ngFor=\"let item of account.orderedItens\">\n            <div class=\"col-md-4\">\n              <span>Item: {{item.orderedItem.name}}</span>\n            </div>\n            <div class=\"col-md-4\">\n              <span>Status: {{item.status}}</span>\n            </div>\n            <div id=\"price\" class=\"col-md-4\">\n              <span>Preço: {{item.orderedItem.price | currency:'BRL':true}}</span>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/manageaccounts/manageaccounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageaccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_manageaccounts_service__ = __webpack_require__("../../../../../src/app/services/manageaccounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageaccountsComponent = (function () {
    function ManageaccountsComponent(manageAccountsService, router, authService, flashMessage) {
        this.manageAccountsService = manageAccountsService;
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.toggle = {};
    }
    ManageaccountsComponent.prototype.ngOnInit = function () {
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Por favor autentique-se para acessar uma area restrita.', { cssClass: 'alert-warning', timeout: 5000 });
            this.router.navigate(['']);
        }
        this.loadAccounts();
    };
    ManageaccountsComponent.prototype.loadAccounts = function () {
        var _this = this;
        this.accounts = [];
        this.manageAccountsService.getAllAccounts()
            .subscribe(function (res) {
            console.log(res);
            _this.preAccounts = res;
            _this.preAccounts.forEach(function (account) {
                if (account.customer) {
                    _this.accounts.push(account);
                }
            });
        });
    };
    return ManageaccountsComponent;
}());
ManageaccountsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manageaccounts',
        template: __webpack_require__("../../../../../src/app/components/manageaccounts/manageaccounts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manageaccounts/manageaccounts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_manageaccounts_service__["a" /* ManageaccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_manageaccounts_service__["a" /* ManageaccountsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ManageaccountsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manageaccounts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manageitens/manageitens.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manageitens/manageitens.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary\" (click)=\"createItem()\">Criar Item</button>\n\n<table class=\"table table-responsive table-hover\">\n  <thead>\n    <tr>\n      <th>Item</th>\n      <th>Descricao</th>\n      <th>Categoria</th>\n      <th>Tipo</th>\n      <th>Ativo</th>\n      <th>Preço</th>\n      <th>Editar</th>\n      <th>Remover</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of itens\">\n      <td>{{item.name}}</td>\n      <td>{{item.description}}</td>\n      <td>{{item.category}}</td>\n      <td>{{item.categorytype}}</td>\n      <td>{{item.isActive}}</td>\n      <td>{{item.price | currency:'BRL':true}}</td>\n      <td>\n        <span (click)=\"editItem(item)\">\n          <i class=\"glyphicon glyphicon-edit\"></i>\n        </span>\n      </td>\n      <td>\n        <span (click)=\"removeItem(item)\">\n          <i class=\"glyphicon glyphicon-trash\"></i>\n        </span>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/manageitens/manageitens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageitensComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_manageitens_service__ = __webpack_require__("../../../../../src/app/services/manageitens.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_item_item_component__ = __webpack_require__("../../../../../src/app/components/item/item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageitensComponent = (function () {
    function ManageitensComponent(manageItensService, router, authService, flashMessage, dialog) {
        this.manageItensService = manageItensService;
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
    }
    ManageitensComponent.prototype.ngOnInit = function () {
        this.loadItens();
    };
    ManageitensComponent.prototype.testDialog = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__components_dialog_dialog_component__["a" /* DialogComponent */]);
    };
    ManageitensComponent.prototype.testItem = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__components_item_item_component__["a" /* ItemComponent */]);
        this.dialogRef.updatePosition({ top: '0', left: '50px' });
    };
    ManageitensComponent.prototype.loadItens = function () {
        var _this = this;
        this.manageItensService.getAllItens()
            .subscribe(function (res) {
            console.log(res);
            _this.itens = res;
        });
    };
    ManageitensComponent.prototype.loadCategories = function () {
        this.manageItensService.getAllCategories()
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ManageitensComponent.prototype.removeItem = function (item) {
        var _this = this;
        console.log(item);
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__components_dialog_dialog_component__["a" /* DialogComponent */]);
        this.dialogRef.componentInstance.message = 'Tem certeza que deseja deletar este item?';
        this.dialogRef.componentInstance.itemId = item._id;
        this.dialogRef.afterClosed()
            .subscribe(function (res) {
            console.log('After closed');
            _this.loadItens();
        });
    };
    ManageitensComponent.prototype.editItem = function (item) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__components_item_item_component__["a" /* ItemComponent */], {
            width: '400px',
            height: '500px'
        });
        this.dialogRef.componentInstance.item = item;
        this.dialogRef.afterClosed()
            .subscribe(function (res) {
            console.log('After closed');
            _this.loadItens();
        });
    };
    ManageitensComponent.prototype.createItem = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__components_item_item_component__["a" /* ItemComponent */], {
            width: '400px',
            height: '500px'
        });
        this.dialogRef.afterClosed()
            .subscribe(function (res) {
            console.log('After closed');
            _this.loadItens();
        });
    };
    return ManageitensComponent;
}());
ManageitensComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manageitens',
        template: __webpack_require__("../../../../../src/app/components/manageitens/manageitens.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manageitens/manageitens.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_manageitens_service__["a" /* ManageitensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_manageitens_service__["a" /* ManageitensService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */]) === "function" && _e || Object])
], ManageitensComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=manageitens.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Food App</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n            <li>{{userMessage}}</li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/kitchen']\">Cozinha</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/manageaccounts']\">Contas</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/manageitens']\">Itens</a></li>\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Registrar</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Deslogado com sucesso!', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log('ta vindo aqui?');
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            kind: 'Employee'
        };
        console.log(user);
        // Required Fields
        if (user.name === undefined || user.email === undefined ||
            user.username === undefined || user.password === undefined) {
            console.log('vindo aquii:?');
            this.flashMessage.show('Por favor preencha todos os campos', { cssClass: 'alert-warning', timeout: 3000 });
            return false;
        }
        console.log(user);
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log('aqui?');
            if (data.success) {
                _this.flashMessage.show('Registrado com sucesso!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Falha ao registrar, usuario ou e-mail ja existem', { cssClass: 'alert-warning', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isLoggedIn = false;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log(token + ' ' + user);
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = {};
        this.isLoggedIn = false;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/kitchen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitchenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KitchenService = (function () {
    function KitchenService(http) {
        this.http = http;
    }
    KitchenService.prototype.getKitchenItens = function () {
        return this.http.get('/accountskitchen')
            .map(function (res) { return res.json(); });
    };
    KitchenService.prototype.updateItensAccount = function (updateData) {
        return this.http.put('/account/' + updateData.accountId + '/updateitens', updateData)
            .map(function (res) { return res.json(); });
    };
    return KitchenService;
}());
KitchenService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], KitchenService);

var _a;
//# sourceMappingURL=kitchen.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/manageaccounts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageaccountsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageaccountsService = (function () {
    function ManageaccountsService(http) {
        this.http = http;
    }
    ManageaccountsService.prototype.getAllAccounts = function () {
        return this.http.get('/account')
            .map(function (res) { return res.json(); });
    };
    return ManageaccountsService;
}());
ManageaccountsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ManageaccountsService);

var _a;
//# sourceMappingURL=manageaccounts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/manageitens.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageitensService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageitensService = (function () {
    function ManageitensService(http) {
        this.http = http;
    }
    ManageitensService.prototype.getAllItens = function () {
        return this.http.get('/item')
            .map(function (res) { return res.json(); });
    };
    ManageitensService.prototype.createItem = function (item) {
        return this.http.post('/item', item)
            .map(function (res) { return res.json(); });
    };
    ManageitensService.prototype.updateItem = function (item) {
        return this.http.put('/item/' + item._id, item)
            .map(function (res) { return res.json(); });
    };
    ManageitensService.prototype.deleteItem = function (itemId) {
        return this.http.delete('/item/' + itemId)
            .map(function (res) { return res.json(); });
    };
    ManageitensService.prototype.getAllCategories = function () {
        return this.http.get('/category')
            .map(function (res) { return res.json(); });
    };
    ManageitensService.prototype.updateCategory = function () {
    };
    return ManageitensService;
}());
ManageitensService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ManageitensService);

var _a;
//# sourceMappingURL=manageitens.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined ||
            user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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