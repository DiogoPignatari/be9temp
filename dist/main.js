(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/+Su":
/*!***************************************************!*\
  !*** ./src/app/pages/servicos/servicos.module.ts ***!
  \***************************************************/
/*! exports provided: ServicosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosModule", function() { return ServicosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _servicos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicos.component */ "PkOs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [{ component: _servicos_component__WEBPACK_IMPORTED_MODULE_1__["ServicosComponent"], path: '' }];
class ServicosModule {
}
ServicosModule.ɵfac = function ServicosModule_Factory(t) { return new (t || ServicosModule)(); };
ServicosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ServicosModule });
ServicosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ServicosModule, { declarations: [_servicos_component__WEBPACK_IMPORTED_MODULE_1__["ServicosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]] }); })();


/***/ }),

/***/ "/s1f":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _app_shared_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@shared/services/database/database.service */ "mHhe");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class MainComponent {
    constructor(db) {
        this.db = db;
        this.showFiller = false;
        this.project = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].product;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this.db.user.toCollection().first();
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_shared_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 6, vars: 0, consts: [[1, "main-content"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".spacer[_ngcontent-%COMP%]:not(.rodape) {\n  flex: 1 1 auto;\n}\n\nspan.spacer[_ngcontent-%COMP%]:not(.rodape) {\n  padding-left: 20px;\n  font-size: 27px;\n}\n\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 51px;\n}\n\n.main-content[_ngcontent-%COMP%]:not(.rodape) {\n  box-sizing: border-box;\n  height: calc(100vh - 64px);\n  margin: 0px 0px;\n  position: relative;\n  padding: 84px 20px 0px 20px;\n}\n\n.content123[_ngcontent-%COMP%] {\n  display: inline-grid;\n}\n\n#logo[_ngcontent-%COMP%] {\n  height: 49px;\n  padding: 20px;\n  justify-items: start;\n}\n\n@media print {\n  .mat-toolbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  .mat-toolbar {\n  border-bottom: 5px solid #0cbb46;\n}\n\n  ::-webkit-scrollbar {\n  width: 10px;\n}\n\n  ::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  ::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n  ::-webkit-scrollbar-thumb:hover {\n  background: #c9c9c9;\n}\n\n\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #0cbb46;\n  color: #ffffff;\n}\n\n.nav[_ngcontent-%COMP%] {\n  max-height: 0;\n  transition: max-height 0.5s ease-out;\n}\n\n\n\n.hamb[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: right;\n  padding: 40px 20px;\n  margin-top: -86px;\n}\n\n.hamb-line[_ngcontent-%COMP%] {\n  background: #0cbb46;\n  display: block;\n  height: 2px;\n  position: relative;\n  width: 24px;\n}\n\n.hamb-line[_ngcontent-%COMP%]::before, .hamb-line[_ngcontent-%COMP%]::after {\n  background: #0cbb46;\n  content: \"\";\n  display: block;\n  height: 100%;\n  position: absolute;\n  transition: all 0.2s ease-out;\n  width: 100%;\n}\n\n.hamb-line[_ngcontent-%COMP%]::before {\n  top: 5px;\n}\n\n.hamb-line[_ngcontent-%COMP%]::after {\n  top: -5px;\n}\n\n.side-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.side-menu[_ngcontent-%COMP%]:checked    ~ nav[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n\n.side-menu[_ngcontent-%COMP%]:checked    ~ .hamb[_ngcontent-%COMP%]   .hamb-line[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.side-menu[_ngcontent-%COMP%]:checked    ~ .hamb[_ngcontent-%COMP%]   .hamb-line[_ngcontent-%COMP%]::before {\n  transform: rotate(-45deg);\n  top: 0;\n}\n\n.side-menu[_ngcontent-%COMP%]:checked    ~ .hamb[_ngcontent-%COMP%]   .hamb-line[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg);\n  top: 0;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n@media (min-width: 800px) {\n  .nav[_ngcontent-%COMP%] {\n    max-height: none;\n    top: 0;\n    position: relative;\n    float: right;\n    width: -moz-fit-content;\n    width: fit-content;\n    background-color: transparent;\n    color: #0cbb46;\n    margin-top: -89px;\n  }\n\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #0cbb46;\n    color: #fff;\n  }\n\n  .hamb[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .Span[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-top: 5px;\n    font-weight: 700;\n    margin-bottom: -9px;\n  }\n\n  .mat-icon.mat-icon-inline[_ngcontent-%COMP%] {\n    font-size: 35px;\n    margin-top: 4px;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    background-color: #fff;\n    box-shadow: 1px 1px 5px 0px var(--grey);\n    border-bottom: 5px solid #0cbb46;\n    position: sticky;\n    top: 0;\n    width: 100%;\n    height: 82px;\n    z-index: 1;\n  }\n\n  .menu-item[_ngcontent-%COMP%] {\n    line-height: normal;\n    text-align: center;\n    width: auto;\n    border-radius: 0;\n    height: inherit;\n    margin-bottom: -20px;\n  }\n  .menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu-item.active[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover {\n    background-color: #0cbb46;\n    color: #ffffff;\n  }\n\n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 20px 25px 20px 25px;\n    margin-top: -8px;\n  }\n}\n\n@media (max-width: 799px) {\n  .header[_ngcontent-%COMP%] {\n    background-color: #fff;\n    box-shadow: 1px 1px 5px 0px var(--grey);\n    border-bottom: 5px solid #0cbb46;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 82px;\n    z-index: 1;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: #fff;\n    overflow: hidden;\n    margin-top: -5px;\n  }\n\n  .mat-icon.mat-icon-inline[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n\n  .menu-item[_ngcontent-%COMP%] {\n    line-height: normal;\n    width: auto;\n    border-radius: 0;\n    height: inherit;\n    color: #0cbb46;\n  }\n  .menu-item.active[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover {\n    background-color: #0cbb46;\n    color: #ffffff;\n  }\n\n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 20px 25px 20px 25px;\n    margin-top: -8px;\n    text-align: inherit;\n  }\n\n  .Span[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-top: 5px;\n    font-weight: 700;\n    margin-bottom: -9px;\n    margin-left: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0k7RUFDRSxZQUFBO0FBRU47O0FBQ0U7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFZRTtFQUNFLG9CQUFBO0FBVEo7O0FBV0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBUko7O0FBYUU7RUFDRTtJQUNFLGFBQUE7RUFWSjtBQUNGOztBQWNJO0VBQ0UsZ0NBQUE7QUFaTjs7QUFpQkk7RUFDRSxXQUFBO0FBZk47O0FBaUJJO0VBQ0UsbUJBQUE7QUFmTjs7QUFpQkk7RUFDRSxnQkFBQTtBQWZOOztBQWlCSTtFQUNFLG1CQUFBO0FBZk47O0FBcUJFLFNBQUE7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUF0Qko7O0FBeUJFO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0FBdEJKOztBQXlCRSxjQUFBOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBdkJKOztBQTJCRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUF4Qko7O0FBNEJFOztFQUVFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUF6Qko7O0FBNEJFO0VBQ0UsUUFBQTtBQXpCSjs7QUE0QkU7RUFDRSxTQUFBO0FBekJKOztBQTZCRTtFQUNFLGFBQUE7QUExQko7O0FBNkJFLHFCQUFBOztBQUVBO0VBQ0UsZ0JBQUE7QUEzQko7O0FBOEJFO0VBQ0UsdUJBQUE7QUEzQko7O0FBOEJFO0VBQ0UseUJBQUE7RUFDQSxNQUFBO0FBM0JKOztBQStCRTtFQUNFLHdCQUFBO0VBQ0EsTUFBQTtBQTVCSjs7QUErQkU7RUFDRSxnQkFBQTtBQTVCSjs7QUErQkU7RUFDRTtJQUNJLGdCQUFBO0lBQ0EsTUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSw2QkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQTVCTjs7RUFnQ0U7SUFDSSxXQUFBO0VBN0JOOztFQWdDRTtJQUNJLHlCQUFBO0lBQ0EsV0FBQTtFQTdCTjs7RUFpQ0U7SUFDSSxhQUFBO0VBOUJOOztFQWlDSTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQTlCTjs7RUFnQ0k7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQTdCSjs7RUErQkk7SUFDRSxzQkFBQTtJQUNBLHVDQUFBO0lBQ0EsZ0NBQUE7SUFDQSxnQkFBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUE1Qk47O0VBOEJJO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxvQkFBQTtFQTNCTjtFQThCTTtJQUNFLGNBQUE7RUE1QlI7RUE4Qk07SUFFRSx5QkFBQTtJQUNBLGNBQUE7RUE3QlI7O0VBZ0NJO0lBQ0UsY0FBQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7RUE3Qk47QUFDRjs7QUFrQ0U7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsdUNBQUE7SUFDQSxnQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQWhDSjs7RUFrQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUEvQko7O0VBbUNFO0lBQ0UsZUFBQTtFQWhDSjs7RUFrQ0U7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VBL0JKO0VBaUNJO0lBRUUseUJBQUE7SUFDQSxjQUFBO0VBaENOOztFQW1DRTtJQUNFLGNBQUE7SUFDQSw0QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFoQ0o7O0VBbUNFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFoQ0o7QUFDRiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlcjpub3QoLnJvZGFwZSkge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIHNwYW4uc3BhY2VyOm5vdCgucm9kYXBlKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgfVxyXG4gICNsb2dvIHtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogNTFweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1haW4tY29udGVudDpub3QoLnJvZGFwZSl7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA4NHB4IDIwcHggMHB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIC5kaXNwb3NpY2FvUGFnaW5he1xyXG4gIC8vICAgZGlzcGxheTogZ3JpZDtcclxuICAvLyAgIGdyaWQtZ2FwOiAxLjVyZW07XHJcbiAgLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCA2cmVtKTtcclxuICAvLyAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gIC8vICAgJ21haW4tY29udGVudCdcclxuICAvLyAgICdyb2RhcGUnO1xyXG4gIC8vIH1cclxuICBcclxuICBcclxuICAgXHJcbiAgLmNvbnRlbnQxMjN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICB9XHJcbiAgI2xvZ297XHJcbiAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgfVxyXG4gIFxyXG4gICBcclxuICBcclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgLm1hdC10b29sYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5tYXQtdG9vbGJhciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMTIsIDE4NywgNzApO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgfVxyXG4gIFxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYzljOWM5O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBMb2dvICovXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLm1lbnUgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTg3LCA3MCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdntcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC41cyBlYXNlLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLyogTWVudSBJY29uICovXHJcbiAgXHJcbiAgLmhhbWJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtODZweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmhhbWItbGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzBjYmI0NjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuaGFtYi1saW5lOjpiZWZvcmUsXHJcbiAgLmhhbWItbGluZTo6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGNiYjQ2O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmhhbWItbGluZTo6YmVmb3Jle1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oYW1iLWxpbmU6OmFmdGVye1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2lkZS1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRvZ2dsZSBtZW51IGljb24gKi9cclxuICBcclxuICAuc2lkZS1tZW51OmNoZWNrZWQgfiBuYXZ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuc2lkZS1tZW51OmNoZWNrZWQgfiAuaGFtYiAuaGFtYi1saW5lIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuc2lkZS1tZW51OmNoZWNrZWQgfiAuaGFtYiAuaGFtYi1saW5lOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRvcDowO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2lkZS1tZW51OmNoZWNrZWQgfiAuaGFtYiAuaGFtYi1saW5lOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0b3A6MDtcclxuICB9XHJcbiAgXHJcbiAgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIC5uYXZ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICAjMGNiYjQ2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC04OXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1lbnUgbGl7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWVudSBhOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwY2JiNDY7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oYW1ie1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5TcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtOXB4O1xyXG4gICAgfVxyXG4gICAgICAubWF0LWljb24ubWF0LWljb24taW5saW5lIHtcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCB2YXIoLS1ncmV5KTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzBjYmI0NjtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDgycHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgICAubWVudS1pdGVtIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxODcsIDcwKTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubWVudSBhe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjVweCAyMHB4IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OXB4KSB7XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggdmFyKC0tZ3JleSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMGNiYjQ2O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogODJweDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5uYXZ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAubWF0LWljb24ubWF0LWljb24taW5saW5lIHtcclxuICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTIsIDE4NywgNzApO1xyXG4gIFxyXG4gICAgICAmLmFjdGl2ZSxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxODcsIDcwKTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lbnUgYXtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjVweCAyMHB4IDI1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5TcGFue1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTlweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thiag\Desktop\Thiago\GrBusiness\Be9provisorio\src\main.ts */"zUnb");


/***/ }),

/***/ "0rid":
/*!*****************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.module.ts ***!
  \*****************************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio.component */ "WBBN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [{ component: _portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"], path: '' }];
class PortfolioModule {
}
PortfolioModule.ɵfac = function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); };
PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: PortfolioModule });
PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]] }); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/services/auth/auth.service */ "Otuk");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");








const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/termos"]; };
const _c2 = function () { return ["/termos1"]; };
const _c3 = function () { return ["/politicadeprivacidade"]; };
class HomeComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.product = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].product;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 38, vars: 8, consts: [[1, "page"], [1, "ImageHome"], [1, "footer-bottom"], ["href", "#"], [1, "footer-menu"], [1, "f-menu"], ["routerLinkActive", "active", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "copyright \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Be9 Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Termos de uso App");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Termos de uso Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Pol\u00EDticas de privacidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\n  \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&family=Poppins:wght@200;300;400;600&display=swap\");\n  .mat-header-cell {\n  color: #000;\n  font-size: 14px;\n  font-weight: bold;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  margin-top: -2px;\n}\n.rodape[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  background-color: #203e7e;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: row;\n  align-items: center;\n  white-space: nowrap;\n  color: #fff;\n  position: relative;\n  border-top: 5px solid #fff;\n  height: 64px;\n  letter-spacing: normal;\n}\n.page[_ngcontent-%COMP%] {\n  background-image: url('BtnSite.png');\n}\n.ImageHome[_ngcontent-%COMP%] {\n  background-image: url('homeBe9prov.svg');\n  margin-left: -20px;\n  width: 99.35vw;\n  height: 900px;\n  margin-top: -85px;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: auto;\n  width: 99.35vw;\n  position: inherit;\n  color: #fff;\n  margin-left: -20px;\n}\n.footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.footer-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  font-weight: 500;\n  text-transform: capitalize;\n  line-height: 3rem;\n}\n.footer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 15px;\n  line-height: 28px;\n  font-size: 14px;\n  color: #ffffff;\n}\n.socials[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem 0 3rem 0;\n}\n.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 5px;\n  display: block;\n  color: white;\n}\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: block;\n  text-align: center;\n  margin-left: -2px;\n  transition: color 0.4s ease;\n}\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #e9c306;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  background: #381453;\n  padding: 20px;\n  padding-bottom: 40px;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: auto;\n  position: inherit;\n  color: #fff;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 14px;\n  word-spacing: 2px;\n  text-transform: capitalize;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e9c306;\n  font-size: 16px;\n  text-decoration: none;\n}\n.footer-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  opacity: 0.4;\n  font-weight: 200;\n}\n.footer-menu[_ngcontent-%COMP%] {\n  float: right;\n}\n.footer-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n.footer-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n}\n.footer-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cfd2d6;\n  text-decoration: none;\n}\n.footer-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e9c306;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFVLHdJQUFBO0FBUE47RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ047QUFjQTtFQUNBLGdCQUFBO0FBWEE7QUFlRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFaSjtBQWVFO0VBQ0Usb0NBQUE7QUFaSjtBQWVFO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBWko7QUE4QkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUEzQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUExQko7QUE0QkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQXpCSjtBQTJCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF4Qko7QUEwQkU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUF2Qko7QUF5QkU7RUFDRSxjQUFBO0FBdEJKO0FBd0JFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFyQko7QUF3QkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFHQSwyQkFBQTtBQXZCSjtBQTBCRTtFQUNFLGNBQUE7QUF2Qko7QUEwQkU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXhCSjtBQTBCRTtFQUNBLFdBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQXZCSjtBQXlCRTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUF0QkY7QUF3QkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXJCSjtBQXVCRTtFQUNBLFlBQUE7QUFwQkY7QUF1QkU7RUFDQSxhQUFBO0FBcEJGO0FBc0JFO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBbkJGO0FBcUJFO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBbEJGO0FBb0JFO0VBQ0EsY0FBQTtBQWpCRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDIwMDszMDA7NDAwOzUwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuICBcclxuICBcclxuICAvLyAgIC5wYWdlIHtcclxuICAvLyAgICAgLnBhZ2UtdGltZWxpbmUge1xyXG4gIC8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcblxyXG5cclxuXHJcbi5tYXQtaWNvbntcclxubWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5cclxuICBcclxuICAucm9kYXBle1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwM2U3ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgI2ZmZjtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAucGFnZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLlxcLi5cXC4uXFxhc3NldHNcXGltYWdlc1xcQnRuU2l0ZS5wbmcpO1xyXG4gIH1cclxuXHJcbiAgLkltYWdlSG9tZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLlxcLi5cXC4uXFxhc3NldHNcXGltYWdlc1xcaG9tZUJlOXByb3Yuc3ZnKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIHdpZHRoOiA5OS4zNXZ3O1xyXG4gICAgaGVpZ2h0OiA5MDBweDtcclxuICAgIG1hcmdpbi10b3A6IC04NXB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIFxyXG59XHJcbiAgXHJcbiAgLy8gLnBhZ2Uge1xyXG4gIC8vICAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICBcclxuICAvLyAgIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xyXG4gIC8vICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgXHJcbiAgLy8gICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cclxuICAvLyAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8vICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIC8vIH1cclxuXHJcbiAgXHJcbiAgZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDk5LjM1dnc7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvb3Rlci1jb250ZW50IGgze1xyXG4gICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICB9XHJcbiAgLmZvb3Rlci1jb250ZW50IHB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLnNvY2lhbHN7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMXJlbSAwIDNyZW0gMDtcclxuICB9XHJcbiAgLnNvY2lhbHMgbGl7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgLnNvY2lhbHMgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gIH1cclxuICAuc29jaWFscyBhIGl7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0Oi0ycHg7XHJcbiAgXHJcbiAgXHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuNHMgZWFzZTtcclxuICBcclxuICB9XHJcbiAgLnNvY2lhbHMgYTpob3ZlciBpe1xyXG4gICAgY29sb3I6IHJnYigyMzMsIDE5NSwgNik7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYm90dG9te1xyXG4gICAgYmFja2dyb3VuZDogIzM4MTQ1MztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuZm9vdGVyLWJvdHRvbSBwe1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgLmZvb3Rlci1ib3R0b20gcCBhe1xyXG4gIGNvbG9yOnJnYigyMzMsIDE5NSwgNik7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmZvb3Rlci1ib3R0b20gc3BhbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvcGFjaXR5OiAuNDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgfVxyXG4gIC5mb290ZXItbWVudXtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgXHJcbiAgfVxyXG4gIC5mb290ZXItbWVudSB1bHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuZm9vdGVyLW1lbnUgdWwgbGl7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmZvb3Rlci1tZW51IHVsIGxpIGF7XHJcbiAgY29sb3I6ICNjZmQyZDY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuZm9vdGVyLW1lbnUgdWwgbGkgYTpob3ZlcntcclxuICBjb2xvcjogcmdiKDIzMywgMTk1LCA2KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "82nU":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component */ "/s1f");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]] }); })();


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [{ component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], path: '' }];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
//import { env } from './.env';
const environment = {
    product: {
        name: 'Pytuna',
    },
    production: false,
    version: '1.0.0-dev',
    serverUrl: '/api',
    url: '/assets/bff/',
    apiUrl: 'http://34.132.216.179:10060',
    suffix: '.json',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'fr-FR'],
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JdIS":
/*!****************************************************!*\
  !*** ./src/app/pages/contato/contato.component.ts ***!
  \****************************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/services/auth/auth.service */ "Otuk");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pdftron/webviewer */ "18sX");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5__);










const _c0 = ["viewer"];
class ContatoComponent {
    // pdfSrc="TermosWEB.pdf";
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.product = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].product;
    }
    ngAfterViewInit() {
        _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5___default()({
            path: '../assets/lib',
            initialDoc: '../assets/TermosWEB.pdf'
        }, this.viewerRef.nativeElement).then(instance => {
        });
    }
}
ContatoComponent.ɵfac = function ContatoComponent_Factory(t) { return new (t || ContatoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ContatoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContatoComponent, selectors: [["app-contato"]], viewQuery: function ContatoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewerRef = _t.first);
    } }, decls: 6, vars: 0, consts: [[1, "page"], [1, "webviewer"], ["viewer", ""]], template: function ContatoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
    } }, styles: [".webviewer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  margin-top: -84px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImNvbnRhdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Vidmlld2Vye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLXRvcDogLTg0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Knzz":
/*!*************************************************************!*\
  !*** ./src/app/@shared/services/partner/partner.service.ts ***!
  \*************************************************************/
/*! exports provided: ParnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParnerService", function() { return ParnerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@shared/model */ "z/WG");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ParnerService {
    constructor(http) {
        var _a, _b, _c;
        this.http = http;
        this.apiUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.configList = [];
        this.baseUrlConfig = 'https://blockchain-contract-manager-default-rtdb.firebaseio.com/config.json';
        const jsonData = JSON.parse(localStorage.getItem('partnerList'));
        if (jsonData) {
            this.url1 = (_a = jsonData[0]) === null || _a === void 0 ? void 0 : _a.url;
            this.url2 = (_b = jsonData[1]) === null || _b === void 0 ? void 0 : _b.url;
            this.url3 = (_c = jsonData[2]) === null || _c === void 0 ? void 0 : _c.url;
        }
        this.partnerList().subscribe((data) => {
            this.configList = data;
            for (var i in this.configList) {
                if (this.configList[i].parametro == '1') {
                    this.url1 = this.configList[i].url;
                }
                if (this.configList[i].parametro == '2') {
                    this.url2 = this.configList[i].url;
                }
                if (this.configList[i].parametro == '3') {
                    this.url3 = this.configList[i].url;
                }
            }
        });
    }
    login(loginPayload) {
        return this.http.post('http://localhost:8080/' + 'token/generate-token', loginPayload);
    }
    partnerList() {
        return this.http.get(this.baseUrlConfig);
    }
    setConfig(config) {
        return this.http.put(this.baseUrlConfig, config);
    }
    getRegisters() {
        this.empresaLogada = window.localStorage.getItem('empresaLogada');
        const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
        console.log('getRegisters', this.empresaLogada);
        console.log('getRegisters', jsonData);
        if (this.empresaLogada === '1') {
            return this.http.get(jsonData[0].url + '/my-batches');
        }
        if (this.empresaLogada === '2') {
            return this.http.get(jsonData[1].url + '/my-batches');
        }
        if (this.empresaLogada === '3') {
            return this.http.get(jsonData[2].url + '/my-batches');
        }
    }
    getAllRegisters() {
        return this.http.get(`${this.apiUrl}/my-batches`);
    }
    getRegisterById(id) {
        this.empresaLogada = window.localStorage.getItem('empresaLogada');
        const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
        if (this.empresaLogada === '1') {
            return this.http.get(jsonData[0].url + '/register/' + id);
        }
        if (this.empresaLogada === '2') {
            return this.http.get(jsonData[1].url + '/register/' + id);
        }
        if (this.empresaLogada === '3') {
            return this.http.get(jsonData[2].url + '/register/' + id);
        }
    }
    getRegisterHistById(id) {
        this.empresaLogada = window.localStorage.getItem('empresaLogada');
        const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
        if (this.empresaLogada === '1') {
            return this.http.get(jsonData[0].url + '/register/history/' + id);
        }
        if (this.empresaLogada === '2') {
            return this.http.get(jsonData[1].url + '/register/history/' + id);
        }
        if (this.empresaLogada === '3') {
            return this.http.get(jsonData[2].url + '/register/history/' + id);
        }
    }
    createRegister(parceiro, register) {
        this.empresaLogada = window.localStorage.getItem('empresaLogada');
        const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
        console.log({ register });
        if (this.empresaLogada === '1') {
            if (parceiro === 'Decolar') {
                return this.http.post(jsonData[0].url + '/register/CN=PartyB,O=PartyB,L=Boston,C=US', register);
            }
            else {
                return this.http.post(jsonData[0].url + '/register/CN=PartyC,O=PartyC,L=Boston,C=US', register);
            }
        }
        if (this.empresaLogada === '2') {
            return this.http.post(jsonData[1].url + '/register/CN=PartyA,O=PartyA,L=Boston,C=US', register);
        }
        else {
            return this.http.post(jsonData[2].url + '/register/CN=PartyA,O=PartyA,L=Boston,C=US', register);
        }
    }
    updateRegister(parceiro, empresa, register) {
        if (empresa === '1') {
            if (parceiro === 'Decolar') {
                //todo mudar pra B
                return this.http.post(window.localStorage.getItem('apiBaseUrlA') + '/O=PartyB,L=New York,C=US', register);
            }
            else {
                return this.http.post(window.localStorage.getItem('apiBaseUrlA') + '/O=PartyC,L=Boston,C=US', register);
            }
        }
        if (empresa === '2') {
            return this.http.post(window.localStorage.getItem('apiBaseUrlB') + '/O=PartyA,L=London,C=GB', register);
        }
        if (empresa === '3') {
            return this.http.post(window.localStorage.getItem('apiBaseUrlC') + '/O=PartyA,L=London,C=GB', register);
        }
    }
    uploadFile(file) {
        const data = new FormData();
        data.append('file', file, file.name);
        data.append('name', 'Paulo Henrique');
        data.append('user', 'test');
        data.append('email', 'email@email.com');
        return this.http.post('http://34.125.56.61:3000/signDocument', data, {
            reportProgress: true,
        });
    }
    getSummary() {
        this.empresaLogada = window.localStorage.getItem('empresaLogada');
        const jsonData = JSON.parse(window.localStorage.getItem('parnerList'));
        console.log('getSummaryyyy');
        if (jsonData) {
            console.log('empresaLogada', this.empresaLogada);
            console.log('jsonData', jsonData);
            if (this.empresaLogada === '1') {
                return this.http.get(jsonData[0].url + '/dashboard/');
            }
            if (this.empresaLogada === '2') {
                return this.http.get(jsonData[1].url + '/dashboard/');
            }
            if (this.empresaLogada === '3') {
                return this.http.get(jsonData[2].url + '/dashboard/');
            }
        }
    }
}
ParnerService.ɵfac = function ParnerService_Factory(t) { return new (t || ParnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ParnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ParnerService, factory: ParnerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Otuk":
/*!*******************************************************!*\
  !*** ./src/app/@shared/services/auth/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@shared/model */ "z/WG");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database/database.service */ "mHhe");
/* harmony import */ var _partner_partner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partner/partner.service */ "Knzz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AuthService {
    constructor(db, http, parnerService) {
        this.db = db;
        this.http = http;
        this.parnerService = parnerService;
        this.env = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    /**
     * Auth user using jwt token
     */
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.env.url}auth${this.env.suffix}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((users) => {
                var _a;
                return (_a = users.filter((user) => (user.email === email && user.password === password))) === null || _a === void 0 ? void 0 : _a.shift();
            })).subscribe((user) => {
                if (user && user.email) {
                    this.parnerService.partnerList().subscribe((data) => {
                        localStorage.setItem('parnerList', JSON.stringify(data));
                    });
                    if (user.nome === "Localiza") {
                        window.localStorage.removeItem('empresaLogada');
                        window.localStorage.setItem('empresaLogada', '1');
                    }
                    if (user.nome === "Decolar") {
                        window.localStorage.removeItem('empresaLogada');
                        window.localStorage.setItem('empresaLogada', '2');
                    }
                    if (user.nome === "Latam") {
                        window.localStorage.removeItem('empresaLogada');
                        window.localStorage.setItem('empresaLogada', '3');
                    }
                    this.db.createUser(user);
                    resolve(true);
                }
                if (!user || !(user === null || user === void 0 ? void 0 : user.email)) {
                    reject(false);
                }
            }, () => {
                reject(false);
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_partner_partner_service__WEBPACK_IMPORTED_MODULE_5__["ParnerService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PkOs":
/*!******************************************************!*\
  !*** ./src/app/pages/servicos/servicos.component.ts ***!
  \******************************************************/
/*! exports provided: ServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosComponent", function() { return ServicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/services/auth/auth.service */ "Otuk");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pdftron/webviewer */ "18sX");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5__);










const _c0 = ["viewer"];
class ServicosComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.product = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].product;
    }
    ngAfterViewInit() {
        _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5___default()({
            path: '../assets/lib',
            initialDoc: '../assets/TermosAPP.pdf'
        }, this.viewerRef.nativeElement).then(instance => {
        });
    }
}
ServicosComponent.ɵfac = function ServicosComponent_Factory(t) { return new (t || ServicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ServicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicosComponent, selectors: [["app-minhas-obras"]], viewQuery: function ServicosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewerRef = _t.first);
    } }, decls: 5, vars: 0, consts: [[1, "page"], [1, "webviewer"], ["viewer", ""]], template: function ServicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".webviewer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  margin-top: -84px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXJ2aWNvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzZXJ2aWNvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWJ2aWV3ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiAtODRweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_events_loading_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@shared/events/loading.event */ "eAze");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.loading = false;
    }
    ngOnChanges(changes) {
        _shared_events_loading_event__WEBPACK_IMPORTED_MODULE_1__["LoadingEvent"].loading().subscribe(loading => {
            this.loading = loading;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "WBBN":
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/services/auth/auth.service */ "Otuk");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pdftron/webviewer */ "18sX");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5__);










const _c0 = ["viewer"];
class PortfolioComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.product = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].product;
    }
    ngAfterViewInit() {
        _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_5___default()({
            path: '../assets/lib',
            initialDoc: '../assets/PoliticadePrivacidadeAPP.pdf'
        }, this.viewerRef.nativeElement).then(instance => {
        });
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-partner"]], viewQuery: function PortfolioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewerRef = _t.first);
    } }, decls: 5, vars: 0, consts: [[1, "page"], [1, "webviewer"], ["viewer", ""]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".webviewer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  margin-top: -84px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYnZpZXdlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi10b3A6IC04NHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "X2ps":
/*!*********************************************************!*\
  !*** ./src/app/@shared/services/guard/guard.service.ts ***!
  \*********************************************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GuardService {
    canActivateChild() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return true;
        });
    }
}
GuardService.ɵfac = function GuardService_Factory(t) { return new (t || GuardService)(); };
GuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GuardService, factory: GuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _pages_main_main_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/main/main.module */ "82nU");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"],
            useValue: 'pt-BR'
        },
        {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: { floatLabel: 'always' }
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY_CODE"],
            useValue: 'BRL'
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: _env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _pages_main_main_module__WEBPACK_IMPORTED_MODULE_11__["MainModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _pages_main_main_module__WEBPACK_IMPORTED_MODULE_11__["MainModule"]] }); })();


/***/ }),

/***/ "eAze":
/*!*************************************************!*\
  !*** ./src/app/@shared/events/loading.event.ts ***!
  \*************************************************/
/*! exports provided: LoadingEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingEvent", function() { return LoadingEvent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

const LoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
const LoadingEvent = {
    loading() {
        return LoadingSubject.asObservable();
    },
    load(load) {
        LoadingSubject.next(load);
    }
};


/***/ }),

/***/ "mHhe":
/*!***************************************************************!*\
  !*** ./src/app/@shared/services/database/database.service.ts ***!
  \***************************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ "Texg");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DatabaseService extends dexie__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super('docchain');
        this.version(3).stores({
            user: 'id, email, nome, type, url',
            partner: 'id, cnpj, comissao, email, nome, url'
        });
        this.user = this.table('user');
        this.partner = this.table('partner');
    }
    createUser(user) {
        return this.transaction('rw', this.user, () => {
            this.user.clear();
            user.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
            this.user.add(user);
        });
    }
}
DatabaseService.ɵfac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(); };
DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DatabaseService, factory: DatabaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@shared/services/guard/guard.service */ "X2ps");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.module */ "99Un");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _pages_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/portfolio/portfolio.module */ "0rid");
/* harmony import */ var _pages_servicos_servicos_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/servicos/servicos.module */ "/+Su");
/* harmony import */ var _pages_contato_contato_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contato/contato.module */ "xdA7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: '',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivateChild: [_shared_services_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]],
        runGuardsAndResolvers: 'always',
        loadChildren: () => _pages_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"],
    },
    {
        path: 'home',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivateChild: [_shared_services_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]],
        runGuardsAndResolvers: 'always',
        loadChildren: () => _pages_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"],
    },
    {
        path: 'politicadeprivacidade',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivateChild: [_shared_services_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]],
        runGuardsAndResolvers: 'always',
        loadChildren: () => _pages_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_4__["PortfolioModule"],
    },
    {
        path: 'termos',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivateChild: [_shared_services_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]],
        runGuardsAndResolvers: 'always',
        loadChildren: () => _pages_servicos_servicos_module__WEBPACK_IMPORTED_MODULE_5__["ServicosModule"],
    },
    {
        path: 'termos1',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivateChild: [_shared_services_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]],
        runGuardsAndResolvers: 'always',
        loadChildren: () => _pages_contato_contato_module__WEBPACK_IMPORTED_MODULE_6__["ContatoModule"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xdA7":
/*!*************************************************!*\
  !*** ./src/app/pages/contato/contato.module.ts ***!
  \*************************************************/
/*! exports provided: ContatoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoModule", function() { return ContatoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contato_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato.component */ "JdIS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [{ component: _contato_component__WEBPACK_IMPORTED_MODULE_1__["ContatoComponent"], path: '' }];
class ContatoModule {
}
ContatoModule.ɵfac = function ContatoModule_Factory(t) { return new (t || ContatoModule)(); };
ContatoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ContatoModule });
ContatoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ContatoModule, { declarations: [_contato_component__WEBPACK_IMPORTED_MODULE_1__["ContatoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]] }); })();


/***/ }),

/***/ "z/WG":
/*!****************************************!*\
  !*** ./src/app/@shared/model/index.ts ***!
  \****************************************/
/*! exports provided: IConfig, IApiResponse, SignatureContact, IDash, IRegister, IUploadResponseDoc, IUploadRequestDoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConfig", function() { return IConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IApiResponse", function() { return IApiResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureContact", function() { return SignatureContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDash", function() { return IDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRegister", function() { return IRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IUploadResponseDoc", function() { return IUploadResponseDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IUploadRequestDoc", function() { return IUploadRequestDoc; });
class IConfig {
}
class IApiResponse {
}
class SignatureContact {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class IDash {
}
class IRegister {
}
/*
id: undefined
JSON.stringfy({})
*/
class IUploadResponseDoc {
}
class IUploadRequestDoc {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "ZAI4");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "AytR");
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map