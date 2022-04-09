(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/infinite/Devops/angular-quotes/src/main.ts */"zUnb");


/***/ }),

/***/ "5+ED":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quote */ "zCPz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote-form/quote-form.component */ "i76H");
/* harmony import */ var _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quote-detail/quote-detail.component */ "UUUp");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../highlight.directive */ "PeRm");






function QuoteComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r2 = ctx_r5.index;
    const quote_r1 = ctx_r5.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r2 + 1, ". \"", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, quote_r1.quote), "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("~", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, quote_r1.author), "");
} }
function QuoteComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r2 = ctx_r6.index;
    const quote_r1 = ctx_r6.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r2 + 1, ". \"", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, quote_r1.quote), "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("~", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, quote_r1.author), "");
} }
function QuoteComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuoteComponent_div_7_div_3_Template, 7, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, QuoteComponent_div_7_div_4_Template, 7, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-quote-detail", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleteQuote", function QuoteComponent_div_7_Template_app_quote_detail_deleteQuote_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r2 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.quoteDelete($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quote_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.highestScore() === quote_r1.upvotes && quote_r1.upvotes > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.highestScore() !== quote_r1.upvotes || quote_r1.upvotes == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("quote", quote_r1);
} }
class QuoteComponent {
    constructor() {
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_0__["Quote"]('If he wants to,he will do it.', 'kate vanili', 'kate', new Date(2022, 4, 4)),
            new _quote__WEBPACK_IMPORTED_MODULE_0__["Quote"]('You cant negotiate genuine desire.', 'vanili kate', 'vanili', new Date(2022, 4, 4))
        ];
    }
    quoteDelete(deleteQuote, index) {
        if (deleteQuote) {
            let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`);
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    }
    toggleDetails(index) {
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
    }
    highestScore() {
        this.most = 0;
        this.current = 0;
        for (this.count = 0; this.count < this.quotes.length; this.count++) {
            this.current = this.quotes[this.count].upvotes;
            if (this.current > this.most) {
                this.most = this.current;
            }
        }
        return this.most;
    }
    addNewQuote(newQuote) {
        newQuote.date = new Date(newQuote.date);
        this.quotes.push(newQuote);
    }
    ngOnInit() {
    }
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], decls: 10, vars: 1, consts: [[1, "navbar"], ["src", "./assets/logo.png", "width", "40px", "height", "40px", "alt", ""], ["id", "main", 1, "container"], [1, "row"], [1, "col-lg-6", "row-element-1"], ["class", "cards shadow1", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "row-element-2"], [3, "addQuote"], [1, "cards", "shadow1"], ["id", "quote"], ["id", "highlighted", "appHighlight", "", 4, "ngIf"], [4, "ngIf"], [3, "quote", "deleteQuote"], ["id", "highlighted", "appHighlight", ""]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Publish Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, QuoteComponent_div_7_Template, 6, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-quote-form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("addQuote", function QuoteComponent_Template_app_quote_form_addQuote_9_listener($event) { return ctx.addNewQuote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.quotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_3__["QuoteFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_4__["QuoteDetailComponent"], _highlight_directive__WEBPACK_IMPORTED_MODULE_5__["HighlightDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".row-element-1[_ngcontent-%COMP%] {\n    padding-right: 10%;\n}\n\n.row-element-2[_ngcontent-%COMP%] {\n    padding-right: 5%;\n}\n\n\n\nhtml[_ngcontent-%COMP%] {\n\tbox-sizing: border-box;\n\tfont-family: \"Nothing You Could Do\";\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n\tbox-sizing: inherit;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n\theight: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n\tbackground-color: #F1F1F1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.heading[_ngcontent-%COMP%] {\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n\tmargin: 2vmin 3vmin;\n\tcolor: #999;\n}\n\n.card-container[_ngcontent-%COMP%] {\n\tposition: relative;\n\twidth: 65vmin;\n\theight: 80vmin;\n\t\n}\n\n.card[_ngcontent-%COMP%] {\n\tposition: absolute;\n    padding: 20px;\n\ttop: 5px;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: darken(white, 2%);\n    border: 4px;\n\tborder-radius: 2px;\n\tbox-shadow: 2px 2px 5px rgba(#111, .35);\n\ttransition: transform .35s ease-out;\n\ttransform: translate(var(--x), var(--y)) scale(.35) rotate(var(--angle));\n\twill-change: transform;\n    margin-bottom: 10px;\n    border-radius: 10px;\n    border: 6px solid rgba ( 0, 0, 0, 1);\n\n\t&:hover {\n\t\ttransform: scale(1) rotate(0deg);\n\t\tz-index: 1;\n\n\t\t&:before {\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n\n.card[_ngcontent-%COMP%]:before {\n\tcontent: \"\";\n\tdisplay: block;\n\twidth: 90%;\n\theight: 80%;\n\tmargin: 5%;\n\tbackground: var(--image) center center no-repeat;\n\tbackground-size: cover;\n\tbox-shadow: inset 0 0 5px rgba(#222, .35);\n\tborder-radius: 2px;\n\tfilter: sepia(.2) brightness(.9) contrast(1.2);\n\ttransition: opacity .35s ease-out;\n\topacity: .5;\n\twill-change: opacity;\n}\n\n.card[_ngcontent-%COMP%]:after {\n\tdisplay: block;\n\tcontent: var(--caption);\n\tfont-weight: 500;\n\tcolor: #555;\n\tfont-size: 3vmin;\n\topacity: .75;\n\ttext-align: center;\n}\n\nhr[_ngcontent-%COMP%] {\n    background-color: #fdee19;;\n    border:1px solid ;\n}\n\n@font-face {\n    font-family: 'dosis-bold';\n    src: url('Dosis-Bold.ttf') format(\"truetype\");\n}\n\n#highlighted[_ngcontent-%COMP%] {\n    font-family: 'dosis-bold';\n}\n\nbutton[_ngcontent-%COMP%] {\n    font-size: 24px;\n    border: 2px solid;\n    border-radius: 15px;\n}\n\n.shadow1[_ngcontent-%COMP%] {\n    box-shadow: 0 5px 10px rgba(255, 255, 255, .05), 0 15px 40px rgba(25, 255, 255, .2);\n}\n\n#main[_ngcontent-%COMP%] {\n    padding-top: 100px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 100%;\n    z-index: 1;\n    color: #eef0f2;\n    background-color: #11262e;\n    margin: 0px;\n    padding-left: 50px;\n    box-shadow: 0 15px 40px rgba(0, 0, 0, .2);\n\tborder-radius: 40px;\n\tbox-shadow: 3px 3px 20px #ff3352;\n\tborder-top-left-radius: 0px;\n\tborder-bottom-right-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFDSDtDQUNDLHNCQUFzQjtDQUN0QixtQ0FBbUM7QUFDcEM7O0FBRUE7OztDQUdDLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsU0FBUztDQUNULFFBQVE7Q0FDUixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixjQUFjOztBQUVmOztBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsYUFBYTtDQUNoQixRQUFRO0NBQ1IsT0FBTztDQUNQLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUNBQW1DO0lBQ2hDLFdBQVc7Q0FDZCxrQkFBa0I7Q0FDbEIsdUNBQXVDO0NBQ3ZDLG1DQUFtQztDQUNuQyx3RUFBd0U7Q0FDeEUsc0JBQXNCO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0NBQW9DOztDQUV2QztFQUNDLGdDQUFnQztFQUNoQyxVQUFVOztFQUVWO0dBQ0MsVUFBVTtFQUNYO0NBQ0Q7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsVUFBVTtDQUNWLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsZ0RBQWdEO0NBQ2hELHNCQUFzQjtDQUN0Qix5Q0FBeUM7Q0FDekMsa0JBQWtCO0NBQ2xCLDhDQUE4QztDQUM5QyxpQ0FBaUM7Q0FDakMsV0FBVztDQUNYLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCx1QkFBdUI7Q0FDdkIsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNkNBQTBEO0FBQzlEOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtRkFBbUY7QUFDdkY7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUNBQXlDO0NBQzVDLG1CQUFtQjtDQUNuQixnQ0FBZ0M7Q0FDaEMsMkJBQTJCO0NBQzNCLCtCQUErQjtBQUNoQyIsImZpbGUiOiJxdW90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1lbGVtZW50LTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cblxuLnJvdy1lbGVtZW50LTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuLypcbi5jYXJkcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZGVlMTk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYmEgKCAwLCAwLCAwLCAxKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzM1OTk7XG59ICovXG5odG1sIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Zm9udC1mYW1pbHk6IFwiTm90aGluZyBZb3UgQ291bGQgRG9cIjtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG5cdGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDA7XG5cdHJpZ2h0OiAwO1xuXHRtYXJnaW46IDJ2bWluIDN2bWluO1xuXHRjb2xvcjogIzk5OTtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogNjV2bWluO1xuXHRoZWlnaHQ6IDgwdm1pbjtcblx0XG59XG5cbi5jYXJkIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cdHRvcDogNXB4O1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4od2hpdGUsIDIlKTtcbiAgICBib3JkZXI6IDRweDtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKCMxMTEsIC4zNSk7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzVzIGVhc2Utb3V0O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS14KSwgdmFyKC0teSkpIHNjYWxlKC4zNSkgcm90YXRlKHZhcigtLWFuZ2xlKSk7XG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYmEgKCAwLCAwLCAwLCAxKTtcblxuXHQmOmhvdmVyIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcblx0XHR6LWluZGV4OiAxO1xuXG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0b3BhY2l0eTogMTtcblx0XHR9XG5cdH1cbn1cblxuLmNhcmQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiA5MCU7XG5cdGhlaWdodDogODAlO1xuXHRtYXJnaW46IDUlO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pbWFnZSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiYSgjMjIyLCAuMzUpO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGZpbHRlcjogc2VwaWEoLjIpIGJyaWdodG5lc3MoLjkpIGNvbnRyYXN0KDEuMik7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cyBlYXNlLW91dDtcblx0b3BhY2l0eTogLjU7XG5cdHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xufVxuXG4uY2FyZDphZnRlciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb250ZW50OiB2YXIoLS1jYXB0aW9uKTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM1NTU7XG5cdGZvbnQtc2l6ZTogM3ZtaW47XG5cdG9wYWNpdHk6IC43NTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ociB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZWUxOTs7XG4gICAgYm9yZGVyOjFweCBzb2xpZCA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnZG9zaXMtYm9sZCc7XG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvRG9zaXMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbiNoaWdobGlnaHRlZCB7XG4gICAgZm9udC1mYW1pbHk6ICdkb3Npcy1ib2xkJztcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnNoYWRvdzEge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpLCAwIDE1cHggNDBweCByZ2JhKDI1LCAyNTUsIDI1NSwgLjIpO1xufVxuXG4jbWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogI2VlZjBmMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyNjJlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDAsIDAsIDAsIC4yKTtcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcblx0Ym94LXNoYWRvdzogM3B4IDNweCAyMHB4ICNmZjMzNTI7XG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbn0iXX0= */"] });


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
const environment = {
    production: false
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

/***/ "Nn8z":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DateCountPipe {
    transform(value) {
        let today = new Date();
        let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime);
        const secondsInDay = 86400;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = dateDifferenceSeconds / secondsInDay;
        if (dateCounter >= 1 && value < todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    }
}
DateCountPipe.ɵfac = function DateCountPipe_Factory(t) { return new (t || DateCountPipe)(); };
DateCountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateCount", type: DateCountPipe, pure: true });


/***/ }),

/***/ "PeRm":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HighlightDirective {
    constructor(elem) {
        elem.nativeElement.style.color = "#EAC435";
    }
}
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightDirective, selectors: [["", "appHighlight", ""]] });


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
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote/quote.component */ "5+ED");


class AppComponent {
    constructor() {
        this.title = 'Quotes';
        document.body.style.background = '#0d1117';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-quote");
    } }, directives: [_quote_quote_component__WEBPACK_IMPORTED_MODULE_1__["QuoteComponent"]], styles: ["@font-face {\n        font-family: 'dosis';\n        src: url('Dosis-Regular.ttf') format(\"truetype\");\n    }\n    \n    *[_ngcontent-%COMP%] {\n        font-family: 'dosis';\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #EEF0F2;\n        text-align: justify;\n        background-color: #07ce9c;\n        height: 100%;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJO1FBQ0ksb0JBQW9CO1FBQ3BCLGdEQUEwRDtJQUM5RDs7SUFFQTtRQUNJLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixZQUFZO0lBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ2Rvc2lzJztcbiAgICAgICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvRG9zaXMtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgfVxuICAgIFxuICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogJ2Rvc2lzJztcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogI0VFRjBGMjtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3Y2U5YztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH0iXX0= */"] });


/***/ }),

/***/ "UUUp":
/*!********************************************************!*\
  !*** ./src/app/quote-detail/quote-detail.component.ts ***!
  \********************************************************/
/*! exports provided: QuoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailComponent", function() { return QuoteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-count.pipe */ "Nn8z");




function QuoteDetailComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.quote.score, " Point");
} }
function QuoteDetailComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.quote.score, " Points");
} }
class QuoteDetailComponent {
    constructor() {
        this.deleteQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    quoteDelete(toDelete) {
        this.deleteQuote.emit(toDelete);
    }
    upvote() {
        this.quote.upvotes++;
        this.quote.score++;
    }
    downvote() {
        this.quote.downvotes++;
        this.quote.score--;
    }
    ngOnInit() {
    }
}
QuoteDetailComponent.ɵfac = function QuoteDetailComponent_Factory(t) { return new (t || QuoteDetailComponent)(); };
QuoteDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteDetailComponent, selectors: [["app-quote-detail"]], inputs: { quote: "quote" }, outputs: { deleteQuote: "deleteQuote" }, decls: 18, vars: 11, consts: [["role", "group ", "aria-label", "Basic example ", 1, "btn-group"], ["id", "vote", "type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], ["id", "point", "type", "button", "class", "btn btn-outline-light", 4, "ngIf"], ["id", "vote", "type", "bitton", 1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], ["id", "point", "type", "button", 1, "btn", "btn-outline-light"]], template: function QuoteDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "dateCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailComponent_Template_button_click_8_listener() { return ctx.upvote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuoteDetailComponent_button_10_Template, 2, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuoteDetailComponent_button_11_Template, 2, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailComponent_Template_button_click_12_listener() { return ctx.downvote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailComponent_Template_button_click_16_listener() { return ctx.quoteDelete(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remove Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Published by ", ctx.quote.user, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.quote.date), ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx.quote.date), " days ago.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.quote.upvotes, " Upvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote.score === 1 || ctx.quote.score === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote.score != 1 && ctx.quote.score != -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.quote.downvotes, " Downvote");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _date_count_pipe__WEBPACK_IMPORTED_MODULE_2__["DateCountPipe"]], styles: [".score[_ngcontent-%COMP%] {\n    color: #00A6ED;\n}\n\nbutton[_ngcontent-%COMP%] {\n    font-size: 18px;\n    border-radius: 25px;\n    font-family: 'dosis-bold';\n    border: 2px solid #eef0f2;\n    border-radius: 40px;\n    box-shadow: 3px 3px 20px #ff3352;\n    border-top-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n#point[_ngcontent-%COMP%]:hover, #point[_ngcontent-%COMP%]:focus {\n    background-color: transparent;\n    color: #eef0f2;\n    box-shadow: none;\n}\n\n#vote[_ngcontent-%COMP%]:focus {\n    box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQiwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicXVvdGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmUge1xuICAgIGNvbG9yOiAjMDBBNkVEO1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnZG9zaXMtYm9sZCc7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2VlZjBmMjtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCAjZmYzMzUyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuXG4jcG9pbnQ6aG92ZXIsXG4jcG9pbnQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZWVmMGYyO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiN2b3RlOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote/quote.component */ "5+ED");
/* harmony import */ var _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quote-detail/quote-detail.component */ "UUUp");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-count.pipe */ "Nn8z");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight.directive */ "PeRm");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "i76H");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"],
        _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_4__["QuoteDetailComponent"],
        _date_count_pipe__WEBPACK_IMPORTED_MODULE_5__["DateCountPipe"],
        _highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"],
        _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__["QuoteFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();


/***/ }),

/***/ "i76H":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "zCPz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function QuoteFormComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteFormComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteFormComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class QuoteFormComponent {
    constructor() {
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]("", "", "", new Date());
    }
    submitQuote(get) {
        // console.log(get.value);
        var formQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](get.value.quotes, get.value.author, get.value.user, new Date());
        this.addQuote.emit(formQuote);
        get.reset();
    }
    ngOnInit() {
    }
}
QuoteFormComponent.ɵfac = function QuoteFormComponent_Factory(t) { return new (t || QuoteFormComponent)(); };
QuoteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteFormComponent, selectors: [["app-quote-form"]], outputs: { addQuote: "addQuote" }, decls: 29, vars: 16, consts: [["id", "form", 1, "container-fluid"], [1, "text-center"], [3, "ngSubmit"], ["quoteForm", "ngForm"], [1, "form-group"], ["for", "quotes"], ["required", "", "rows", "4", "id", "quotes", "name", "quotes", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["quotes", "ngModel"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "author"], ["type", "text", "required", "", "id", "author", "name", "author", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["author", "ngModel"], ["for", "user"], ["type", "text", "required", "", "id", "user", "name", "user", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["user", "ngModel"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]], template: function QuoteFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function QuoteFormComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.submitQuote(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Write The Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.newQuote.quote = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteFormComponent_span_12_Template, 3, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.newQuote.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, QuoteFormComponent_span_19_Template, 3, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Published by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_input_ngModelChange_23_listener($event) { return ctx.newQuote.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QuoteFormComponent_span_26_Template, 3, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.quote)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (_r1.touched || _r1.dirty) && !_r1.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.author)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, (_r3.touched || _r3.dirty) && !_r3.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.user)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (_r5.touched || _r5.dirty) && !_r5.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["$ruler[_ngcontent-%COMP%]:   16px[_ngcontent-%COMP%];\n$color-red[_ngcontent-%COMP%]:   #AE1100[_ngcontent-%COMP%];\n$color-bg[_ngcontent-%COMP%]:   #EBECF0[_ngcontent-%COMP%];\n$color-shadow[_ngcontent-%COMP%]:   #BABECC[_ngcontent-%COMP%];\n$color-white[_ngcontent-%COMP%]:   #FFF[_ngcontent-%COMP%];\n.form-control[_ngcontent-%COMP%] {\n        background-color: #073599;\n        color: #fdee19;\n        border-color: #fdee19;\n        border-radius: 10px;\n    }\nhr[_ngcontent-%COMP%] {\n        background-color: #073599;\n    }\n#form[_ngcontent-%COMP%] {\n        padding: $ruler;\n  width: $ruler*20;\n  margin: 0 auto;\n  border-radius: 40px;\n  box-shadow: 3px 3px 20px #ff3352;\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n    }\n@media only screen and (max-width: 768px) {\n        #form[_ngcontent-%COMP%] {\n            position: absolute;\n            width: 100%;\n        }\n    }\np[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\nbutton[_ngcontent-%COMP%] {\n        border: 0;\n        outline: 0;\n        font-size: $ruler;\n        border-radius: $ruler*20;\n        padding: $ruler;\n        background-color:$color-bg;\n        text-shadow: 1px 1px 0 $color-white;\n        font-family: 'dosis-bold';\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBRWQ7UUFDSSx5QkFBeUI7UUFDekIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixtQkFBbUI7SUFDdkI7QUFFQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUVBO1FBQ0ksZUFBZTtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLCtCQUErQjtJQUM3QjtBQUVBO1FBQ0k7WUFDSSxrQkFBa0I7WUFDbEIsV0FBVztRQUNmO0lBQ0o7QUFFQTs7UUFFSSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMseUJBQXlCO0lBQzdCIiwiZmlsZSI6InF1b3RlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiRydWxlcjogMTZweDtcbiRjb2xvci1yZWQ6ICNBRTExMDA7XG4kY29sb3ItYmc6ICNFQkVDRjA7XG4kY29sb3Itc2hhZG93OiAjQkFCRUNDO1xuJGNvbG9yLXdoaXRlOiAjRkZGO1xuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzM1OTk7XG4gICAgICAgIGNvbG9yOiAjZmRlZTE5O1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZGVlMTk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIGhyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MzU5OTtcbiAgICB9XG4gICAgXG4gICAgI2Zvcm0ge1xuICAgICAgICBwYWRkaW5nOiAkcnVsZXI7XG4gIHdpZHRoOiAkcnVsZXIqMjA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggI2ZmMzM1MjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICNmb3JtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHAsXG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgZm9udC1zaXplOiAkcnVsZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgICAgICAgcGFkZGluZzogJHJ1bGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1iZztcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAkY29sb3Itd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnZG9zaXMtYm9sZCc7XG4gICAgfVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zCPz":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
class Quote {
    constructor(quote, author, user, date) {
        this.quote = quote;
        this.author = author;
        this.user = user;
        this.date = date;
        this.showDetails = false;
        this.upvotes = 0;
        this.downvotes = 0;
        this.score = 0;
    }
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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