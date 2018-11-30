(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-medicamentos-medicamentos-module"],{

/***/ "./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form autocomplete=\"off\" (ngSubmit)=\"salvar()\" [formGroup]=\"formulario\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-12\">\n        <h1>Cadastro</h1>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-7 ui-fluid\">\n        <label>Medicamento</label>\n        <p-autoComplete formControlName=\"principioAtivo\" name=\"medicamento\" [suggestions]=\"nomesFiltrados\" (completeMethod)=\"filteredMedicamentoSingle($event)\"\n          [size]=\"30\" [minLength]=\"1\">\n        </p-autoComplete>\n        <app-message [control]=\"formulario.get('principioAtivo')\" error=\"obrigatoriedade\" text=\"Informe um medicamento\"></app-message>\n      </div>\n      <div class=\"ui-g-6  ui-md-3 ui-fluid\">\n        <label>Lote</label>\n        <input pInputText type=\"text\" name=\"lote\" formControlName=\"lote\">\n\n        <app-message [control]=\"formulario.get('lote')\" error=\"obrigatoriedade\" text=\"Informe o lote\"></app-message>\n        <app-message [control]=\"formulario.get('lote')\" error=\"tamanhoMinimo\" text=\"Mínimo de {{ formulario.get('lote').errors?.tamanhoMinimo?.tamanho }} caracteres\"></app-message>\n      </div>\n      <div class=\"ui-g-6 ui-md-2 ui-fluid\">\n        <label>Dosagem</label>\n        <input pInputText type=\"text\" name=\"dosagem\" formControlName=\"dosagem\">\n        <app-message [control]=\"formulario.get('dosagem')\" error=\"obrigatoriedade\" text=\"Informe uma dosagem\"></app-message>\n      </div>\n      <div class=\"ui-g-12 ui-md-5 ui-fluid\">\n        <label>Nome comercial</label>\n        <input pInputText type=\"text\" name=\"comercial\" formControlName=\"nomeComercial\">\n      </div>\n      <div class=\"ui-g-6 ui-md-2 ui-fluid\">\n        <label>Laboratório</label>\n        <input pInputText type=\"text\" name=\"lab\" formControlName=\"laboratorio\">\n      </div>\n      <div class=\"ui-g-6 ui-md-2 ui-fluid\" formGroupName=\"tipo\">\n        <label>Forma farmacêutica</label>\n        <p-dropdown name=\"tipo\" [options]=\"tipos\" placeholder=\"Selecione\" [autoWidth]=\"false\" formControlName=\"id\" (onChange)=\"desabilitarQtd()\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-6 ui-md-1 ui-fluid\" formGroupName=\"estoque\">\n        <label>Quantidade</label>\n        <input pInputText type=\"number\" name=\"qtd-comp\" formControlName=\"quantidade\">\n      </div>\n      <div class=\"ui-g-6 ui-md-2 ui-fluid\">\n        <label>Data de vencimento</label>\n        <p-calendar name=\"vencimento\" dateFormat=\"dd/mm/yy\" [inline]=\"false\" [readonlyInput]=\"false\" [showIcon]=\"false\" formControlName=\"dataVencimento\"></p-calendar>\n\n        <app-message [control]=\"formulario.get('dataVencimento')\" error=\"required\" text=\"Informe uma data de vencimento\"></app-message>\n      </div>\n      <div class=\"ui-g-12 ui-fluid\">\n        <label>Observação</label>\n        <textarea pInputTextarea rows=\"3\" name=\"observacao\" formControlName=\"outrasEspecificacoes\"></textarea>\n      </div>\n      <div class=\"ui-g-12\">\n        <button pButton type=\"submit\" label=\"Salvar\" [disabled]=\"formulario.invalid\"></button>\n        <a routerLink=\"/medicamentos\">Voltar para a pesquisa</a>\n      </div>\n    </div>\n  </form>\n</div>\n\n<p-dialog [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\" [minY]=\"70\"\n        [maximizable]=\"true\" [baseZIndex]=\"10000\">\n    <span>Lote já cadastrado, deseja acrescentar a quantidade '{{formulario.get('estoque').value.quantidade}}' ao estoque do medicamento?</span>\n        <p-footer>\n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"atualizarEstoque()\" label=\"Sim\"></button>\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"Não\" class=\"ui-button-secondary\"></button>\n        </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MedicamentoCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentoCadastroComponent", function() { return MedicamentoCadastroComponent; });
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../medicamento.service */ "./src/app/medicamentos/medicamento.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _tipo_tipo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tipo/tipo.service */ "./src/app/tipo/tipo.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _core_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/model */ "./src/app/core/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MedicamentoCadastroComponent = /** @class */ (function () {
    function MedicamentoCadastroComponent(medicamentoService, tipoService, formBuilder, toasty, router, errorHandler) {
        this.medicamentoService = medicamentoService;
        this.tipoService = tipoService;
        this.formBuilder = formBuilder;
        this.toasty = toasty;
        this.router = router;
        this.errorHandler = errorHandler;
        this.tipos = [];
        this.desabilitarCampoQtd = true;
        this.display = false;
    }
    MedicamentoCadastroComponent.prototype.ngOnInit = function () {
        this.configurarFormulario();
        this.carregarTipos();
    };
    MedicamentoCadastroComponent.prototype.carregarTipos = function () {
        var _this = this;
        return this.tipoService.listarTodos()
            .then(function (tipos) {
            _this.tipos = tipos
                .map(function (c) { return ({ label: c.descricao, value: c.id }); });
        });
    };
    MedicamentoCadastroComponent.prototype.filteredMedicamentoSingle = function (event) {
        var _this = this;
        var query = event.query;
        this.medicamentoService.filtrarNomes(query)
            .then(function (resultado) {
            _this.nomesFiltrados = resultado;
        });
    };
    MedicamentoCadastroComponent.prototype.salvar = function () {
        var _this = this;
        this.formulario.get('status').value.id = 1;
        this.formulario.get('status').value.descricao = 'Disponível';
        this.formulario.get('estoque').value.quantidade = this.desabilitarCampoQtd ? 1 : this.formulario.get('estoque').value.quantidade;
        this.medicamentoService.salvar(this.formulario.value)
            .then(function (medicamentoAdicionado) {
            _this.toasty.success('Medicamento adicionado com sucesso!');
            _this.router.navigate(['/medicamentos']);
        }).catch(function (erro) { return _this.display = true; });
    };
    MedicamentoCadastroComponent.prototype.atualizar = function () {
        var _this = this;
        this.medicamentoService.atualizar(this.formulario.value)
            .then(function (medicamentoAdicionado) {
            _this.toasty.success('Medicamento atualizado com sucesso!');
            _this.router.navigate(['/medicamentos']);
        }).catch(function (erro) { return _this.errorHandler.handle(erro); });
    };
    MedicamentoCadastroComponent.prototype.atualizarEstoque = function () {
        var _this = this;
        var estoque = new _core_model__WEBPACK_IMPORTED_MODULE_7__["Estoque"]();
        estoque.quantidade = this.formulario.get('estoque').value.quantidade;
        this.medicamentoService.atualizarEstoque(estoque, this.formulario.get('lote').value)
            .then(function (medicamentoAdicionado) {
            _this.toasty.success('Medicamento atualizado com sucesso!');
            _this.router.navigate(['/medicamentos']);
        }).catch(function (erro) { return _this.errorHandler.handle(erro); });
    };
    MedicamentoCadastroComponent.prototype.configurarFormulario = function () {
        this.formulario = this.formBuilder.group({
            principioAtivo: [null, this.validarObrigatoriedade],
            lote: [null, [this.validarObrigatoriedade, this.validarTamanhoMinimo(5)]],
            dosagem: [null, this.validarObrigatoriedade],
            tipo: this.formBuilder.group({
                id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                descricao: []
            }),
            estoque: this.formBuilder.group({
                id: [],
                quantidade: []
            }),
            dataVencimento: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            outrasEspecificacoes: [],
            nomeComercial: [],
            laboratorio: [],
            status: this.formBuilder.group({
                id: [],
                descricao: []
            }),
        });
    };
    MedicamentoCadastroComponent.prototype.validarObrigatoriedade = function (input) {
        return (input.value ? null : { obrigatoriedade: true });
    };
    MedicamentoCadastroComponent.prototype.validarTamanhoMinimo = function (valor) {
        return function (input) {
            return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor } };
        };
    };
    MedicamentoCadastroComponent.prototype.desabilitarQtd = function () {
        this.desabilitarCampoQtd = this.formulario.get('tipo').value.id === 1;
        //  this.desabilitarCampoQtd ? this.formulario.controls['estoque'].disable() : this.formulario.controls['estoque'].enable();
    };
    MedicamentoCadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-medicamento-cadastro',
            template: __webpack_require__(/*! ./medicamento-cadastro.component.html */ "./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.html"),
            styles: [__webpack_require__(/*! ./medicamento-cadastro.component.css */ "./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [_medicamento_service__WEBPACK_IMPORTED_MODULE_0__["MedicamentoService"],
            _tipo_tipo_service__WEBPACK_IMPORTED_MODULE_5__["TipoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"]])
    ], MedicamentoCadastroComponent);
    return MedicamentoCadastroComponent;
}());



/***/ }),

/***/ "./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"ui-g\">\n\n    <form autocomplete=\"off\" (ngSubmit)=\"pesquisar()\">\n\n      <div class=\"ui-g-12\">\n        <h1>Estoque de medicamentos</h1>\n      </div>\n\n      <div class=\"ui-g-12 ui-fluid\">\n        <label>Digite o nome do medicamento:</label>\n        <input pInputText type=\"text\" name=\"descricao\" [(ngModel)]=\"filtro.descricao\">\n      </div>\n\n      <div class=\"ui-g-12\">\n        <button pButton type=\"submit\" label=\"Pesquisar\"></button>\n      </div>\n\n    </form>\n  </div>\n\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n      <p-dataTable [value]=\"medicamentos\" [responsive]=\"true\" emptyMessage=\"Nenhum medicamento encontrado\" [paginator]=\"true\" [rows]=\"filtro.itensPorPagina\"\n        [lazy]=\"true\" [totalRecords]=\"totalRegistros\" (onLazyLoad)=\"aoMudarPagina($event)\">\n        <p-column field=\"principioAtivo\" header=\"Medicamento\"></p-column>\n        <p-column field=\"nomeComercial\" header=\"NomeComercial\"></p-column>\n        <p-column field=\"dosagem\" header=\"Dosagem\"></p-column>\n        <p-column field=\"tipo.descricao\" header=\"Forma farmacêutica\"></p-column>\n        <p-column field=\"status.descricao\" header=\"Status\"></p-column>\n        <p-column header=\"Vencimento\" styleClass=\"col-data\">\n          <ng-template let-med=\"rowData\" pTemplate=\"body\">\n            <span>{{ med.dataVencimento | date:'dd/MM/yyyy' }}</span>\n          </ng-template>\n        </p-column>\n        <p-column styleClass=\"col-acoes\">\n          <ng-template let-med=\"rowData\" pTemplate=\"body\">\n            <button pButton icon=\"fa fa-minus\" pTooltip=\"Excluir\" tooltipPosition=\"top\" (click)=\"excluir(med)\" *ngIf=\"med.status.descricao === 'Disponível'\"></button>\n            <button pButton icon=\"fa fa-check\" pTooltip=\"Doar\" tooltipPosition=\"top\" (click)=\"abrirModalConfirmacao(med)\" *ngIf=\"med.status.descricao === 'Reservado'\"></button>\n          </ng-template>\n        </p-column>\n      </p-dataTable>\n    </div>\n\n  </div>\n\n  <div class=\"ui-g-12\">\n    <a pButton label=\"Novo Medicamento\" routerLink=\"/medicamentos/novo\"></a>\n  </div>\n\n</div>\n\n<form autocomplete=\"off\" [formGroup]=\"formulario\">\n  <p-dialog header=\"Remover do estoque\" [(visible)]=\"display\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-12 ui-fluid\">\n        <label>Motivo</label>\n        <textarea pInputTextarea rows=\"3\" name=\"motivo\" formControlName=\"motivo\"></textarea>\n        <app-message [control]=\"formulario.get('motivo')\" error=\"required\" text=\"Informe um motivo\"></app-message>\n      </div>\n    </div>\n    <p-footer>\n      <button type=\"button\" pButton icon=\"fa fa-trash\" (click)=\"atualizarStatusParaExcluido()\" label=\"Excluir\"></button>\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"display=false\" label=\"Cancelar\" class=\"ui-button-secondary\"></button>\n    </p-footer>\n  </p-dialog>\n</form>\n<p-dialog header=\"Doar medicamento\" [(visible)]=\"displayDoar\">\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-fluid\">\n      <label>Deseja confirmar a doação para o usuário João ou cancelar? </label>\n    </div>\n  </div>\n  <p-footer>\n    <button type=\"button\" pButton icon=\"fa fa-check\" label=\"Confirmar\" (click)=\"confirmarSolicitacao()\"></button>\n    <button type=\"button\" pButton icon=\"fa fa-close\" label=\"Cancelar\" (click)=\"excluirSolicitacao()\" class=\"ui-button-secondary\"></button>\n  </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MedicamentosPesquisaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentosPesquisaComponent", function() { return MedicamentosPesquisaComponent; });
/* harmony import */ var _solicitacao_solicitacao_medicamento_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../solicitacao/solicitacao-medicamento.service */ "./src/app/solicitacao/solicitacao-medicamento.service.ts");
/* harmony import */ var _core_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/model */ "./src/app/core/model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../medicamento.service */ "./src/app/medicamentos/medicamento.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MedicamentosPesquisaComponent = /** @class */ (function () {
    function MedicamentosPesquisaComponent(medicamentoService, formBuilder, toasty, solicitacaoService, errorHandler) {
        this.medicamentoService = medicamentoService;
        this.formBuilder = formBuilder;
        this.toasty = toasty;
        this.solicitacaoService = solicitacaoService;
        this.errorHandler = errorHandler;
        this.totalRegistros = 0;
        this.filtro = new _medicamento_service__WEBPACK_IMPORTED_MODULE_3__["MedicamentoFiltro"]();
        this.medicamentos = [];
        this.display = false;
        this.displayDoar = false;
    }
    MedicamentosPesquisaComponent.prototype.ngOnInit = function () {
        this.medicamento = new _core_model__WEBPACK_IMPORTED_MODULE_1__["Medicamento"]();
        this.formulario = this.formBuilder.group({
            motivo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    MedicamentosPesquisaComponent.prototype.pesquisar = function (pagina) {
        var _this = this;
        if (pagina === void 0) { pagina = 0; }
        this.filtro.pagina = pagina;
        this.medicamentoService.pesquisar(this.filtro)
            .then(function (resultado) {
            _this.totalRegistros = resultado.total;
            _this.medicamentos = resultado.medicamentos;
        });
    };
    MedicamentosPesquisaComponent.prototype.aoMudarPagina = function (event) {
        var pagina = event.first / event.rows;
        this.pesquisar(pagina);
    };
    MedicamentosPesquisaComponent.prototype.excluir = function (medicamento) {
        this.medicamento = medicamento;
        this.display = true;
    };
    MedicamentosPesquisaComponent.prototype.atualizarStatusParaExcluido = function () {
        var _this = this;
        var status = this.medicamento.status;
        this.medicamento.status.id = 5;
        this.medicamento.status.descricao = 'Excluído';
        this.medicamento.obsExclusao = this.formulario.get('motivo').value;
        this.medicamentoService.atualizarStatus(this.medicamento)
            .then(function (medicamento) {
            _this.medicamento = medicamento;
            _this.toasty.success('Medicamento excluído com sucesso!');
            _this.display = false;
        }).catch(function (erro) { _this.display = true; _this.medicamento.status = status; _this.medicamento.obsExclusao = ''; });
    };
    MedicamentosPesquisaComponent.prototype.abrirModalConfirmacao = function (medicamento) {
        this.medicamento = medicamento;
        this.displayDoar = true;
    };
    MedicamentosPesquisaComponent.prototype.confirmarSolicitacao = function () {
        var _this = this;
        var solicitacao = this.medicamento.solicitacaoAtual;
        solicitacao.medicamento = this.medicamento;
        solicitacao.medicamento.solicitacaoAtual = null;
        this.displayDoar = false;
        this.solicitacaoService.confirmarSolicitacao(solicitacao, this.medicamento.lote)
            .then(function (medicamentoAdicionado) {
            _this.toasty.success('Reserva confirmada com sucesso!');
            _this.medicamento.solicitacaoAtual = solicitacao;
            _this.pesquisar();
        }).catch(function (erro) { _this.medicamento.solicitacaoAtual = solicitacao; _this.errorHandler.handle(erro); });
    };
    MedicamentosPesquisaComponent.prototype.excluirSolicitacao = function () {
        var _this = this;
        var solicitacao = this.medicamento.solicitacaoAtual;
        solicitacao.medicamento = this.medicamento;
        solicitacao.medicamento.solicitacaoAtual = null;
        this.displayDoar = false;
        this.solicitacaoService.excluirSolicitacao(solicitacao, this.medicamento.lote)
            .then(function (medicamentoAdicionado) {
            _this.toasty.success('Reserva excluída com sucesso!');
            _this.medicamento.solicitacaoAtual = solicitacao;
            _this.pesquisar();
        }).catch(function (erro) { _this.medicamento.solicitacaoAtual = solicitacao; _this.errorHandler.handle(erro); });
    };
    MedicamentosPesquisaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-medicamentos-pesquisa',
            template: __webpack_require__(/*! ./medicamentos-pesquisa.component.html */ "./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.html"),
            styles: [__webpack_require__(/*! ./medicamentos-pesquisa.component.css */ "./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.css")]
        }),
        __metadata("design:paramtypes", [_medicamento_service__WEBPACK_IMPORTED_MODULE_3__["MedicamentoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"],
            _solicitacao_solicitacao_medicamento_service__WEBPACK_IMPORTED_MODULE_0__["SolicitacaoMedicamentoService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"]])
    ], MedicamentosPesquisaComponent);
    return MedicamentosPesquisaComponent;
}());



/***/ }),

/***/ "./src/app/medicamentos/medicamentos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MedicamentosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentosRoutingModule", function() { return MedicamentosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _medicamentos_cadastro_medicamento_cadastro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicamentos-cadastro/medicamento-cadastro.component */ "./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.ts");
/* harmony import */ var _medicamentos_pesquisa_medicamentos_pesquisa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicamentos-pesquisa/medicamentos-pesquisa.component */ "./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _medicamentos_pesquisa_medicamentos_pesquisa_component__WEBPACK_IMPORTED_MODULE_3__["MedicamentosPesquisaComponent"],
        data: {}
    },
    {
        path: 'novo',
        component: _medicamentos_cadastro_medicamento_cadastro_component__WEBPACK_IMPORTED_MODULE_2__["MedicamentoCadastroComponent"],
        data: {}
    }
];
var MedicamentosRoutingModule = /** @class */ (function () {
    function MedicamentosRoutingModule() {
    }
    MedicamentosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], MedicamentosRoutingModule);
    return MedicamentosRoutingModule;
}());



/***/ }),

/***/ "./src/app/medicamentos/medicamentos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/medicamentos/medicamentos.module.ts ***!
  \*****************************************************/
/*! exports provided: MedicamentosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentosModule", function() { return MedicamentosModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/components/datatable/datatable */ "./node_modules/primeng/components/datatable/datatable.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _medicamentos_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./medicamentos-routing.module */ "./src/app/medicamentos/medicamentos-routing.module.ts");
/* harmony import */ var _medicamentos_pesquisa_medicamentos_pesquisa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./medicamentos-pesquisa/medicamentos-pesquisa.component */ "./src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component.ts");
/* harmony import */ var _medicamentos_cadastro_medicamento_cadastro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./medicamentos-cadastro/medicamento-cadastro.component */ "./src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var MedicamentosModule = /** @class */ (function () {
    function MedicamentosModule() {
    }
    MedicamentosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_15__["DataTableModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__["InputTextareaModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__["SelectButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_3__["CurrencyMaskModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__["AutoCompleteModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"],
                _medicamentos_routing_module__WEBPACK_IMPORTED_MODULE_17__["MedicamentosRoutingModule"]
            ],
            declarations: [
                _medicamentos_cadastro_medicamento_cadastro_component__WEBPACK_IMPORTED_MODULE_19__["MedicamentoCadastroComponent"],
                _medicamentos_pesquisa_medicamentos_pesquisa_component__WEBPACK_IMPORTED_MODULE_18__["MedicamentosPesquisaComponent"]
            ],
            exports: []
        })
    ], MedicamentosModule);
    return MedicamentosModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-medicamentos-medicamentos-module.js.map