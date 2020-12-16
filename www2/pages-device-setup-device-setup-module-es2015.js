(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-setup-device-setup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-setup/device-setup.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-setup/device-setup.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Device setup</h1>\n");

/***/ }),

/***/ "./src/app/pages/device-setup/device-setup.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/device-setup/device-setup.module.ts ***!
  \***********************************************************/
/*! exports provided: DeviceSetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSetupPageModule", function() { return DeviceSetupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _device_setup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-setup.page */ "./src/app/pages/device-setup/device-setup.page.ts");






let DeviceSetupPageModule = class DeviceSetupPageModule {
};
DeviceSetupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_device_setup_page__WEBPACK_IMPORTED_MODULE_5__["DeviceSetupPage"]]
    })
], DeviceSetupPageModule);



/***/ }),

/***/ "./src/app/pages/device-setup/device-setup.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/device-setup/device-setup.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (orientation: portrait) {\n  ion-content.background {\n    --background: url(\"/assets/stars.png\") var(--ion-color-primary) repeat-x left bottom / 40% auto;\n  }\n}\n@media screen and (orientation: landscape) {\n  ion-content.background {\n    --background: url(\"/assets/stars.png\") var(--ion-color-primary) repeat-x left bottom / 15% auto;\n  }\n}\nion-footer, ion-content {\n  --ion-background-color: var(--ion-color-primary);\n  background-color: var(--ion-color-secondary);\n}\nion-footer ion-title {\n  font-size: 1em;\n  padding: 0.2em;\n  text-align: center;\n}\nion-footer ion-title span {\n  font-weight: normal;\n}\n.campaign-thank-you-message {\n  margin-top: 25%;\n  padding: 25px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RqYW5sYWprb3ZpYy9Qcm9qZWN0cy9TZWJhc3RqYW5MYWprb3ZpYy9SZXZpZXcvbW9iaWxlLWFwcC9zcmMvYXBwL3BhZ2VzL2RldmljZS1zZXR1cC9kZXZpY2Utc2V0dXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXZpY2Utc2V0dXAvZGV2aWNlLXNldHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUtJO0lBQ0UsK0ZBQUE7RUNMSjtBQUNGO0FEU0E7RUFLSTtJQUNFLCtGQUFBO0VDWEo7QUFDRjtBRGdCQTtFQUNFLGdEQUFBO0VBQ0EsNENBQUE7QUNkRjtBRG1CRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNoQko7QURrQkk7RUFDRSxtQkFBQTtBQ2hCTjtBRHFCQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNsQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXZpY2Utc2V0dXAvZGV2aWNlLXNldHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIGlvbi1jb250ZW50IHtcbiAgICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYuYmFja2dyb3VuZCB7XG4gICAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9zdGFycy5wbmcnKSB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgcmVwZWF0LXggbGVmdCBib3R0b20gLyA0MCUgYXV0bztcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICBpb24tY29udGVudCB7XG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmLmJhY2tncm91bmQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc3RhcnMucG5nJykgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIHJlcGVhdC14IGxlZnQgYm90dG9tIC8gMTUlIGF1dG87XG4gICAgfVxuICB9XG59XG5cblxuaW9uLWZvb3RlciwgaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5cbmlvbi1mb290ZXIge1xuICBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG4gIH1cbn1cblxuLmNhbXBhaWduLXRoYW5rLXlvdS1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdGFycy5wbmdcIikgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIHJlcGVhdC14IGxlZnQgYm90dG9tIC8gNDAlIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdGFycy5wbmdcIikgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIHJlcGVhdC14IGxlZnQgYm90dG9tIC8gMTUlIGF1dG87XG4gIH1cbn1cbmlvbi1mb290ZXIsIGlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuaW9uLWZvb3RlciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1mb290ZXIgaW9uLXRpdGxlIHNwYW4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY2FtcGFpZ24tdGhhbmsteW91LW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/device-setup/device-setup.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/device-setup/device-setup.page.ts ***!
  \*********************************************************/
/*! exports provided: DeviceSetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSetupPage", function() { return DeviceSetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DeviceSetupPage = class DeviceSetupPage {
    constructor() {
    }
    ngOnInit() {
    }
};
DeviceSetupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./device-setup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-setup/device-setup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./device-setup.page.scss */ "./src/app/pages/device-setup/device-setup.page.scss")).default]
    })
], DeviceSetupPage);



/***/ })

}]);
//# sourceMappingURL=pages-device-setup-device-setup-module-es2015.js.map