(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/login/seguranca.module": [
		"./src/app/login/seguranca.module.ts"
	],
	"src/app/medicamentos/medicamentos.module": [
		"./src/app/medicamentos/medicamentos.module.ts",
		"src-app-medicamentos-medicamentos-module~src-app-solicitacao-solicitacao-medicamento-module",
		"src-app-medicamentos-medicamentos-module"
	],
	"src/app/solicitacao/solicitacao-medicamento.module": [
		"./src/app/solicitacao/solicitacao-medicamento.module.ts",
		"src-app-medicamentos-medicamentos-module~src-app-solicitacao-solicitacao-medicamento-module",
		"src-app-solicitacao-solicitacao-medicamento-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: 'medicamentos', loadChildren: 'src/app/medicamentos/medicamentos.module#MedicamentosModule' },
    { path: 'solicitacao', loadChildren: 'src/app/solicitacao/solicitacao-medicamento.module#SolicitacaoMedicamentoModule' },
    { path: 'login', loadChildren: 'src/app/login/seguranca.module#SegurancaModule' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n      <ng2-toasty></ng2-toasty>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _medicamentos_medicamento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medicamentos/medicamento.service */ "./src/app/medicamentos/medicamento.service.ts");
/* harmony import */ var _tipo_tipo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tipo/tipo.service */ "./src/app/tipo/tipo.service.ts");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _estoque_estoque_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./estoque/estoque.service */ "./src/app/estoque/estoque.service.ts");
/* harmony import */ var _solicitacao_solicitacao_medicamento_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./solicitacao/solicitacao-medicamento.service */ "./src/app/solicitacao/solicitacao-medicamento.service.ts");
/* harmony import */ var _login_seguranca_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/seguranca.module */ "./src/app/login/seguranca.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_0__["HttpModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                ng2_toasty__WEBPACK_IMPORTED_MODULE_8__["ToastyModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _login_seguranca_module__WEBPACK_IMPORTED_MODULE_13__["SegurancaModule"],
            ],
            providers: [_medicamentos_medicamento_service__WEBPACK_IMPORTED_MODULE_6__["MedicamentoService"], _tipo_tipo_service__WEBPACK_IMPORTED_MODULE_7__["TipoService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlerService"], _estoque_estoque_service__WEBPACK_IMPORTED_MODULE_11__["EstoqueService"], _solicitacao_solicitacao_medicamento_service__WEBPACK_IMPORTED_MODULE_12__["SolicitacaoMedicamentoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/error-handler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/error-handler.service.ts ***!
  \***********************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(toasty, router) {
        this.toasty = toasty;
        this.router = router;
    }
    ErrorHandlerService.prototype.handle = function (errorResponse) {
        var msg;
        if (typeof errorResponse === 'string') {
            msg = errorResponse;
        }
        else if (errorResponse instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]
            && errorResponse.status >= 400 && errorResponse.status <= 499) {
            var errors = void 0;
            msg = 'Ocorreu um erro ao processar a sua solicitação';
            if (errorResponse.status === 403) {
                msg = 'Você não tem permissão para executar esta ação';
            }
            try {
                errors = errorResponse.json();
                msg = errors[0].mensagemUsuario;
            }
            catch (e) { }
            console.error('Ocorreu um erro', errorResponse);
        }
        else {
            msg = 'Erro ao processar serviço remoto. Tente novamente.';
            console.error('Ocorreu um erro', errorResponse);
        }
        this.toasty.error(msg);
    };
    ErrorHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  padding: 10px 0;\r\n  background-color: #1e94d2;\r\n}\r\n\r\n.navbar-toggle {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-menu {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 210px;\r\n  margin: 0;\r\n  padding: 0;\r\n  z-index: 9998;\r\n\r\n  background-color: #3a3633;\r\n\r\n  list-style: none;\r\n}\r\n\r\n.navbar-usuario {\r\n  padding: 15px;\r\n  margin-bottom: 15px;\r\n  border-bottom: 1px solid #525151;\r\n\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n\r\n.navbar-menuitem {\r\n  padding: 15px;\r\n}\r\n\r\n.navbar-menuitem a {\r\n  color: #c0bbb7;\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-menuitem a:hover {\r\n  color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n\n  <div class=\"container\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-12\">\n        <a href=\"javascript:;\" class=\"navbar-toggle\" (click)=\"exibindoMenu = !exibindoMenu\">\n          <i class=\"fa fa-bars\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n\n\n  <ul class=\"navbar-menu\" [hidden]=\"!exibindoMenu\">\n    <li class=\"navbar-usuario\" *ngIf=\"usuario !== ''\">{{ usuario }}</li>\n    <li class=\"navbar-usuario\" *ngIf=\"usuario === ''\"><a routerLink=\"/login\">Login</a></li>\n    <li class=\"navbar-menu-item\"><a routerLink=\"/solicitacao\">Solicitacao</a></li>\n    <li class=\"navbar-menu-item\"><a routerLink=\"/medicamentos\">Medicamentos</a></li>\n  </ul>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.usuario = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.usuario = localStorage.getItem('usuario');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/estoque/estoque.service.ts":
/*!********************************************!*\
  !*** ./src/app/estoque/estoque.service.ts ***!
  \********************************************/
/*! exports provided: MedicamentoFiltro, EstoqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentoFiltro", function() { return MedicamentoFiltro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstoqueService", function() { return EstoqueService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicamentoFiltro = /** @class */ (function () {
    function MedicamentoFiltro() {
        this.pagina = 0;
        this.itensPorPagina = 5;
    }
    return MedicamentoFiltro;
}());

var EstoqueService = /** @class */ (function () {
    function EstoqueService(http) {
        this.http = http;
        this.estoqueUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/estoque";
        this.token = localStorage.getItem('token');
    }
    EstoqueService.prototype.atualizarEstoque = function (estoque, lote) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Authorization', "bearer " + this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.estoqueUrl + "/acrescentar-ao-estoque/" + lote, JSON.stringify(estoque), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    EstoqueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], EstoqueService);
    return EstoqueService;
}());



/***/ }),

/***/ "./src/app/login/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/login/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Navegação com access token inválido. Obtendo novo token...');
            return this.auth.obterNovoAccessToken()
                .then(function () {
                if (_this.auth.isAccessTokenInvalido()) {
                    _this.router.navigate(['/login']);
                    return false;
                }
                return true;
            });
        }
        else if (next.data.roles && !this.auth.temQualquerPermissao(next.data.roles)) {
            this.router.navigate(['/nao-autorizado']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/login/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.oauthTokenUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/oauth/token";
        this.carregarToken();
    }
    AuthService.prototype.login = function (usuario, senha) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic Y29kZXJlZjokMmEkMTAkcDlQazBmUU5BUVNlc0k0dnV2S0EwT1phbkREMg==');
        var body = "username=" + usuario + "&password=" + senha + "&grant_type=password";
        return this.http.post(this.oauthTokenUrl, body, { headers: headers, withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.armazenarToken(response.json().access_token);
            _this.isAccessTokenInvalido();
        })
            .catch(function (response) {
            if (response.status === 400) {
                var responseJson = response.json();
                if (responseJson.error === 'invalid_grant') {
                    return Promise.reject('Usuário ou senha inválida!');
                }
            }
            return Promise.reject(response);
        });
    };
    AuthService.prototype.obterNovoAccessToken = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic Y29kZXJlZjokMmEkMTAkcDlQazBmUU5BUVNlc0k0dnV2S0EwT1phbkREMg==');
        var body = 'grant_type=refresh_token';
        return this.http.post(this.oauthTokenUrl, body, { headers: headers, withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.armazenarToken(response.json().access_token);
            console.log('Novo access token criado!');
            return Promise.resolve(null);
        })
            .catch(function (response) {
            console.error('Erro ao renovar token.', response);
            return Promise.resolve(null);
        });
    };
    AuthService.prototype.limparAccessToken = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.isAccessTokenInvalido = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic Y29kZXJlZjokMmEkMTAkcDlQazBmUU5BUVNlc0k0dnV2S0EwT1phbkREMg==');
        var body = "access_token=" + token;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user", body, { headers: headers, withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.armazenarUsuario(JSON.stringify(response.json().principal));
            return false;
        })
            .catch(function (response) {
            if (response.error === 'invalid_token') {
                return true;
            }
        });
    };
    AuthService.prototype.temPermissao = function (permissao) {
        var usuario = localStorage.getItem('usuario');
        var objeto = JSON.parse(usuario);
        return objeto != null && objeto.authorities.includes(permissao);
    };
    AuthService.prototype.temQualquerPermissao = function (roles) {
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            if (this.temPermissao(role)) {
                return true;
            }
        }
        return false;
    };
    AuthService.prototype.armazenarToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthService.prototype.armazenarUsuario = function (usuario) {
        localStorage.setItem('usuario', usuario);
    };
    AuthService.prototype.carregarToken = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.armazenarToken(token);
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login-form/login-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"max-width: 400px; margin: auto\">\r\n\r\n  <form autocomplete=\"off\" #f=\"ngForm\">\r\n    <div class=\"ui-g ui-fluid\">\r\n\r\n      <div class=\"ui-g-12\">\r\n        <h1>Login</h1>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12\">\r\n        <input pInputText type=\"email\" name=\"usuario\" placeholder=\"E-mail\"\r\n          ngModel required #usuario>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12\">\r\n        <input pInputText type=\"password\" name=\"senha\" placeholder=\"Senha\"\r\n          ngModel required #senha>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12\">\r\n        <button pButton type=\"submit\" label=\"Login\" [disabled]=\"!f.valid\"\r\n          (click)=\"login(usuario.value, senha.value)\"></button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(auth, erroHandler, router) {
        this.auth = auth;
        this.erroHandler = erroHandler;
        this.router = router;
    }
    LoginFormComponent.prototype.login = function (usuario, senha) {
        var _this = this;
        this.auth.login(usuario, senha)
            .then(function () {
            _this.router.navigate(['/solicitacao']);
        })
            .catch(function (erro) {
            _this.erroHandler.handle(erro);
        });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _core_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/login/logout.service.ts":
/*!*****************************************!*\
  !*** ./src/app/login/logout.service.ts ***!
  \*****************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoutService = /** @class */ (function () {
    function LogoutService() {
    }
    LogoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LogoutService);
    return LogoutService;
}());



/***/ }),

/***/ "./src/app/login/money-http.ts":
/*!*************************************!*\
  !*** ./src/app/login/money-http.ts ***!
  \*************************************/
/*! exports provided: NotAuthenticateError, MoneyHttp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthenticateError", function() { return NotAuthenticateError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyHttp", function() { return MoneyHttp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotAuthenticateError = /** @class */ (function () {
    function NotAuthenticateError() {
    }
    return NotAuthenticateError;
}());

var MoneyHttp = /** @class */ (function (_super) {
    __extends(MoneyHttp, _super);
    function MoneyHttp(auth, options, http, defOpts) {
        var _this = _super.call(this, options, http, defOpts) || this;
        _this.auth = auth;
        return _this;
    }
    MoneyHttp.prototype.delete = function (url, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.delete.call(_this, url, options); });
    };
    MoneyHttp.prototype.patch = function (url, body, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.patch.call(_this, url, options); });
    };
    MoneyHttp.prototype.head = function (url, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.head.call(_this, url, options); });
    };
    MoneyHttp.prototype.options = function (url, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.options.call(_this, url, options); });
    };
    MoneyHttp.prototype.get = function (url, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.get.call(_this, url, options); });
    };
    MoneyHttp.prototype.post = function (url, body, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.post.call(_this, url, body, options); });
    };
    MoneyHttp.prototype.put = function (url, body, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.put.call(_this, url, body, options); });
    };
    MoneyHttp.prototype.fazerRequisicao = function (fn) {
        var _this = this;
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Requisição HTTP com access token inválido. Obtendo novo token...');
            var chamadaNovoAccessToken = this.auth.obterNovoAccessToken()
                .then(function () {
                if (_this.auth.isAccessTokenInvalido()) {
                    throw new NotAuthenticateError();
                }
                return fn().toPromise();
            });
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].fromPromise(chamadaNovoAccessToken);
        }
        else {
            return fn();
        }
    };
    MoneyHttp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthConfig"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]])
    ], MoneyHttp);
    return MoneyHttp;
}(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthHttp"]));



/***/ }),

/***/ "./src/app/login/seguranca-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/login/seguranca-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SegurancaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegurancaRoutingModule", function() { return SegurancaRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"],
        data: {}
    },
];
var SegurancaRoutingModule = /** @class */ (function () {
    function SegurancaRoutingModule() {
    }
    SegurancaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], SegurancaRoutingModule);
    return SegurancaRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/seguranca.module.ts":
/*!*******************************************!*\
  !*** ./src/app/login/seguranca.module.ts ***!
  \*******************************************/
/*! exports provided: authHttpServiceFactory, SegurancaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHttpServiceFactory", function() { return authHttpServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegurancaModule", function() { return SegurancaModule; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/login/auth.guard.ts");
/* harmony import */ var _logout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout.service */ "./src/app/login/logout.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _money_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./money-http */ "./src/app/login/money-http.ts");
/* harmony import */ var _seguranca_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seguranca-routing.module */ "./src/app/login/seguranca-routing.module.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function authHttpServiceFactory(auth, http, options) {
    var config = new angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["AuthConfig"]({
        globalHeaders: [
            { 'Content-Type': 'application/json' }
        ]
    });
    return new _money_http__WEBPACK_IMPORTED_MODULE_10__["MoneyHttp"](auth, config, http, options);
}
var SegurancaModule = /** @class */ (function () {
    function SegurancaModule() {
    }
    SegurancaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _seguranca_routing_module__WEBPACK_IMPORTED_MODULE_11__["SegurancaRoutingModule"]
            ],
            declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_12__["LoginFormComponent"]],
            providers: [
                {
                    provide: angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]]
                },
                _auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _logout_service__WEBPACK_IMPORTED_MODULE_8__["LogoutService"],
                _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
            ]
        })
    ], SegurancaModule);
    return SegurancaModule;
}());



/***/ }),

/***/ "./src/app/medicamentos/medicamento.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/medicamentos/medicamento.service.ts ***!
  \*****************************************************/
/*! exports provided: MedicamentoFiltro, MedicamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentoFiltro", function() { return MedicamentoFiltro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentoService", function() { return MedicamentoService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicamentoFiltro = /** @class */ (function () {
    function MedicamentoFiltro() {
        this.pagina = 0;
        this.itensPorPagina = 5;
    }
    return MedicamentoFiltro;
}());

var MedicamentoService = /** @class */ (function () {
    function MedicamentoService(http) {
        this.http = http;
        this.medicamentosUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/medicamentos";
        this.token = localStorage.getItem('token');
    }
    MedicamentoService.prototype.pesquisar = function (filtro) {
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
        params.set('page', filtro.pagina.toString());
        params.set('size', filtro.itensPorPagina.toString());
        if (filtro.descricao) {
            params.set('descricao', filtro.descricao);
        }
        if (filtro.status) {
            params.set('status', filtro.status);
        }
        return this.http.get("" + this.medicamentosUrl, { headers: headers, search: params })
            .toPromise()
            .then(function (response) {
            var responseJson = response.json();
            var medicamentos = responseJson.content;
            var resultado = {
                medicamentos: medicamentos,
                total: responseJson.totalElements
            };
            return resultado;
        });
    };
    MedicamentoService.prototype.filtrarNomes = function (nome) {
        return this.http.get(this.medicamentosUrl + "/filtrar-nomes/" + nome)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    MedicamentoService.prototype.buscarPeloCodigo = function (lote) {
        return this.http.get(this.medicamentosUrl + "/" + lote)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    MedicamentoService.prototype.salvar = function (medicamento) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Authorization', "bearer " + this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.medicamentosUrl, JSON.stringify(medicamento), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MedicamentoService.prototype.atualizar = function (medicamento) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Authorization', "bearer " + this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.medicamentosUrl + "/" + medicamento.lote, JSON.stringify(medicamento), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MedicamentoService.prototype.atualizarStatus = function (medicamento) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Authorization', "bearer " + this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.medicamentosUrl + "/atualizar-status/" + medicamento.lote, JSON.stringify(medicamento), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MedicamentoService.prototype.atualizarEstoque = function (estoque, lote) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Authorization', "bearer " + this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.medicamentosUrl + "/acrescentar-ao-estoque/" + lote, JSON.stringify(estoque), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MedicamentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], MedicamentoService);
    return MedicamentoService;
}());



/***/ }),

/***/ "./src/app/solicitacao/solicitacao-medicamento.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/solicitacao/solicitacao-medicamento.service.ts ***!
  \****************************************************************/
/*! exports provided: SolicitacaoMedicamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitacaoMedicamentoService", function() { return SolicitacaoMedicamentoService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolicitacaoMedicamentoService = /** @class */ (function () {
    function SolicitacaoMedicamentoService(http) {
        this.http = http;
        this.solicitacaosUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/solicitacao";
        this.token = localStorage.getItem('token');
    }
    SolicitacaoMedicamentoService.prototype.salvar = function (solicitacao) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        debugger;
        headers.append('Authorization', "bearer " + this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.solicitacaosUrl, JSON.stringify(solicitacao), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    SolicitacaoMedicamentoService.prototype.confirmarSolicitacao = function (solicitacao, lote) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Authorization', "bearer " + this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.solicitacaosUrl + "/confirmar-solicitacao/" + lote, JSON.stringify(solicitacao), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    SolicitacaoMedicamentoService.prototype.excluirSolicitacao = function (solicitacao, lote) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Authorization', "bearer " + this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.solicitacaosUrl + "/excluir-solicitacao/" + lote, JSON.stringify(solicitacao), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    SolicitacaoMedicamentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], SolicitacaoMedicamentoService);
    return SolicitacaoMedicamentoService;
}());



/***/ }),

/***/ "./src/app/tipo/tipo.service.ts":
/*!**************************************!*\
  !*** ./src/app/tipo/tipo.service.ts ***!
  \**************************************/
/*! exports provided: MedicamentoFiltro, TipoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentoFiltro", function() { return MedicamentoFiltro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoService", function() { return TipoService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicamentoFiltro = /** @class */ (function () {
    function MedicamentoFiltro() {
        this.pagina = 0;
        this.itensPorPagina = 5;
    }
    return MedicamentoFiltro;
}());

var TipoService = /** @class */ (function () {
    function TipoService(http) {
        this.http = http;
        this.tiposUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/tipos";
    }
    TipoService.prototype.listarTodos = function () {
        return this.http.get(this.tiposUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    TipoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], TipoService);
    return TipoService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:9999'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Babi\Documents\docker\teste\farmacia-solidaria\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map