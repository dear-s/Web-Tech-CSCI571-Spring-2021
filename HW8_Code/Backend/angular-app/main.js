(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/WQZ":
/*!**************************************************************!*\
  !*** ./src/app/fourth-carousel/fourth-carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: FourthCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourthCarouselComponent", function() { return FourthCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function FourthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FourthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r7.onSelect(obj_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r6.title);
} }
function FourthCarouselComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FourthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template, 6, 5, "div", 4);
} if (rf & 2) {
    const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r2);
} }
function FourthCarouselComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FourthCarouselComponent_ngb_carousel_2_1_ng_template_0_Template, 1, 1, "ng-template", 3);
} }
function FourthCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FourthCarouselComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.array2d);
} }
class FourthCarouselComponent {
    constructor(http, router, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.array2d = [];
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/topMovies")
            .subscribe((data) => {
            console.log("data from fourth: ", data);
            this.displayData(data);
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                // i phone viewport
                // console.log("small view port");
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                // larger screens
                // console.log("does not match")
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    displayData(data) {
        this.json_data_list = data;
        this.get_array = this.json_data_list.top_rated_movies_section;
        // divide into 6 cards per slide
        // console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
        var count = 0;
        var new_array = [];
        // for desktop screens
        if (screen.width > 600) {
            for (let arr of this.get_array) {
                if (count == 6) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        // for mobile screens
        else {
            for (let arr of this.get_array) {
                if (count == 1) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
    }
    onSelect(img) {
        this.router.navigate(['/watch/movie', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.title;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "movie";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
}
FourthCarouselComponent.ɵfac = function FourthCarouselComponent_Factory(t) { return new (t || FourthCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
FourthCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FourthCarouselComponent, selectors: [["app-fourth-carousel"]], decls: 3, vars: 1, consts: [["class", "check_focus", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function FourthCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FourthCarouselComponent_ngb_carousel_2_Template, 2, 3, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array2d);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 1% 10%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 5%;\r\n    height: 410px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 8%;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.5%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 96%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: -14px;\r\n\twidth: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: -11px;\r\n\twidth: 89%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91cnRoLWNhcm91c2VsL2ZvdXJ0aC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7RUFDRSwwQkFBMEIsRUFBRSxjQUFjO0FBQzVDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztDQUVDLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsbUVBQW1FO0NBQ25FLFdBQVc7O0FBRVo7O0FBQ0E7O0NBRUMsVUFBVTtBQUNYOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsZUFBZTtDQUNmLFVBQVU7Q0FDVixTQUFTO0NBQ1QsbUJBQW1CO0FBQ3BCOztBQUNBOzs7Ozs7Ozs7O0dBVUc7O0FBSUg7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFFckIsZ0JBQWdCO0FBQ2xCOztBQUlBO0NBQ0MsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2ZvdXJ0aC1jYXJvdXNlbC9mb3VydGgtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDElIDEwJTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxMTAsIDY2LCAwKTtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9we1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxubmdiLWNhcm91c2Vse1xyXG4gICAgbWFyZ2luOiAwIDUlO1xyXG4gICAgaGVpZ2h0OiA0MTBweDtcclxufVxyXG5cclxuXHJcbi56b29tIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjA1czsgLyogQW5pbWF0aW9uICovXHJcbn1cclxuXHJcbi56b29tOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG59XHJcblxyXG4uaHZyYm94LFxyXG4uaHZyYm94ICoge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmh2cmJveCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmh2cmJveCBpbWcge1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uaHZyYm94IC5odnJib3gtbGF5ZXJfYm90dG9tIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaHZyYm94IC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHQvKiBvcGFjaXR5OiAwOyAqL1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0ycHg7XHJcblx0LyogbGVmdDogLTExcHg7ICovXHJcblx0Ym90dG9tOiAtM3B4O1xyXG5cdC8qIHdpZHRoOiA4OSU7ICovXHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssIHJnYmEoMjU1LCAwLCAwLCAwKSAxMzAlKTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRcclxufVxyXG4uaHZyYm94OmhvdmVyIC5odnJib3gtbGF5ZXJfdG9wLFxyXG4uaHZyYm94LmFjdGl2ZSAuaHZyYm94LWxheWVyX3RvcCB7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG4uaHZyYm94IC5odnJib3gtdGV4dCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAyNnB4O1xyXG5cdGJvdHRvbTogaW5oZXJpdDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcbi8qIC5odnJib3ggLmh2cmJveC10ZXh0X21vYmlsZSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTc5LCAxNzksIDE3OSk7IFxyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE3OSwgMTc5LCAxNzksIDAuNyk7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdHBhZGRpbmctdG9wOiAycHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uaHZyYm94LmFjdGl2ZSAuaHZyYm94LXRleHRfbW9iaWxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufSAqL1xyXG5cclxuXHJcblxyXG4uY2hlY2tfZm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNoZWNrX2ZvY3VzOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmRlc2t0b3BfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDYlO1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLm1vYmlsZV9jbGFzc3tcclxuXHRtYXJnaW4tbGVmdDogMTAlO1xyXG5cdG1hcmdpbi10b3A6IDglO1xyXG59XHJcblxyXG4uZGVza193aWR0aHtcclxuXHR3aWR0aDogMTUuNSU7XHJcbn1cclxuXHJcbi5tb2Jfd2lkdGh7XHJcblx0d2lkdGg6IDk2JTtcclxufVxyXG5cclxuLmhvdmVyZWRfcHJvcHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdGxlZnQ6IC0xNHB4O1xyXG5cdHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5ub25ob3ZlcmVke1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0bGVmdDogLTExcHg7XHJcblx0d2lkdGg6IDg5JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FourthCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fourth-carousel',
                templateUrl: './fourth-carousel.component.html',
                styleUrls: ['./fourth-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sanya\Desktop\code\new_angular_app_medium\frontend\angular-app\src\main.ts */"zUnb");


/***/ }),

/***/ "6AZv":
/*!****************************************************!*\
  !*** ./src/app/tv-details/tv-details.component.ts ***!
  \****************************************************/
/*! exports provided: TvDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvDetailsComponent", function() { return TvDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tv-cast/tv-cast.component */ "DStt");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










function TvDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const obj_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r9.onSelect(obj_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r8.name);
} }
function TvDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_div_0_Template, 6, 5, "div", 27);
} if (rf & 2) {
    const arr_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r4);
} }
function TvDetailsComponent_div_48_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_Template, 1, 1, "ng-template", 26);
} }
function TvDetailsComponent_div_48_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvDetailsComponent_div_48_ngb_carousel_3_1_Template, 1, 0, undefined, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r2.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.array2d);
} }
function TvDetailsComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvDetailsComponent_div_48_ngb_carousel_3_Template, 2, 3, "ngb-carousel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.array2d);
} }
function TvDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const obj_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r19.onSelect(obj_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r18.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r18.name);
} }
function TvDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_div_0_Template, 6, 5, "div", 27);
} if (rf & 2) {
    const arr_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r14);
} }
function TvDetailsComponent_div_49_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_Template, 1, 1, "ng-template", 26);
} }
function TvDetailsComponent_div_49_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvDetailsComponent_div_49_ngb_carousel_3_1_Template, 1, 0, undefined, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r12.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.array2d2);
} }
function TvDetailsComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Similar TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvDetailsComponent_div_49_ngb_carousel_3_Template, 2, 3, "ngb-carousel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.array2d2);
} }
const _c0 = function (a0, a1) { return { "alert-success": a0, "alert-danger": a1, "alert-dismissible": true }; };
class TvDetailsComponent {
    constructor(http, router, route, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.array2d = [];
        this.array2d2 = [];
        // grab from localStorage
        this.added = false;
        this.buttonName = 'Add to Watchlist';
        this.alert_text = "";
        this.isVisible = false;
        // add to watchList - information is already in the localStorage
        // "watchlist" - will store only id's - sequence
        this.fetch_list_string = localStorage.watchlist;
        this.fetch_list_json = JSON.parse(this.fetch_list_string);
        this.watch_list = this.fetch_list_json.list;
    }
    toggle() {
        this.added = !this.added;
        //change the name of the button
        if (this.watch_list.includes(this.global_id) == false) {
            this.buttonName = "Remove from Watchlist";
            this.alert_text = "Added to watchlist.";
            this.watch_list.push(this.global_id);
        }
        else {
            this.buttonName = "Add to Watchlist";
            this.alert_text = "Removed from watchlist.";
            var index = this.watch_list.indexOf(this.global_id);
            if (index > -1) {
                this.watch_list.splice(index, 1);
            }
        }
        this.fetch_list_json.list = this.watch_list;
        var fetch_back_string = JSON.stringify(this.fetch_list_json);
        localStorage.setItem("watchlist", fetch_back_string);
        // make the alert box visible for 5 seconds or manually close
        if (this.isVisible) {
            return;
        }
        this.isVisible = true;
        setTimeout(() => this.isVisible = false, 5000);
    }
    closeIt() {
        this.isVisible = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number         
            this.global_id = +params['id'];
            if (this.watch_list.includes(this.global_id) == true) {
                this.buttonName = "Remove from Watchlist";
            }
            else {
                this.buttonName = "Add to Watchlist";
            }
            this.http.get(`http://localhost:3080/detailsPage2/${this.id}`)
                .subscribe((data) => {
                console.log("data from movie detailsPage2.js: ", data);
                this.displayData(data);
            });
            this.http.get(`http://localhost:3080/recTv/${this.id}`)
                .subscribe((data) => {
                console.log("data from movie recTv.js: ", data);
                this.json_recTv = data;
                // recommended tv shows carousel
                this.get_array = this.json_recTv.recTv;
                var count = 0;
                var new_array = [];
                this.array2d = [];
                // for desktop screens
                if (screen.width > 600) {
                    for (let arr of this.get_array) {
                        if (count == 6) {
                            this.array2d.push(new_array);
                            new_array = [arr];
                            count = 1;
                        }
                        else {
                            new_array.push(arr);
                            count += 1;
                        }
                    }
                    if (new_array.length > 0) {
                        this.array2d.push(new_array);
                    }
                }
                // for mobile screens
                else {
                    for (let arr of this.get_array) {
                        if (count == 1) {
                            this.array2d.push(new_array);
                            new_array = [arr];
                            count = 1;
                        }
                        else {
                            new_array.push(arr);
                            count += 1;
                        }
                    }
                    if (new_array.length > 0) {
                        this.array2d.push(new_array);
                    }
                }
                // console.log("array2d: ", this.array2d);
                // similar tv carousel
                this.get_array2 = this.json_recTv.simTv;
                var count = 0;
                var new_array2 = [];
                this.array2d2 = [];
                // for desktop screens
                if (screen.width > 600) {
                    for (let arr of this.get_array2) {
                        if (count == 6) {
                            this.array2d2.push(new_array2);
                            new_array2 = [arr];
                            count = 1;
                        }
                        else {
                            new_array2.push(arr);
                            count += 1;
                        }
                    }
                    if (new_array2.length > 0) {
                        this.array2d2.push(new_array2);
                    }
                }
                // for mobile screens
                else {
                    for (let arr of this.get_array2) {
                        if (count == 1) {
                            this.array2d2.push(new_array2);
                            new_array2 = [arr];
                            count = 1;
                        }
                        else {
                            new_array2.push(arr);
                            count += 1;
                        }
                    }
                    if (new_array2.length > 0) {
                        this.array2d2.push(new_array2);
                    }
                }
                // console.log("array2d2: ", this.array2d2);
            });
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    displayData(data) {
        this.json_data_list = data;
    }
    onSelect(img) {
        this.router.navigate(['/watch/tv', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.name;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "tv";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
}
TvDetailsComponent.ɵfac = function TvDetailsComponent_Factory(t) { return new (t || TvDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
TvDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvDetailsComponent, selectors: [["app-tv-details"]], decls: 50, vars: 22, consts: [[1, "content_body", 2, "margin-bottom", "7em"], [1, "row", "mx-n4", "mx-sm-0"], [1, "col-sm-8"], [1, "embed-responsive", "embed-responsive-16by9"], ["suggestedQuality", "highres", 1, "embed-responsive-item", 2, "float", "left", 3, "videoId"], [1, "col-sm-4", 2, "float", "left"], [1, "mt-4", "mt-sm-0"], [1, "light_color"], ["type", "button", "id", "bt", 1, "btn", "btn-primary", "btn-lg", 3, "click"], ["role", "alert", 1, "alert", "fade", "alert_box", "alert-dismissible", 3, "ngClass"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "row", "description", "mx-0", "mx-n2", "mx-sm-4"], [2, "width", "100%"], [1, "light_color", 2, "text-align", "justify"], [1, "share", "mx-0", "mx-n2", "mx-sm-4"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", "fa-2x", 2, "color", "#007bff"], ["target", "_blank", 1, "fb-share-button", 3, "href"], [1, "fa", "fa-facebook-square", "fa-2x", 2, "color", "#007bff"], ["class", "mt-sm-5 ml-sm-5 mr-sm-5 pb-5", 4, "ngIf"], [1, "mt-sm-5", "ml-sm-5", "mr-sm-5", "pb-5"], [1, "my-5"], ["class", "check_focus", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function TvDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "youtube-player", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Genres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Spoken Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvDetailsComponent_Template_button_click_25_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvDetailsComponent_Template_button_click_30_listener() { return ctx.closeIt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-tv-cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TvDetailsComponent_div_48_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TvDetailsComponent_div_49_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx.json_data_list.tv_video_endpoint[0].key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.tv_details_endpoint[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.tv_details_endpoint[0].tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.json_data_list.tv_details_endpoint[0].first_air_date.slice(0, 4), " | \u2605 ", ctx.json_data_list.tv_details_endpoint[0].vote_average, " | ", ctx.json_data_list.tv_details_endpoint[0].episode_run_time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.tv_details_endpoint[0].genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.tv_details_endpoint[0].spoken_languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx.alert_text == "Added to watchlist.", ctx.alert_text == "Removed from watchlist."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.alert_text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.tv_details_endpoint[0].overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx.json_data_list.tv_details_endpoint[0].title, "%0A&url=", ctx.json_data_list.tv_video_endpoint[0].create_video_link, "%0A&hashtags=USC,CSCI571,FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.json_data_list.tv_video_endpoint[0].create_video_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_recTv.recTv.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_recTv.simTv.length > 0);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_6__["TvCastComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"]], styles: [".visible[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: translateY(1.25rem);\r\n}\r\n\r\n.content_body[_ngcontent-%COMP%]{\r\n  margin-left: 14%;\r\n  margin-right: 14%;\r\n  margin-top: 4em;\r\n}\r\n\r\n.title_and_all[_ngcontent-%COMP%]{\r\n  margin-left: 4em\r\n}\r\n\r\n.youtubeTitle_div[_ngcontent-%COMP%]{\r\n  height: -webkit-max-content;\r\n  height: max-content;\r\n}\r\n\r\n.youtube_div[_ngcontent-%COMP%]{\r\n  width: 10em;\r\n  height: 7em;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  \r\n}\r\n\r\n.share[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n  \r\n}\r\n\r\n.fa-twitter[_ngcontent-%COMP%]{\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 -6%;\r\n    height: 330px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.light_color[_ngcontent-%COMP%]{\r\n\tcolor: rgba(255, 255, 255, 0.616);\r\n}\r\n\r\n\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 0;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.6%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 88%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: 14px;\r\n    width: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: 14px;\r\n    width: 87%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHYtZGV0YWlscy90di1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBSUEsa0NBQWtDOztBQUVsQztJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBR0E7RUFDRSwwQkFBMEIsRUFBRSxjQUFjO0FBQzVDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztDQUVDLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1FQUFtRTtDQUNuRSxXQUFXOztBQUVaOztBQUNBOztDQUVDLFVBQVU7QUFDWDs7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGVBQWU7Q0FDZixVQUFVO0NBQ1YsU0FBUztDQUNULG1CQUFtQjtBQUNwQjs7QUFDQTs7Ozs7Ozs7OztHQVVHOztBQUlIO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBRXJCLGdCQUFnQjtBQUNsQjs7QUFJQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFHQSxvQkFBb0I7O0FBRXBCO0NBQ0MsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFVBQVU7SUFDUCxVQUFVO0FBQ2Q7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsVUFBVTtJQUNQLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3R2LWRldGFpbHMvdHYtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpc2libGUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuMjVyZW0pO1xyXG59XHJcblxyXG4uY29udGVudF9ib2R5e1xyXG4gIG1hcmdpbi1sZWZ0OiAxNCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNCU7XHJcbiAgbWFyZ2luLXRvcDogNGVtO1xyXG59XHJcblxyXG4udGl0bGVfYW5kX2FsbHtcclxuICBtYXJnaW4tbGVmdDogNGVtXHJcbn1cclxuXHJcbi55b3V0dWJlVGl0bGVfZGl2e1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi55b3V0dWJlX2RpdntcclxuICB3aWR0aDogMTBlbTtcclxuICBoZWlnaHQ6IDdlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLyogcGFkZGluZy1sZWZ0OiAzMHB4OyAqL1xyXG59XHJcblxyXG4uc2hhcmV7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDE1cHg7ICovXHJcbn1cclxuXHJcbi5mYS10d2l0dGVye1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogcmVjb21tZW5kZWQgbW92aWVzIC0gY2Fyb3VzZWwgKi9cclxuXHJcbi5jYXJke1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NSwgMTEwLCA2NiwgMCk7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbHtcclxuICAgIG1hcmdpbjogMCAtNiU7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG59XHJcblxyXG5cclxuLnpvb20ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMDVzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLnpvb206aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbn1cclxuXHJcbi5odnJib3gsXHJcbi5odnJib3ggKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaHZyYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG4uaHZyYm94IGltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl9ib3R0b20ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl90b3Age1xyXG5cdC8qIG9wYWNpdHk6IDA7ICovXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTJweDtcclxuXHQvKiBsZWZ0OiAxNHB4OyAqL1xyXG5cdC8qIHJpZ2h0OiAwOyAqL1xyXG5cdGJvdHRvbTogLTNweDtcclxuXHQvKiB3aWR0aDogODclOyAqL1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCByZ2JhKDI1NSwgMCwgMCwgMCkgMTMwJSk7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0XHJcbn1cclxuLmh2cmJveDpob3ZlciAuaHZyYm94LWxheWVyX3RvcCxcclxuLmh2cmJveC5hY3RpdmUgLmh2cmJveC1sYXllcl90b3Age1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLmh2cmJveCAuaHZyYm94LXRleHQge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMjZweDtcclxuXHRib3R0b206IGluaGVyaXQ7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG4vKiAuaHZyYm94IC5odnJib3gtdGV4dF9tb2JpbGUge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE3OSwgMTc5LCAxNzkpOyBcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNzksIDE3OSwgMTc5LCAwLjcpO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHRwYWRkaW5nLXRvcDogMnB4O1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmh2cmJveC5hY3RpdmUgLmh2cmJveC10ZXh0X21vYmlsZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuLmNoZWNrX2ZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGVja19mb2N1czpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi5saWdodF9jb2xvcntcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxNik7XHJcbn1cclxuXHJcblxyXG4vKiBjYXJvdXNlbHMgLSBjc3MgKi9cclxuXHJcbi5kZXNrdG9wX2NsYXNze1xyXG5cdG1hcmdpbi1sZWZ0OiA2JTtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tb2JpbGVfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDEwJTtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uZGVza193aWR0aHtcclxuXHR3aWR0aDogMTUuNiU7XHJcbn1cclxuXHJcbi5tb2Jfd2lkdGh7XHJcblx0d2lkdGg6IDg4JTtcclxufVxyXG5cclxuLmhvdmVyZWRfcHJvcHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdGxlZnQ6IDE0cHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubm9uaG92ZXJlZHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGxlZnQ6IDE0cHg7XHJcbiAgICB3aWR0aDogODclO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tv-details',
                templateUrl: './tv-details.component.html',
                styleUrls: ['./tv-details.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _first_carousel_first_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../first-carousel/first-carousel.component */ "is1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _third_carousel_third_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../third-carousel/third-carousel.component */ "mVkU");
/* harmony import */ var _fourth_carousel_fourth_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fourth-carousel/fourth-carousel.component */ "/WQZ");
/* harmony import */ var _fifth_carousel_fifth_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fifth-carousel/fifth-carousel.component */ "VLNH");
/* harmony import */ var _sixth_carousel_sixth_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sixth-carousel/sixth-carousel.component */ "oXbR");
/* harmony import */ var _seventh_carousel_seventh_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../seventh-carousel/seventh-carousel.component */ "uaHH");
/* harmony import */ var _eighth_carousel_eighth_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../eighth-carousel/eighth-carousel.component */ "Qmks");
/* harmony import */ var _second_carousel_second_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../second-carousel/second-carousel.component */ "cGyC");












function HomeComponent_app_second_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-second-carousel");
} }
class HomeComponent {
    constructor(http) {
        this.http = http;
        this.fetch_string1 = localStorage.cont_watching;
        this.fetch_json1 = JSON.parse(this.fetch_string1);
        this.get_id_array = this.fetch_json1.id_array;
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/home_page")
            .subscribe((data) => {
            console.log("data: ", data);
            this.displayData(data);
        });
    }
    displayData(data) {
        this.json_data_list = data;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 1, consts: [[4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-first-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_second_carousel_1_Template, 1, 0, "app-second-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-third-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-fourth-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-fifth-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sixth-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-seventh-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-eighth-carousel");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.get_id_array.length > 0);
    } }, directives: [_first_carousel_first_carousel_component__WEBPACK_IMPORTED_MODULE_2__["FirstCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _third_carousel_third_carousel_component__WEBPACK_IMPORTED_MODULE_4__["ThirdCarouselComponent"], _fourth_carousel_fourth_carousel_component__WEBPACK_IMPORTED_MODULE_5__["FourthCarouselComponent"], _fifth_carousel_fifth_carousel_component__WEBPACK_IMPORTED_MODULE_6__["FifthCarouselComponent"], _sixth_carousel_sixth_carousel_component__WEBPACK_IMPORTED_MODULE_7__["SixthCarouselComponent"], _seventh_carousel_seventh_carousel_component__WEBPACK_IMPORTED_MODULE_8__["SeventhCarouselComponent"], _eighth_carousel_eighth_carousel_component__WEBPACK_IMPORTED_MODULE_9__["EighthCarouselComponent"], _second_carousel_second_carousel_component__WEBPACK_IMPORTED_MODULE_10__["SecondCarouselComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

/***/ "DStt":
/*!**********************************************!*\
  !*** ./src/app/tv-cast/tv-cast.component.ts ***!
  \**********************************************/
/*! exports provided: TvCastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCastComponent", function() { return TvCastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0, a1) { return { "col_align": a0, "col_align_mobile": a1 }; };
function TvCastComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvCastComponent_div_0_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx_r7.openVerticallyCentered(_r1, obj_r5.char_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r4.large_screen, ctx_r4.small_screen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r5.full_pp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r5.character);
} }
function TvCastComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvCastComponent_div_0_div_4_Template, 11, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.json_data_list.tv_cast_endpoint);
} }
function TvCastComponent_ng_template_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r10.json_pdata.pDob, "");
} }
function TvCastComponent_ng_template_1_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r11.json_pdata.pPlace, "");
} }
function TvCastComponent_ng_template_1_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r12.json_pdata.pGender, "");
} }
function TvCastComponent_ng_template_1_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r13.json_pdata.pHomepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.json_pdata.pHomepage);
} }
function TvCastComponent_ng_template_1_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", ctx_r14.json_pdata.pKnown_for, "");
} }
function TvCastComponent_ng_template_1_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r15.json_pdata.pOther_names, "");
} }
function TvCastComponent_ng_template_1_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://imdb.com/name/", ctx_r16.json_pdata.pImdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvCastComponent_ng_template_1_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://instagram.com/", ctx_r17.json_pdata.pInstagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvCastComponent_ng_template_1_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/", ctx_r18.json_pdata.pTwitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvCastComponent_ng_template_1_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://facebook.com/", ctx_r19.json_pdata.pFacebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvCastComponent_ng_template_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.json_pdata.pBiography);
} }
function TvCastComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvCastComponent_ng_template_1_Template_button_click_4_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TvCastComponent_ng_template_1_p_12_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TvCastComponent_ng_template_1_p_13_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TvCastComponent_ng_template_1_p_14_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TvCastComponent_ng_template_1_p_15_Template, 4, 2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TvCastComponent_ng_template_1_p_16_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TvCastComponent_ng_template_1_p_17_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TvCastComponent_ng_template_1_a_19_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TvCastComponent_ng_template_1_a_20_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TvCastComponent_ng_template_1_a_21_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TvCastComponent_ng_template_1_a_22_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TvCastComponent_ng_template_1_div_23_Template, 5, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.json_pdata.pName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.json_pdata.pImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.cast_image());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.select_cols());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pDob != null && ctx_r2.json_pdata.pDob.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pPlace != null && ctx_r2.json_pdata.pPlace.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pGender != null && ctx_r2.json_pdata.pGender.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pHomepage != null && ctx_r2.json_pdata.pHomepage.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pKnown_for != null && ctx_r2.json_pdata.pKnown_for.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pOther_names != null && ctx_r2.json_pdata.pOther_names.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pImdb_id != null && ctx_r2.json_pdata.pImdb_id.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pInstagram_id != null && ctx_r2.json_pdata.pInstagram_id.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pTwitter_id != null && ctx_r2.json_pdata.pTwitter_id.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pFacebook_id != null && ctx_r2.json_pdata.pFacebook_id.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pBiography != null && ctx_r2.json_pdata.pBiography.length);
} }
function TvCastComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Read the rest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r23.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r22.rev_avatar());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", obj_r23.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r22.rate_span());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r23.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Written by ", obj_r23.author, " on ", obj_r23.created_date, ", ", obj_r23.created_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", obj_r23.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", obj_r23.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvCastComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TvCastComponent_div_3_div_5_Template, 19, 10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.json_reviews.review_list.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.json_reviews.review_list);
} }
class TvCastComponent {
    constructor(http, router, route, modalService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number         
            this.http.get(`http://localhost:3080/detailsPage2/${this.id}`)
                .subscribe((data) => {
                console.log("data from movie detailsPage.js: ", data);
                this.displayData(data);
            });
            // let's get - movie reviews endpoint
            this.http.get(`http://localhost:3080/tvReviews/${this.id}`)
                .subscribe((data) => {
                console.log("data from movie movieReviews.js: ", data);
                this.json_reviews = data;
            });
        });
        // console.log(screen.width);
        if (screen.width > 600) {
            // add col-2
            this.large_screen = true;
            this.small_screen = false;
        }
        else {
            this.large_screen = false;
            this.small_screen = true;
        }
    }
    displayData(data) {
        this.json_data_list = data;
    }
    noIndicators() {
        return {
            no_indicators_cast: this.small_screen
        };
    }
    cast_image() {
        return {
            cast_image_size_large: this.large_screen,
            cast_image_size_small: this.small_screen
        };
    }
    select_cols() {
        return {
            col_9: this.large_screen,
            col_sm_9: this.small_screen
        };
    }
    rev_avatar() {
        return {
            rev_image_desk: this.large_screen,
            rev_image_mob: this.small_screen
        };
    }
    rate_span() {
        return {
            rate_span_desk: this.large_screen,
            rate_span_mob: this.small_screen
        };
    }
    // modal function
    openVerticallyCentered(content, p_id) {
        // this.modalService.open(content, { centered: true });
        this.modalService.open(content, { size: 'lg', centered: true });
        // can we extract id of the person
        // whom we clicked
        this.get_person_id = p_id;
        this.http.get(`http://localhost:3080/personDetails/${this.get_person_id}`)
            .subscribe((data) => {
            console.log("data from personDetails.js: ", data);
            this.json_pdata = data;
        });
    }
    openScrollableContent(longContent) {
        this.modalService.open(longContent, { scrollable: true });
    }
}
TvCastComponent.ɵfac = function TvCastComponent_Factory(t) { return new (t || TvCastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
TvCastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvCastComponent, selectors: [["app-tv-cast"]], decls: 4, vars: 2, consts: [["class", "cast_component", 4, "ngIf"], ["style", "margin: auto;"], ["content", ""], ["class", "reviews_component ml-0", 4, "ngIf"], [1, "cast_component"], [1, "ml-sm-2"], [1, "card-group", "card-group-scroll", "px-sm-3", "py-sm-4", 3, "ngClass"], ["class", "borders card", "style", "border-top-right-radius: 20px; border-top-left-radius: 20px; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "borders", "card", 2, "border-top-right-radius", "20px", "border-top-left-radius", "20px", "border-bottom-right-radius", "20px", "border-bottom-left-radius", "20px", 3, "ngClass", "click"], [1, "card-img-top", 2, "border-top-right-radius", "20px", "border-top-left-radius", "20px", 3, "src"], [1, "card-body", 2, "text-align", "center", "margin", "0", "padding", "10px", "bottom", "0", "position", "absolute", "width", "100%", "background-color", "white", "border-bottom-left-radius", "20px", "border-bottom-right-radius", "20px"], [1, "card-text", "black-text", 2, "margin", "0"], [1, "black-text", 2, "margin", "0"], [1, "modal-content"], [1, "modal-header", 2, "color", "black"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "color", "black", "max-height", "88vh", "overflow-y", "auto"], [1, "row"], [1, "col-2"], ["alt", "", 3, "src", "ngClass"], [3, "ngClass"], ["class", "mod_entries", 4, "ngIf"], [1, "media_icons"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "row", "style", "margin: 0px; margin-top: 20px;", 4, "ngIf"], [1, "mod_entries"], ["target", "_blank", 3, "href"], ["ngbTooltip", "Visit IMDB", "tooltipClass", "my-custom-class", 1, "fa", "fa-imdb", "fa-2x", "dada", 2, "color", "rgb(196, 196, 67)"], ["ngbTooltip", "Visit Instagram", "tooltipClass", "my-custom-class", 1, "fa", "fa-instagram", "fa-2x", "dada", 2, "color", "rgb(69, 24, 105)"], ["ngbTooltip", "Visit Twitter", "tooltipClass", "my-custom-class", 1, "fa", "fa-twitter", "fa-2x", "dada", 2, "color", "#1da1f2"], ["ngbTooltip", "Visit Facebook", "tooltipClass", "my-custom-class", 1, "fa", "fa-facebook", "fa-2x", "dada", 2, "color", "#1da1f2"], [1, "row", 2, "margin", "0px", "margin-top", "20px"], [2, "width", "100%"], [1, "reviews_component", "ml-0"], [1, "ml-sm-3"], ["id", "review_count"], ["class", "card mx-sm-3", "style", "margin-bottom: 20px; border-radius: 12px;", 4, "ngFor", "ngForOf"], [1, "card", "mx-sm-3", 2, "margin-bottom", "20px", "border-radius", "12px"], [1, "card-body", "black-text"], [1, "col-sm-3"], [3, "src", "ngClass"], [1, "col-sm-8", 2, "text-align", "justify"], [1, "rev_author_line"], [1, "star_class"], [1, "rating_subs"], [1, "written_by"], [1, "content-ellipses"], ["target", "_blank", 1, "anchor_read", 3, "href"]], template: function TvCastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvCastComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvCastComponent_ng_template_1_Template, 24, 15, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvCastComponent_div_3_Template, 6, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_data_list.tv_cast_endpoint.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_reviews.review_list.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]], styles: [".cast_component{\r\n    margin-top: 70px;\r\n}\r\n\r\n\r\n.black-text{\r\n    color: black;\r\n}\r\n\r\n\r\n.card{\r\n    border: unset;\r\n    margin-right: 20px;\r\n    padding: 0;\r\n    \r\n}\r\n\r\n\r\n.card-group.card-group-scroll {\r\n    overflow-x: auto;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n\r\n/* \r\n.card-group.card-group-scroll > .card {\r\n    flex-basis: 30%;\r\n} */\r\n\r\n\r\n/* \r\n.card-group.card-group-scroll{\r\n    overflow-x: auto;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.card-group.card-group-scroll > .card{\r\n    flex-basis: 35%;\r\n} */\r\n\r\n\r\n.card-group{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.col_align{\r\n    max-width: 15.666667%;\r\n    height: 26em;\r\n}\r\n\r\n\r\n.card-group.card-group-scroll > .col_align{\r\n    flex-basis: 30%;\r\n}\r\n\r\n\r\n.col_align_mobile{\r\n    height: 23em;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    flex-basis: 48%;\r\n}\r\n\r\n\r\n.reviews_component{\r\n    margin-top: 40px;\r\n}\r\n\r\n\r\n.rev_image_desk{\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    margin: 11px 50px 20px 66px;\r\n}\r\n\r\n\r\n.rev_image_mob{\r\n    width: 75px;\r\n    height: 75px;\r\n    border-radius: 50%;\r\n    margin: 0 0 15px 15px;\r\n}\r\n\r\n\r\n/* modal styles */\r\n\r\n\r\n.dark-modal .modal-content {\r\n      background-color: #292b2c;\r\n      color: white;\r\n    }\r\n\r\n\r\n.dark-modal .close {\r\n      color: white;\r\n    }\r\n\r\n\r\n.light-blue-backdrop {\r\n      background-color: #5cb3fd;\r\n    }\r\n\r\n\r\n.black_font_color{\r\n    color: black;\r\n}\r\n\r\n\r\n.large_screen_modal{\r\n    max-width: 42%;\r\n}\r\n\r\n\r\n.small_screen_modal{\r\n\r\n}\r\n\r\n\r\n.col-9{\r\n    margin-left: 4em;\r\n    max-width: 70%;\r\n}\r\n\r\n\r\n.col_sm_9{\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n\r\n\r\n.mod_entries{\r\n    margin: 0;\r\n}\r\n\r\n\r\n.media_icons{\r\n    padding-top: 40px;\r\n}\r\n\r\n\r\n.dada{\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n/* for tooltip */\r\n\r\n\r\n.my-custom-class .tooltip-inner {\r\n      background-color: white;\r\n      border: 0.2px solid grey;\r\n      color: black;\r\n      font-size: 125%;\r\n    }\r\n\r\n\r\n.my-custom-class .arrow::before {\r\n      border-top-color: black;\r\n    }\r\n\r\n\r\n#review_count{\r\n    color: rgba(255, 255, 255, 0.281);\r\n    margin-left: 20px;\r\n}\r\n\r\n\r\n.rate_span_desk{\r\n    background-color: black;\r\n    color: white;\r\n    padding: 5px 11px 3px 10px;\r\n    border-radius: 20px;\r\n    margin-left: 30px;\r\n}\r\n\r\n\r\n.rate_span_mob{\r\n    background-color: black;\r\n    color: white;\r\n    padding: 0px 0px 0px 10px;\r\n    border-radius: 20px;\r\n    margin-right: 6em;\r\n    display: block;\r\n    margin-top: 15px;\r\n}\r\n\r\n\r\n.star_class{\r\n    font-size: 35px;\r\n}\r\n\r\n\r\n.rating_subs{\r\n    font-size: 20px;\r\n    vertical-align: 4px;\r\n    padding-left: 7px;\r\n}\r\n\r\n\r\n.content-ellipses{\r\n    width:100%;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    -webkit-box-orient: vertical;\r\n    background:#fff;\r\n    /* position:absolute; */\r\n}\r\n\r\n\r\n.anchor_read{\r\n    color: darkblue;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n.anchor_read:hover{\r\n    color: darkblue;\r\n}\r\n\r\n\r\n.written_by{\r\n    color: grey;\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.no_indicators_cast{\r\n    margin-left: -5em;\r\n    margin-right: -3.6em;\r\n    padding-left: 5em;\r\n}\r\n\r\n\r\n/* add this to mobile version */\r\n\r\n\r\n.modal_styling{\r\n    height: -webkit-fill-available;\r\n    margin: 0.5em;\r\n}\r\n\r\n\r\n.cast_image_size_large{\r\n    width: 150px;\r\n}\r\n\r\n\r\n.cast_image_size_small{\r\n    width: 23em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHYtY2FzdC90di1jYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7O0FBRWQ7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7OztHQUdHOzs7QUFFSDs7Ozs7Ozs7R0FRRzs7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFJQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7OztBQUVBLGlCQUFpQjs7O0FBQ2pCO01BQ00seUJBQXlCO01BQ3pCLFlBQVk7SUFDZDs7O0FBQ0E7TUFDRSxZQUFZO0lBQ2Q7OztBQUNBO01BQ0UseUJBQXlCO0lBQzNCOzs7QUFFSjtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7O0FBRUE7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFNBQVM7QUFDYjs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQSxnQkFBZ0I7OztBQUNoQjtNQUNNLHVCQUF1QjtNQUN2Qix3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLGVBQWU7SUFDakI7OztBQUNBO01BQ0UsdUJBQXVCO0lBQ3pCOzs7QUFHSjtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7OztBQUVBLCtCQUErQjs7O0FBQy9CO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC90di1jYXN0L3R2LWNhc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXN0X2NvbXBvbmVudHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuXHJcblxyXG4uYmxhY2stdGV4dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBib3JkZXI6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmNhcmQtZ3JvdXAuY2FyZC1ncm91cC1zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcbi8qIFxyXG4uY2FyZC1ncm91cC5jYXJkLWdyb3VwLXNjcm9sbCA+IC5jYXJkIHtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxufSAqL1xyXG5cclxuLyogXHJcbi5jYXJkLWdyb3VwLmNhcmQtZ3JvdXAtc2Nyb2xse1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4uY2FyZC1ncm91cC5jYXJkLWdyb3VwLXNjcm9sbCA+IC5jYXJke1xyXG4gICAgZmxleC1iYXNpczogMzUlO1xyXG59ICovXHJcblxyXG4uY2FyZC1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi5jb2xfYWxpZ257XHJcbiAgICBtYXgtd2lkdGg6IDE1LjY2NjY2NyU7XHJcbiAgICBoZWlnaHQ6IDI2ZW07XHJcbn1cclxuXHJcbi5jYXJkLWdyb3VwLmNhcmQtZ3JvdXAtc2Nyb2xsID4gLmNvbF9hbGlnbntcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxufVxyXG5cclxuLmNvbF9hbGlnbl9tb2JpbGV7XHJcbiAgICBoZWlnaHQ6IDIzZW07XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZsZXgtYmFzaXM6IDQ4JTtcclxufVxyXG5cclxuXHJcbi5yZXZpZXdzX2NvbXBvbmVudHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnJldl9pbWFnZV9kZXNre1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMTFweCA1MHB4IDIwcHggNjZweDtcclxufVxyXG5cclxuLnJldl9pbWFnZV9tb2J7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMCAwIDE1cHggMTVweDtcclxufVxyXG5cclxuLyogbW9kYWwgc3R5bGVzICovXHJcbi5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmIyYztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xyXG4gICAgfVxyXG5cclxuLmJsYWNrX2ZvbnRfY29sb3J7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sYXJnZV9zY3JlZW5fbW9kYWx7XHJcbiAgICBtYXgtd2lkdGg6IDQyJTtcclxufVxyXG5cclxuLnNtYWxsX3NjcmVlbl9tb2RhbHtcclxuXHJcbn1cclxuXHJcbi5jb2wtOXtcclxuICAgIG1hcmdpbi1sZWZ0OiA0ZW07XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmNvbF9zbV85e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5cclxuLm1vZF9lbnRyaWVze1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWVkaWFfaWNvbnN7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLmRhZGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIGZvciB0b29sdGlwICovXHJcbi5teS1jdXN0b20tY2xhc3MgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAwLjJweCBzb2xpZCBncmV5O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTI1JTtcclxuICAgIH1cclxuICAgIC5teS1jdXN0b20tY2xhc3MgLmFycm93OjpiZWZvcmUge1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcblxyXG4jcmV2aWV3X2NvdW50e1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yYXRlX3NwYW5fZGVza3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4IDExcHggM3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5yYXRlX3NwYW5fbW9ie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uc3Rhcl9jbGFzc3tcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuLnJhdGluZ19zdWJze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG59XHJcblxyXG4uY29udGVudC1lbGxpcHNlc3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgLyogcG9zaXRpb246YWJzb2x1dGU7ICovXHJcbn1cclxuXHJcbi5hbmNob3JfcmVhZHtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYW5jaG9yX3JlYWQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbi53cml0dGVuX2J5e1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLm5vX2luZGljYXRvcnNfY2FzdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMy42ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVlbTtcclxufVxyXG5cclxuLyogYWRkIHRoaXMgdG8gbW9iaWxlIHZlcnNpb24gKi9cclxuLm1vZGFsX3N0eWxpbmd7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG59XHJcblxyXG5cclxuLmNhc3RfaW1hZ2Vfc2l6ZV9sYXJnZXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmNhc3RfaW1hZ2Vfc2l6ZV9zbWFsbHtcclxuICAgIHdpZHRoOiAyM2VtO1xyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvCastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tv-cast',
                templateUrl: './tv-cast.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styleUrls: ['./tv-cast.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "NjZ3":
/*!****************************************************!*\
  !*** ./src/app/movie-cast/movie-cast.component.ts ***!
  \****************************************************/
/*! exports provided: MovieCastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCastComponent", function() { return MovieCastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0, a1) { return { "col_align": a0, "col_align_mobile": a1 }; };
function MovieCastComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCastComponent_div_0_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx_r7.openVerticallyCentered(_r1, obj_r5.char_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r4.large_screen, ctx_r4.small_screen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r5.full_pp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r5.character);
} }
function MovieCastComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieCastComponent_div_0_div_4_Template, 11, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.json_data_list.movie_cast_endpoint);
} }
function MovieCastComponent_ng_template_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r10.json_pdata.pDob, "");
} }
function MovieCastComponent_ng_template_1_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r11.json_pdata.pPlace, "");
} }
function MovieCastComponent_ng_template_1_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r12.json_pdata.pGender, "");
} }
function MovieCastComponent_ng_template_1_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r13.json_pdata.pHomepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.json_pdata.pHomepage);
} }
function MovieCastComponent_ng_template_1_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", ctx_r14.json_pdata.pKnown_for, "");
} }
function MovieCastComponent_ng_template_1_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r15.json_pdata.pOther_names, "");
} }
function MovieCastComponent_ng_template_1_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://imdb.com/name/", ctx_r16.json_pdata.pImdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieCastComponent_ng_template_1_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://instagram.com/", ctx_r17.json_pdata.pInstagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieCastComponent_ng_template_1_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/", ctx_r18.json_pdata.pTwitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieCastComponent_ng_template_1_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://facebook.com/", ctx_r19.json_pdata.pFacebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieCastComponent_ng_template_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.json_pdata.pBiography);
} }
function MovieCastComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCastComponent_ng_template_1_Template_button_click_4_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MovieCastComponent_ng_template_1_p_12_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MovieCastComponent_ng_template_1_p_13_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MovieCastComponent_ng_template_1_p_14_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MovieCastComponent_ng_template_1_p_15_Template, 4, 2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MovieCastComponent_ng_template_1_p_16_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MovieCastComponent_ng_template_1_p_17_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MovieCastComponent_ng_template_1_a_19_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MovieCastComponent_ng_template_1_a_20_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MovieCastComponent_ng_template_1_a_21_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MovieCastComponent_ng_template_1_a_22_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MovieCastComponent_ng_template_1_div_23_Template, 5, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.json_pdata.pName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.json_pdata.pImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.cast_image());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.select_cols());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pDob != null && ctx_r2.json_pdata.pDob.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pPlace != null && ctx_r2.json_pdata.pPlace.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pGender != null && ctx_r2.json_pdata.pGender.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pHomepage != null && ctx_r2.json_pdata.pHomepage.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pKnown_for != null && ctx_r2.json_pdata.pKnown_for.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pOther_names != null && ctx_r2.json_pdata.pOther_names.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pImdb_id != null && ctx_r2.json_pdata.pImdb_id.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pInstagram_id != null && ctx_r2.json_pdata.pInstagram_id.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pTwitter_id != null && ctx_r2.json_pdata.pTwitter_id.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pFacebook_id != null && ctx_r2.json_pdata.pFacebook_id.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.json_pdata.pBiography != null && ctx_r2.json_pdata.pBiography.length);
} }
function MovieCastComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Read the rest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r23.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r22.rev_avatar());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", obj_r23.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r22.rate_span());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r23.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Written by ", obj_r23.author, " on ", obj_r23.created_date, ", ", obj_r23.created_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", obj_r23.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", obj_r23.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieCastComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovieCastComponent_div_3_div_5_Template, 19, 10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.json_reviews.review_list.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.json_reviews.review_list);
} }
class MovieCastComponent {
    constructor(http, router, route, modalService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number         
            this.http.get(`http://localhost:3080/detailsPage/${this.id}`)
                .subscribe((data) => {
                console.log("data from movie detailsPage.js: ", data);
                this.displayData(data);
            });
            // let's get - movie reviews endpoint
            this.http.get(`http://localhost:3080/movieReviews/${this.id}`)
                .subscribe((data) => {
                console.log("data from movie movieReviews.js: ", data);
                this.json_reviews = data;
            });
        });
        // console.log(screen.width);
        if (screen.width > 600) {
            // add col-2
            this.large_screen = true;
            this.small_screen = false;
        }
        else {
            this.large_screen = false;
            this.small_screen = true;
        }
    }
    displayData(data) {
        this.json_data_list = data;
    }
    noIndicators() {
        return {
            no_indicators_cast: this.small_screen
        };
    }
    cast_image() {
        return {
            cast_image_size_large: this.large_screen,
            cast_image_size_small: this.small_screen
        };
    }
    select_cols() {
        return {
            col_9: this.large_screen,
            col_sm_9: this.small_screen
        };
    }
    rev_avatar() {
        return {
            rev_image_desk: this.large_screen,
            rev_image_mob: this.small_screen
        };
    }
    rate_span() {
        return {
            rate_span_desk: this.large_screen,
            rate_span_mob: this.small_screen
        };
    }
    // modal functions
    openVerticallyCentered(content, p_id) {
        // this.modalService.open(content, { centered: true });
        this.modalService.open(content, { size: 'lg', centered: true });
        // can we extract id of the person
        // whom we clicked
        this.get_person_id = p_id;
        this.http.get(`http://localhost:3080/personDetails/${this.get_person_id}`)
            .subscribe((data) => {
            console.log("data from personDetails.js: ", data);
            this.json_pdata = data;
        });
    }
    openScrollableContent(longContent) {
        this.modalService.open(longContent, { scrollable: true });
    }
}
MovieCastComponent.ɵfac = function MovieCastComponent_Factory(t) { return new (t || MovieCastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
MovieCastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieCastComponent, selectors: [["app-movie-cast"]], decls: 4, vars: 2, consts: [["class", "cast_component", 4, "ngIf"], ["style", "margin: auto;"], ["content", ""], ["class", "reviews_component ml-0", 4, "ngIf"], [1, "cast_component"], [1, "ml-sm-2"], [1, "card-group", "card-group-scroll", "px-sm-3", "py-sm-4", 3, "ngClass"], ["class", "borders card", "style", "border-top-right-radius: 20px; border-top-left-radius: 20px; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "borders", "card", 2, "border-top-right-radius", "20px", "border-top-left-radius", "20px", "border-bottom-right-radius", "20px", "border-bottom-left-radius", "20px", 3, "ngClass", "click"], [1, "card-img-top", 2, "border-top-right-radius", "20px", "border-top-left-radius", "20px", 3, "src"], [1, "card-body", 2, "text-align", "center", "margin", "0", "padding", "10px", "bottom", "0", "position", "absolute", "width", "100%", "background-color", "white", "border-bottom-left-radius", "20px", "border-bottom-right-radius", "20px"], [1, "card-text", "black-text", 2, "margin", "0"], [1, "black-text", 2, "margin", "0"], [1, "modal-content"], [1, "modal-header", 2, "color", "black"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "color", "black", "max-height", "88vh", "overflow-y", "auto"], [1, "row"], [1, "col-2"], ["alt", "", 3, "src", "ngClass"], [3, "ngClass"], ["class", "mod_entries", 4, "ngIf"], [1, "media_icons"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "row", "style", "margin: 0px; margin-top: 20px;", 4, "ngIf"], [1, "mod_entries"], ["target", "_blank", 3, "href"], ["ngbTooltip", "Visit IMDB", "tooltipClass", "my-custom-class", 1, "fa", "fa-imdb", "fa-2x", "dada", 2, "color", "rgb(196, 196, 67)"], ["ngbTooltip", "Visit Instagram", "tooltipClass", "my-custom-class", 1, "fa", "fa-instagram", "fa-2x", "dada", 2, "color", "rgb(69, 24, 105)"], ["ngbTooltip", "Visit Twitter", "tooltipClass", "my-custom-class", 1, "fa", "fa-twitter", "fa-2x", "dada", 2, "color", "#1da1f2"], ["ngbTooltip", "Visit Facebook", "tooltipClass", "my-custom-class", 1, "fa", "fa-facebook", "fa-2x", "dada", 2, "color", "#1da1f2"], [1, "row", 2, "margin", "0px", "margin-top", "20px"], [2, "width", "100%"], [1, "reviews_component", "ml-0"], [1, "ml-sm-3"], ["id", "review_count"], ["class", "card mx-sm-3", "style", "margin-bottom: 20px; border-radius: 12px;", 4, "ngFor", "ngForOf"], [1, "card", "mx-sm-3", 2, "margin-bottom", "20px", "border-radius", "12px"], [1, "card-body", "black-text"], [1, "col-sm-3"], [3, "src", "ngClass"], [1, "col-sm-8", 2, "text-align", "justify"], [1, "rev_author_line"], [1, "star_class"], [1, "rating_subs"], [1, "written_by"], [1, "content-ellipses"], ["target", "_blank", 1, "anchor_read", 3, "href"]], template: function MovieCastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieCastComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieCastComponent_ng_template_1_Template, 24, 15, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieCastComponent_div_3_Template, 6, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_data_list.movie_cast_endpoint.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_reviews.review_list.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]], styles: [".cast_component{\r\n    margin-top: 70px;\r\n}\r\n\r\n\r\n.black-text{\r\n    color: black;\r\n}\r\n\r\n\r\n.card{\r\n    border: unset;\r\n    margin-right: 20px;\r\n    padding: 0;\r\n    \r\n}\r\n\r\n\r\n.card-group.card-group-scroll {\r\n    overflow-x: auto;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n\r\n/* .card-group.card-group-scroll > .card {\r\n    \r\n} */\r\n\r\n\r\n/* .card-group.card-group-scroll{\r\n    overflow-x: auto;\r\n    flex-wrap: nowrap;\r\n} */\r\n\r\n\r\n/* .card-group.card-group-scroll > .card{\r\n    flex-basis: 30%;\r\n} */\r\n\r\n\r\n.card-group {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n}\r\n\r\n\r\n.card-group{\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.col_align{\r\n    max-width: 15.666667%;\r\n    height: 26em;\r\n}\r\n\r\n\r\n.card-group.card-group-scroll > .col_align{\r\n    flex-basis: 30%;\r\n}\r\n\r\n\r\n.col_align_mobile{\r\n    height: 23em;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    flex-basis: 48%;\r\n}\r\n\r\n\r\n.reviews_component{\r\n    margin-top: 40px;\r\n    /* margin-left: 28px; */\r\n}\r\n\r\n\r\n.rev_image_desk{\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    margin: 11px 50px 20px 66px;\r\n}\r\n\r\n\r\n.rev_image_mob{\r\n    width: 75px;\r\n    height: 75px;\r\n    border-radius: 50%;\r\n    margin: 0 0 15px 15px;\r\n}\r\n\r\n\r\n/* modal styles */\r\n\r\n\r\n.dark-modal .modal-content {\r\n      background-color: #292b2c;\r\n      color: white;\r\n    }\r\n\r\n\r\n.dark-modal .close {\r\n      color: white;\r\n    }\r\n\r\n\r\n.light-blue-backdrop {\r\n      background-color: #5cb3fd;\r\n    }\r\n\r\n\r\n.black_font_color{\r\n    color: black;\r\n}\r\n\r\n\r\n.large_screen_modal{\r\n    max-width: 42%;\r\n}\r\n\r\n\r\n.small_screen_modal{\r\n\r\n}\r\n\r\n\r\n.col_9{\r\n    margin-left: 4em;\r\n    max-width: 70%;\r\n}\r\n\r\n\r\n.col_sm_9{\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n\r\n\r\n.mod_entries{\r\n    margin: 0;\r\n}\r\n\r\n\r\n.media_icons{\r\n    padding-top: 40px;\r\n}\r\n\r\n\r\n.dada{\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n/* for tooltip */\r\n\r\n\r\n.my-custom-class .tooltip-inner {\r\n      background-color: white;\r\n      border: 0.2px solid grey;\r\n      color: black;\r\n      font-size: 125%;\r\n    }\r\n\r\n\r\n.my-custom-class .arrow::before {\r\n      border-top-color: black;\r\n    }\r\n\r\n\r\n#review_count{\r\n    color: rgba(255, 255, 255, 0.281);\r\n    margin-left: 20px;\r\n}\r\n\r\n\r\n.rate_span_desk{\r\n    background-color: black;\r\n    color: white;\r\n    padding: 5px 11px 3px 10px;\r\n    border-radius: 20px;\r\n    margin-left: 30px;\r\n}\r\n\r\n\r\n.rate_span_mob{\r\n    background-color: black;\r\n    color: white;\r\n    padding: 0px 0px 0px 10px;\r\n    border-radius: 20px;\r\n    margin-right: 6em;\r\n    display: block;\r\n    margin-top: 15px;\r\n}\r\n\r\n\r\n.star_class{\r\n    font-size: 35px;\r\n}\r\n\r\n\r\n.rating_subs{\r\n    font-size: 20px;\r\n    vertical-align: 4px;\r\n    padding-left: 7px;\r\n}\r\n\r\n\r\n.content-ellipses{\r\n    width:100%;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    -webkit-box-orient: vertical;\r\n    background:#fff;\r\n    /* position:absolute; */\r\n}\r\n\r\n\r\n.anchor_read{\r\n    color: darkblue;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n.anchor_read:hover{\r\n    color: darkblue;\r\n}\r\n\r\n\r\n.written_by{\r\n    color: grey;\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.no_indicators_cast{\r\n    margin-left: -5em;\r\n    margin-right: -3.6em;\r\n    padding-left: 5em;\r\n}\r\n\r\n\r\n/* add this to mobile version */\r\n\r\n\r\n.modal_styling{\r\n    height: -webkit-fill-available;\r\n    margin: 0.5em;\r\n}\r\n\r\n\r\n.cast_image_size_large{\r\n    width: 150px;\r\n}\r\n\r\n\r\n.cast_image_size_small{\r\n    width: 23em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtY2FzdC9tb3ZpZS1jYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7O0FBRWQ7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBRUE7O0dBRUc7OztBQUdIOzs7R0FHRzs7O0FBRUg7O0dBRUc7OztBQUVIO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7O0FBR0EsaUJBQWlCOzs7QUFDakI7TUFDTSx5QkFBeUI7TUFDekIsWUFBWTtJQUNkOzs7QUFDQTtNQUNFLFlBQVk7SUFDZDs7O0FBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7OztBQUVKO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTs7QUFFQTs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksU0FBUztBQUNiOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBLGdCQUFnQjs7O0FBQ2hCO01BQ00sdUJBQXVCO01BQ3ZCLHdCQUF3QjtNQUN4QixZQUFZO01BQ1osZUFBZTtJQUNqQjs7O0FBQ0E7TUFDRSx1QkFBdUI7SUFDekI7OztBQUdKO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7O0FBRUEsK0JBQStCOzs7QUFDL0I7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWNhc3QvbW92aWUtY2FzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhc3RfY29tcG9uZW50e1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuXHJcbi5ibGFjay10ZXh0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uY2FyZC1ncm91cC5jYXJkLWdyb3VwLXNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi8qIC5jYXJkLWdyb3VwLmNhcmQtZ3JvdXAtc2Nyb2xsID4gLmNhcmQge1xyXG4gICAgXHJcbn0gKi9cclxuXHJcblxyXG4vKiAuY2FyZC1ncm91cC5jYXJkLWdyb3VwLXNjcm9sbHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufSAqL1xyXG5cclxuLyogLmNhcmQtZ3JvdXAuY2FyZC1ncm91cC1zY3JvbGwgPiAuY2FyZHtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxufSAqL1xyXG5cclxuLmNhcmQtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbn1cclxuXHJcbi5jYXJkLWdyb3Vwe1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvbF9hbGlnbntcclxuICAgIG1heC13aWR0aDogMTUuNjY2NjY3JTtcclxuICAgIGhlaWdodDogMjZlbTtcclxufVxyXG5cclxuLmNhcmQtZ3JvdXAuY2FyZC1ncm91cC1zY3JvbGwgPiAuY29sX2FsaWdue1xyXG4gICAgZmxleC1iYXNpczogMzAlO1xyXG59XHJcblxyXG4uY29sX2FsaWduX21vYmlsZXtcclxuICAgIGhlaWdodDogMjNlbTtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1iYXNpczogNDglO1xyXG59XHJcblxyXG4ucmV2aWV3c19jb21wb25lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDI4cHg7ICovXHJcbn1cclxuXHJcbi5yZXZfaW1hZ2VfZGVza3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDExcHggNTBweCAyMHB4IDY2cHg7XHJcbn1cclxuXHJcbi5yZXZfaW1hZ2VfbW9ie1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcblxyXG4vKiBtb2RhbCBzdHlsZXMgKi9cclxuLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJjO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuZGFyay1tb2RhbCAuY2xvc2Uge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubGlnaHQtYmx1ZS1iYWNrZHJvcCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2IzZmQ7XHJcbiAgICB9XHJcblxyXG4uYmxhY2tfZm9udF9jb2xvcntcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxhcmdlX3NjcmVlbl9tb2RhbHtcclxuICAgIG1heC13aWR0aDogNDIlO1xyXG59XHJcblxyXG4uc21hbGxfc2NyZWVuX21vZGFse1xyXG5cclxufVxyXG5cclxuLmNvbF85e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRlbTtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG59XHJcblxyXG4uY29sX3NtXzl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tb2RfZW50cmllc3tcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1lZGlhX2ljb25ze1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5kYWRhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBmb3IgdG9vbHRpcCAqL1xyXG4ubXktY3VzdG9tLWNsYXNzIC50b29sdGlwLWlubmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMC4ycHggc29saWQgZ3JleTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDEyNSU7XHJcbiAgICB9XHJcbiAgICAubXktY3VzdG9tLWNsYXNzIC5hcnJvdzo6YmVmb3JlIHtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG5cclxuI3Jldmlld19jb3VudHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ucmF0ZV9zcGFuX2Rlc2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMXB4IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ucmF0ZV9zcGFuX21vYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnN0YXJfY2xhc3N7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5yYXRpbmdfc3Vic3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxufVxyXG5cclxuXHJcbi5jb250ZW50LWVsbGlwc2Vze1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAvKiBwb3NpdGlvbjphYnNvbHV0ZTsgKi9cclxufVxyXG5cclxuLmFuY2hvcl9yZWFke1xyXG4gICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5hbmNob3JfcmVhZDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuLndyaXR0ZW5fYnl7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5ub19pbmRpY2F0b3JzX2Nhc3R7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLTMuNmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1ZW07XHJcbn1cclxuXHJcbi8qIGFkZCB0aGlzIHRvIG1vYmlsZSB2ZXJzaW9uICovXHJcbi5tb2RhbF9zdHlsaW5ne1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxufVxyXG5cclxuXHJcbi5jYXN0X2ltYWdlX3NpemVfbGFyZ2V7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5jYXN0X2ltYWdlX3NpemVfc21hbGx7XHJcbiAgICB3aWR0aDogMjNlbTtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-cast',
                templateUrl: './movie-cast.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styleUrls: ['./movie-cast.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "Qmks":
/*!**************************************************************!*\
  !*** ./src/app/eighth-carousel/eighth-carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: EighthCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EighthCarouselComponent", function() { return EighthCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function EighthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EighthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r7.onSelect(obj_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r6.name);
} }
function EighthCarouselComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EighthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template, 6, 5, "div", 4);
} if (rf & 2) {
    const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r2);
} }
function EighthCarouselComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EighthCarouselComponent_ngb_carousel_2_1_ng_template_0_Template, 1, 1, "ng-template", 3);
} }
function EighthCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EighthCarouselComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.array2d);
} }
class EighthCarouselComponent {
    constructor(http, router, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.array2d = [];
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/trendingTV")
            .subscribe((data) => {
            console.log("data from eighth: ", data);
            this.displayData(data);
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    displayData(data) {
        this.json_data_list = data;
        this.get_array = this.json_data_list.trending_tv_shows_section;
        // divide into 6 cards per slide
        // console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
        var count = 0;
        var new_array = [];
        // for desktop screens
        if (screen.width > 600) {
            for (let arr of this.get_array) {
                if (count == 6) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        // for mobile screens
        else {
            for (let arr of this.get_array) {
                if (count == 1) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
    }
    onSelect(img) {
        this.router.navigate(['/watch/tv', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.name;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "tv";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
}
EighthCarouselComponent.ɵfac = function EighthCarouselComponent_Factory(t) { return new (t || EighthCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
EighthCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EighthCarouselComponent, selectors: [["app-eighth-carousel"]], decls: 3, vars: 1, consts: [["class", "check_focus", "style", "margin-bottom: 8em;", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 2, "margin-bottom", "8em", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function EighthCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trending TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EighthCarouselComponent_ngb_carousel_2_Template, 2, 3, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array2d);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 1% 10%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 5%;\r\n    height: 410px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 8%;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.5%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 96%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: -14px;\r\n\twidth: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: -11px;\r\n\twidth: 89%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWlnaHRoLWNhcm91c2VsL2VpZ2h0aC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7RUFDRSwwQkFBMEIsRUFBRSxjQUFjO0FBQzVDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztDQUVDLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsbUVBQW1FO0NBQ25FLFdBQVc7QUFDWjs7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixlQUFlO0NBQ2YsVUFBVTtDQUNWLFNBQVM7Q0FDVCxtQkFBbUI7QUFDcEI7O0FBQ0E7Ozs7Ozs7Ozs7R0FVRzs7QUFHSDtDQUNDLGFBQWE7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUVyQixnQkFBZ0I7QUFDbEI7O0FBSUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsVUFBVTtBQUNYIiwiZmlsZSI6InNyYy9hcHAvZWlnaHRoLWNhcm91c2VsL2VpZ2h0aC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMSUgMTAlO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDExMCwgNjYsIDApO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWx7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbiAgICBoZWlnaHQ6IDQxMHB4O1xyXG59XHJcblxyXG5cclxuLnpvb20ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMDVzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLnpvb206aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbn1cclxuXHJcbi5odnJib3gsXHJcbi5odnJib3ggKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaHZyYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG4uaHZyYm94IGltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl9ib3R0b20ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl90b3Age1xyXG5cdC8qIG9wYWNpdHk6IDA7ICovXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTJweDtcclxuXHQvKiBsZWZ0OiAtMTFweDsgKi9cclxuXHRib3R0b206IC0zcHg7XHJcblx0Lyogd2lkdGg6IDg5JTsgKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgyNTUsIDAsIDAsIDApIDEzMCUpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5odnJib3g6aG92ZXIgLmh2cmJveC1sYXllcl90b3AsXHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC10ZXh0IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDI2cHg7XHJcblx0Ym90dG9tOiBpbmhlcml0O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLyogLmh2cmJveCAuaHZyYm94LXRleHRfbW9iaWxlIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzksIDE3OSwgMTc5KTsgXHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTc5LCAxNzksIDE3OSwgMC43KTtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0cGFkZGluZy10b3A6IDJweDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtdGV4dF9tb2JpbGUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG5cclxuLmNoZWNrX2ZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGVja19mb2N1czpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi5kZXNrdG9wX2NsYXNze1xyXG5cdG1hcmdpbi1sZWZ0OiA2JTtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tb2JpbGVfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDEwJTtcclxuXHRtYXJnaW4tdG9wOiA4JTtcclxufVxyXG5cclxuLmRlc2tfd2lkdGh7XHJcblx0d2lkdGg6IDE1LjUlO1xyXG59XHJcblxyXG4ubW9iX3dpZHRoe1xyXG5cdHdpZHRoOiA5NiU7XHJcbn1cclxuXHJcbi5ob3ZlcmVkX3Byb3B7XHJcblx0b3BhY2l0eTogMTtcclxuXHRsZWZ0OiAtMTRweDtcclxuXHR3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubm9uaG92ZXJlZHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGxlZnQ6IC0xMXB4O1xyXG5cdHdpZHRoOiA4OSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EighthCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eighth-carousel',
                templateUrl: './eighth-carousel.component.html',
                styleUrls: ['./eighth-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: WikipediaService, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaService", function() { return WikipediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












function AppComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngb-highlight", 16);
} if (rf & 2) {
    const r_r3 = ctx.result;
    const t_r4 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r3["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r3.title)("term", t_r4);
} }
const _c0 = function (a0) { return { "show": a0 }; };
const WIKI_URL = 'http://localhost:3080/searchbar';
const PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
// fromObject: {
// action: 'opensearch',
// format: 'json',
// origin: '*'
// }
});
class WikipediaService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        console.log("term: ", term);
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response.searched_results));
    }
}
WikipediaService.ɵfac = function WikipediaService_Factory(t) { return new (t || WikipediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
WikipediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WikipediaService, factory: WikipediaService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WikipediaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();
class AppComponent {
    constructor(http, _service, router, breakpointObserver) {
        this.http = http;
        this._service = _service;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.title = 'angular-app';
        this.formatter = (x) => x.title;
        this.img = (x) => x.backdrop_path;
        this.id = (x) => x.id;
        this.navbarOpen = false;
        this.searching = false;
        this.searchFailed = false;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.searching = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(term => this._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.searchFailed = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
            this.searchFailed = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.searching = false));
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/home_page")
            .subscribe((data) => {
            this.json_api_data = data;
            // initialize localStorage keys
            var new_empty_json1 = { "id_array": [] };
            var make_it_string1 = JSON.stringify(new_empty_json1);
            localStorage.setItem("cont_watching", make_it_string1);
            var new_empty_json2 = {};
            var make_it_string2 = JSON.stringify(new_empty_json2);
            localStorage.setItem("cont_watching_objects", make_it_string2);
            var new_empty_json3 = {};
            var make_it_string3 = JSON.stringify(new_empty_json3);
            localStorage.setItem("media_type", make_it_string3);
            var new_empty_json4 = { 'list': [] };
            var make_it_string4 = JSON.stringify(new_empty_json4);
            localStorage.setItem("watchlist", make_it_string4);
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                // i phone viewport
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                // larger screens
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    fixNavBar() {
        return {
            fixed_top: this.mobile_screen_size
        };
    }
    left_right_toggle() {
        return {
            ml_auto: this.mobile_screen_size,
            mr_auto: this.desktop_screen_size
        };
    }
    method_selected($e, input) {
        // console.log("clicked... bitches!!")
        // console.log(e.item) // whole object
        $e.preventDefault();
        if ($e.item.media_type == "movie") {
            this.router.navigate(['/watch/movie', $e.item.id]);
        }
        else {
            this.router.navigate(['/watch/tv', $e.item.id]);
        }
        input.value = '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](WikipediaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([WikipediaService])], decls: 22, vars: 11, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "dark_navbar_id", "py-2", "px-5", 3, "ngClass"], ["routerLink", "", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", 3, "ngClass"], [1, "nav-item"], ["routerLink", "", "routerLinkActive", "active", 1, "nav-link"], [1, "sr-only"], ["routerLink", "mylist", "routerLinkActive", "active", 1, "nav-link"], [1, "form-inline"], [1, "form-group"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "Search", 1, "form-control", "mx-sm-3", 3, "resultTemplate", "ngModel", "ngbTypeahead", "inputFormatter", "ngModelChange", "selectItem"], ["input", ""], [1, "mr-1", 2, "width", "65px", 3, "src"], [3, "result", "term"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "fieldset", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_ng_template_17_Template, 2, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_19_listener($event) { return ctx.model = $event; })("selectItem", function AppComponent_Template_input_selectItem_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return ctx.method_selected($event, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.fixNavBar());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.navbarOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.left_right_toggle());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resultTemplate", _r0)("ngModel", ctx.model)("ngbTypeahead", ctx.search)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbHighlight"]], styles: [".form-control[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n}\r\n\r\n\r\nnav[_ngcontent-%COMP%]{\r\n    \r\n}\r\n\r\n\r\n#typeahead-http[_ngcontent-%COMP%]{\r\n    background-color: rgba(0,0,0,0.1);\r\n    color: white;\r\n    border: none;\r\n    border-bottom: 2px solid white;\r\n    outline: none;\r\n    font-size: larger;\r\n    padding-left: 1em;\r\n}\r\n\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\nngb-highlight[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    color: white;\r\n}\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    font-size: x-large;\r\n}\r\n\r\n\r\n.nav-link[_ngcontent-%COMP%]{\r\n    font-size: larger;\r\n    margin-left: 1em;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fixed_top[_ngcontent-%COMP%]{\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1020;\r\n}\r\n\r\n\r\n.mr_auto[_ngcontent-%COMP%]{\r\n    margin-right: auto!important;\r\n    \r\n}\r\n\r\n\r\n.ml_auto[_ngcontent-%COMP%]{\r\n    margin-left: auto!important;\r\n    align-items: flex-end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7OztBQUVBO0VBQ0UscUJBQXFCO0VBRXJCLGdCQUFnQjtBQUNsQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7O0FBRUEsOENBQThDOzs7QUFDOUM7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksNEJBQTRCOztBQUVoQzs7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5cclxubmF2e1xyXG4gICAgLyogcGFkZGluZzogNXB4IDVlbTsgKi9cclxufVxyXG5cclxuI3R5cGVhaGVhZC1odHRwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxubmdiLWhpZ2hsaWdodHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi8qIHN0aWNreSB0b3AgcHJvcGVydGllcyAtIGZvciBtb2JpbGUgc2NyZWVuICovXHJcbi5maXhlZF90b3B7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAyMDtcclxufVxyXG5cclxuLm1yX2F1dG97XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcbi5tbF9hdXRve1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                providers: [WikipediaService],
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: WikipediaService }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "VLNH":
/*!************************************************************!*\
  !*** ./src/app/fifth-carousel/fifth-carousel.component.ts ***!
  \************************************************************/
/*! exports provided: FifthCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FifthCarouselComponent", function() { return FifthCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function FifthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FifthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r7.onSelect(obj_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r6.title);
} }
function FifthCarouselComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FifthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template, 6, 5, "div", 4);
} if (rf & 2) {
    const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r2);
} }
function FifthCarouselComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FifthCarouselComponent_ngb_carousel_2_1_ng_template_0_Template, 1, 1, "ng-template", 3);
} }
function FifthCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FifthCarouselComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.array2d);
} }
class FifthCarouselComponent {
    constructor(http, router, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.array2d = [];
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/trendingMovies")
            .subscribe((data) => {
            console.log("data from fifth: ", data);
            this.displayData(data);
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    displayData(data) {
        this.json_data_list = data;
        this.get_array = this.json_data_list.trending_movies_section;
        // divide into 6 cards per slide
        // console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
        var count = 0;
        var new_array = [];
        // for desktop screens
        if (screen.width > 600) {
            for (let arr of this.get_array) {
                if (count == 6) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        // for mobile screens
        else {
            for (let arr of this.get_array) {
                if (count == 1) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
    }
    onSelect(img) {
        this.router.navigate(['/watch/movie', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.title;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "tv";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
}
FifthCarouselComponent.ɵfac = function FifthCarouselComponent_Factory(t) { return new (t || FifthCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
FifthCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FifthCarouselComponent, selectors: [["app-fifth-carousel"]], decls: 3, vars: 1, consts: [["class", "check_focus", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function FifthCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FifthCarouselComponent_ngb_carousel_2_Template, 2, 3, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array2d);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 1% 10%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 5%;\r\n    height: 410px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 8%;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.5%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 96%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: -14px;\r\n\twidth: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: -11px;\r\n\twidth: 89%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlmdGgtY2Fyb3VzZWwvZmlmdGgtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUdBO0VBQ0UsMEJBQTBCLEVBQUUsY0FBYztBQUM1Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Q0FFQyxzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsWUFBWTtBQUNiOztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1FQUFtRTtDQUNuRSxXQUFXOztBQUVaOztBQUNBOztDQUVDLFVBQVU7QUFDWDs7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGVBQWU7Q0FDZixVQUFVO0NBQ1YsU0FBUztDQUNULG1CQUFtQjtBQUNwQjs7QUFDQTs7Ozs7Ozs7OztHQVVHOztBQUlIO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBRXJCLGdCQUFnQjtBQUNsQjs7QUFHQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxVQUFVO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9maWZ0aC1jYXJvdXNlbC9maWZ0aC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMSUgMTAlO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDExMCwgNjYsIDApO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWx7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbiAgICBoZWlnaHQ6IDQxMHB4O1xyXG59XHJcblxyXG5cclxuLnpvb20ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMDVzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLnpvb206aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbn1cclxuXHJcbi5odnJib3gsXHJcbi5odnJib3ggKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaHZyYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG4uaHZyYm94IGltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl9ib3R0b20ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl90b3Age1xyXG5cdC8qIG9wYWNpdHk6IDA7ICovXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTJweDtcclxuXHQvKiBsZWZ0OiAtMTFweDsgKi9cclxuXHRib3R0b206IC0zcHg7XHJcblx0Lyogd2lkdGg6IDg5JTsgKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgyNTUsIDAsIDAsIDApIDEzMCUpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdFxyXG59XHJcbi5odnJib3g6aG92ZXIgLmh2cmJveC1sYXllcl90b3AsXHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC10ZXh0IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDI2cHg7XHJcblx0Ym90dG9tOiBpbmhlcml0O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLyogLmh2cmJveCAuaHZyYm94LXRleHRfbW9iaWxlIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzksIDE3OSwgMTc5KTsgXHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTc5LCAxNzksIDE3OSwgMC43KTtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0cGFkZGluZy10b3A6IDJweDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtdGV4dF9tb2JpbGUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG5cclxuXHJcbi5jaGVja19mb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tfZm9jdXM6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcbi5kZXNrdG9wX2NsYXNze1xyXG5cdG1hcmdpbi1sZWZ0OiA2JTtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tb2JpbGVfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDEwJTtcclxuXHRtYXJnaW4tdG9wOiA4JTtcclxufVxyXG5cclxuLmRlc2tfd2lkdGh7XHJcblx0d2lkdGg6IDE1LjUlO1xyXG59XHJcblxyXG4ubW9iX3dpZHRoe1xyXG5cdHdpZHRoOiA5NiU7XHJcbn1cclxuXHJcbi5ob3ZlcmVkX3Byb3B7XHJcblx0b3BhY2l0eTogMTtcclxuXHRsZWZ0OiAtMTRweDtcclxuXHR3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubm9uaG92ZXJlZHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGxlZnQ6IC0xMXB4O1xyXG5cdHdpZHRoOiA4OSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FifthCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fifth-carousel',
                templateUrl: './fifth-carousel.component.html',
                styleUrls: ['./fifth-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


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
/* harmony import */ var _first_carousel_first_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-carousel/first-carousel.component */ "is1n");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./watch-list/watch-list.component */ "kIlJ");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "r0S5");
/* harmony import */ var _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tv-details/tv-details.component */ "6AZv");
/* harmony import */ var _third_carousel_third_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./third-carousel/third-carousel.component */ "mVkU");
/* harmony import */ var _fourth_carousel_fourth_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fourth-carousel/fourth-carousel.component */ "/WQZ");
/* harmony import */ var _fifth_carousel_fifth_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fifth-carousel/fifth-carousel.component */ "VLNH");
/* harmony import */ var _sixth_carousel_sixth_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sixth-carousel/sixth-carousel.component */ "oXbR");
/* harmony import */ var _seventh_carousel_seventh_carousel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./seventh-carousel/seventh-carousel.component */ "uaHH");
/* harmony import */ var _eighth_carousel_eighth_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./eighth-carousel/eighth-carousel.component */ "Qmks");
/* harmony import */ var _movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./movie-cast/movie-cast.component */ "NjZ3");
/* harmony import */ var _second_carousel_second_carousel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./second-carousel/second-carousel.component */ "cGyC");
/* harmony import */ var _tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tv-cast/tv-cast.component */ "DStt");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _first_carousel_first_carousel_component__WEBPACK_IMPORTED_MODULE_0__["FirstCarouselComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayerModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_12__["WatchListComponent"],
        _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailsComponent"],
        _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_14__["TvDetailsComponent"],
        _first_carousel_first_carousel_component__WEBPACK_IMPORTED_MODULE_0__["FirstCarouselComponent"],
        _third_carousel_third_carousel_component__WEBPACK_IMPORTED_MODULE_15__["ThirdCarouselComponent"],
        _fourth_carousel_fourth_carousel_component__WEBPACK_IMPORTED_MODULE_16__["FourthCarouselComponent"],
        _fifth_carousel_fifth_carousel_component__WEBPACK_IMPORTED_MODULE_17__["FifthCarouselComponent"],
        _sixth_carousel_sixth_carousel_component__WEBPACK_IMPORTED_MODULE_18__["SixthCarouselComponent"],
        _seventh_carousel_seventh_carousel_component__WEBPACK_IMPORTED_MODULE_19__["SeventhCarouselComponent"],
        _eighth_carousel_eighth_carousel_component__WEBPACK_IMPORTED_MODULE_20__["EighthCarouselComponent"],
        _movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_21__["MovieCastComponent"],
        _second_carousel_second_carousel_component__WEBPACK_IMPORTED_MODULE_22__["SecondCarouselComponent"],
        _tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_23__["TvCastComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayerModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_12__["WatchListComponent"],
                    _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailsComponent"],
                    _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_14__["TvDetailsComponent"],
                    _first_carousel_first_carousel_component__WEBPACK_IMPORTED_MODULE_0__["FirstCarouselComponent"],
                    _third_carousel_third_carousel_component__WEBPACK_IMPORTED_MODULE_15__["ThirdCarouselComponent"],
                    _fourth_carousel_fourth_carousel_component__WEBPACK_IMPORTED_MODULE_16__["FourthCarouselComponent"],
                    _fifth_carousel_fifth_carousel_component__WEBPACK_IMPORTED_MODULE_17__["FifthCarouselComponent"],
                    _sixth_carousel_sixth_carousel_component__WEBPACK_IMPORTED_MODULE_18__["SixthCarouselComponent"],
                    _seventh_carousel_seventh_carousel_component__WEBPACK_IMPORTED_MODULE_19__["SeventhCarouselComponent"],
                    _eighth_carousel_eighth_carousel_component__WEBPACK_IMPORTED_MODULE_20__["EighthCarouselComponent"],
                    _movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_21__["MovieCastComponent"],
                    _second_carousel_second_carousel_component__WEBPACK_IMPORTED_MODULE_22__["SecondCarouselComponent"],
                    _tv_cast_tv_cast_component__WEBPACK_IMPORTED_MODULE_23__["TvCastComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayerModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _first_carousel_first_carousel_component__WEBPACK_IMPORTED_MODULE_0__["FirstCarouselComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cGyC":
/*!**************************************************************!*\
  !*** ./src/app/second-carousel/second-carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: SecondCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondCarouselComponent", function() { return SecondCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function SecondCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecondCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r7.onSelect(obj_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r6.lookup_poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r6.lookup_title);
} }
function SecondCarouselComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SecondCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template, 6, 5, "div", 4);
} if (rf & 2) {
    const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r2);
} }
function SecondCarouselComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SecondCarouselComponent_ngb_carousel_2_1_ng_template_0_Template, 1, 1, "ng-template", 3);
} }
function SecondCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SecondCarouselComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.array2d);
} }
class SecondCarouselComponent {
    constructor(http, router, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.get_array = [];
        this.array2d = [];
    }
    ngOnInit() {
        this.displayData();
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    displayData() {
        var count = 0;
        var new_array = [];
        // poster_path, id, title
        // string, convert json, manipulate, convert string
        var f1 = JSON.parse(localStorage.cont_watching);
        var f2 = JSON.parse(localStorage.cont_watching_objects);
        var lookup_order_array = f1.id_array;
        // reverse the array
        lookup_order_array.reverse();
        // if length > 24 -- drop the rest -- only for frontend
        while (lookup_order_array.length > 24) {
            lookup_order_array.pop();
        }
        console.log("lookup order: ", lookup_order_array);
        // form get_array--- has objects in it
        for (var ind = 0; ind < lookup_order_array.length; ind++) {
            this.get_array.push(f2[lookup_order_array[ind]]);
        }
        console.log("this.get_array: (for second) : ", this.get_array);
        // for desktop screens
        if (screen.width > 600) {
            for (let arr of this.get_array) {
                if (count == 6) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        // for mobile screens
        else {
            for (let arr of this.get_array) {
                if (count == 1) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        console.log("array2d: ", this.array2d);
    }
    onSelect(img) {
        // check where to redirect [from localStorage] - could be tv or movie
        var media_json_string = localStorage.getItem("media_type");
        var media_json = JSON.parse(media_json_string);
        var get_media_type = media_json[img.lookup_id.toString()];
        if (get_media_type == "movie") {
            this.router.navigate(['/watch/movie', img.lookup_id]);
        }
        else {
            this.router.navigate(['/watch/tv', img.lookup_id]);
        }
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.lookup_id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
    }
}
SecondCarouselComponent.ɵfac = function SecondCarouselComponent_Factory(t) { return new (t || SecondCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
SecondCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondCarouselComponent, selectors: [["app-second-carousel"]], decls: 3, vars: 1, consts: [["class", "check_focus", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function SecondCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue Watching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SecondCarouselComponent_ngb_carousel_2_Template, 2, 3, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array2d);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 1% 10%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 5%;\r\n    height: 410px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 8%;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.5%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 96%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: -14px;\r\n\twidth: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: -11px;\r\n\twidth: 89%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vjb25kLWNhcm91c2VsL3NlY29uZC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7RUFDRSwwQkFBMEIsRUFBRSxjQUFjO0FBQzVDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztDQUVDLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsbUVBQW1FO0NBQ25FLFdBQVc7O0FBRVo7O0FBQ0E7O0NBRUMsVUFBVTtBQUNYOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsZUFBZTtDQUNmLFVBQVU7Q0FDVixTQUFTO0NBQ1QsbUJBQW1CO0FBQ3BCOztBQUNBOzs7Ozs7Ozs7O0dBVUc7O0FBR0g7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFFckIsZ0JBQWdCO0FBQ2xCOztBQUdBO0NBQ0MsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC1jYXJvdXNlbC9zZWNvbmQtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDElIDEwJTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxMTAsIDY2LCAwKTtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9we1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxubmdiLWNhcm91c2Vse1xyXG4gICAgbWFyZ2luOiAwIDUlO1xyXG4gICAgaGVpZ2h0OiA0MTBweDtcclxufVxyXG5cclxuXHJcbi56b29tIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjA1czsgLyogQW5pbWF0aW9uICovXHJcbn1cclxuXHJcbi56b29tOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG59XHJcblxyXG4uaHZyYm94LFxyXG4uaHZyYm94ICoge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmh2cmJveCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmh2cmJveCBpbWcge1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uaHZyYm94IC5odnJib3gtbGF5ZXJfYm90dG9tIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaHZyYm94IC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHQvKiBvcGFjaXR5OiAwOyAqL1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0ycHg7XHJcblx0LyogbGVmdDogLTExcHg7ICovXHJcblx0Ym90dG9tOiAtM3B4O1xyXG5cdC8qIHdpZHRoOiA4OSU7ICovXHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssIHJnYmEoMjU1LCAwLCAwLCAwKSAxMzAlKTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRcclxufVxyXG4uaHZyYm94OmhvdmVyIC5odnJib3gtbGF5ZXJfdG9wLFxyXG4uaHZyYm94LmFjdGl2ZSAuaHZyYm94LWxheWVyX3RvcCB7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG4uaHZyYm94IC5odnJib3gtdGV4dCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAyNnB4O1xyXG5cdGJvdHRvbTogaW5oZXJpdDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcbi8qIC5odnJib3ggLmh2cmJveC10ZXh0X21vYmlsZSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTc5LCAxNzksIDE3OSk7IFxyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE3OSwgMTc5LCAxNzksIDAuNyk7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdHBhZGRpbmctdG9wOiAycHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uaHZyYm94LmFjdGl2ZSAuaHZyYm94LXRleHRfbW9iaWxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufSAqL1xyXG5cclxuXHJcbi5jaGVja19mb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tfZm9jdXM6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcbi5kZXNrdG9wX2NsYXNze1xyXG5cdG1hcmdpbi1sZWZ0OiA2JTtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tb2JpbGVfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDEwJTtcclxuXHRtYXJnaW4tdG9wOiA4JTtcclxufVxyXG5cclxuLmRlc2tfd2lkdGh7XHJcblx0d2lkdGg6IDE1LjUlO1xyXG59XHJcblxyXG4ubW9iX3dpZHRoe1xyXG5cdHdpZHRoOiA5NiU7XHJcbn1cclxuXHJcbi5ob3ZlcmVkX3Byb3B7XHJcblx0b3BhY2l0eTogMTtcclxuXHRsZWZ0OiAtMTRweDtcclxuXHR3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubm9uaG92ZXJlZHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGxlZnQ6IC0xMXB4O1xyXG5cdHdpZHRoOiA4OSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-second-carousel',
                templateUrl: './second-carousel.component.html',
                styleUrls: ['./second-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "is1n":
/*!************************************************************!*\
  !*** ./src/app/first-carousel/first-carousel.component.ts ***!
  \************************************************************/
/*! exports provided: FirstCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCarouselComponent", function() { return FirstCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["carousel"];
function FirstCarouselComponent_ngb_carousel_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstCarouselComponent_ngb_carousel_1_2_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onSelect(img_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r3.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setText());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r3.title);
} }
function FirstCarouselComponent_ngb_carousel_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FirstCarouselComponent_ngb_carousel_1_2_ng_template_0_Template, 6, 4, "ng-template", 5);
} }
function FirstCarouselComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("slide", function FirstCarouselComponent_ngb_carousel_1_Template_ngb_carousel_slide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FirstCarouselComponent_ngb_carousel_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus)("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.json_data_list.currently_playing_movies);
} }
class FirstCarouselComponent {
    constructor(http, breakpointObserver, router) {
        this.http = http;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        // carousel code
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/home_page")
            .subscribe((data) => {
            console.log("data from first: ", data);
            this.displayData(data);
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                // i phone viewport
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                // larger screens
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    displayData(data) {
        this.json_data_list = data;
    }
    // ngClasses for the frontend
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size,
            something: this.mobile_screen_size
        };
    }
    setText() {
        return {
            text_desk: this.desktop_screen_size,
            text_mob: this.mobile_screen_size
        };
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    onSelect(img) {
        this.router.navigate(['/watch/movie', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.title;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "movie";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
}
FirstCarouselComponent.ɵfac = function FirstCarouselComponent_Factory(t) { return new (t || FirstCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FirstCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstCarouselComponent, selectors: [["app-first-carousel"]], viewQuery: function FirstCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 2, vars: 1, consts: [[1, "cont_height", "mt-4", "mt-sm-0"], ["class", "check_focus", 3, "interval", "pauseOnHover", "pauseOnFocus", "ngClass", "slide", 4, "ngIf"], [1, "check_focus", 3, "interval", "pauseOnHover", "pauseOnFocus", "ngClass", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["class", "", "ngbSlide", ""], ["rel", "nofollow noopener noreferrer", 3, "click"], [1, "picsum-img-wrapper", "zoom", "hvrbox"], ["id", "image_prop", 1, "hvrbox-layer_bottom", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text", 3, "ngClass"]], template: function FirstCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstCarouselComponent_ngb_carousel_1_Template, 3, 5, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_data_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: ["ngb-carousel[_ngcontent-%COMP%] {\r\n    margin: 0% 14%;\r\n    \r\n\tmax-width: inherit;\r\n    max-height: 460px;\r\n}\r\n\r\n\r\nngb-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-height: 1000px;\r\n}\r\n\r\n\r\nngb-carousel[_ngcontent-%COMP%] {\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n\r\n\r\n.cont_height[_ngcontent-%COMP%]{\r\n    \r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.carousel-caption[_ngcontent-%COMP%]{\r\n    right: unset;\r\n    bottom: unset;\r\n    left: unset;\r\n}\r\n\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\t\r\n\t\r\n\tleft: 0px;\r\n\t\r\n\twidth: 100%;\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\t\r\n\tbottom: inherit;\r\n\t\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\theight: -webkit-fill-available;\t\r\n}\r\n\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\theight: 460px;\r\n}\r\n\r\n\r\n.text_desk[_ngcontent-%COMP%]{\r\n\tfont-size: 22px;\r\n\tleft: 135px;\r\n\tpadding-top: 26%;\r\n}\r\n\r\n\r\n.text_mob[_ngcontent-%COMP%]{\r\n\tfont-size: 16px;\r\n\tleft: 8%;\r\n\tpadding-top: 39%;\r\n}\r\n\r\n\r\n.something[_ngcontent-%COMP%]{\r\n\tmargin: 0 7%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3QtY2Fyb3VzZWwvZmlyc3QtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7O0dBS0c7OztBQUdIO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtDQUMxQixrQkFBa0I7SUFDZixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOzs7QUFFQTtFQUNFLDBCQUEwQixFQUFFLGNBQWM7QUFDNUM7OztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFFQTs7Q0FFQyxzQkFBc0I7QUFDdkI7OztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLFlBQVk7QUFDYjs7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOzs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLFNBQVM7O0NBRVQsV0FBVztDQUNYLG1FQUFtRTtDQUNuRSxXQUFXOztBQUVaOzs7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7OztBQUNBOztDQUVDLGtCQUFrQjs7Q0FFbEIsZUFBZTs7QUFFaEI7OztBQUNBOzs7Ozs7Ozs7O0dBVUc7OztBQUlIO0NBQ0MsYUFBYTtBQUNkOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUVyQixnQkFBZ0I7QUFDbEI7OztBQUdBO0NBQ0MsVUFBVTtDQUNWLDhCQUE4QjtBQUMvQjs7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtBQUNkOzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCOzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixRQUFRO0NBQ1IsZ0JBQWdCO0FBQ2pCOzs7QUFFQTtDQUNDLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LWNhcm91c2VsL2ZpcnN0LWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogXHJcbiNpbWFnZV9wcm9we1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSAqL1xyXG5cclxuXHJcbm5nYi1jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW46IDAlIDE0JTtcclxuICAgIC8qIG1heC13aWR0aDogMTMwMHB4OyAqL1xyXG5cdG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIG1heC1oZWlnaHQ6IDQ2MHB4O1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWwgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWwge1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jb250X2hlaWdodHtcclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgcmlnaHQ6IHVuc2V0O1xyXG4gICAgYm90dG9tOiB1bnNldDtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG59XHJcblxyXG4uem9vbSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4wNXM7IC8qIEFuaW1hdGlvbiAqL1xyXG59XHJcblxyXG4uem9vbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxufVxyXG5cclxuLmh2cmJveCxcclxuLmh2cmJveCAqIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5odnJib3gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5odnJib3ggaW1nIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmh2cmJveCAuaHZyYm94LWxheWVyX2JvdHRvbSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmh2cmJveCAuaHZyYm94LWxheWVyX3RvcCB7XHJcblx0Lyogb3BhY2l0eTogMDsgKi9cclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwcHg7XHJcblx0LyogbGVmdDogMHB4OyAqL1xyXG5cdC8qIHdpZHRoOiAxMDAlOyAqL1xyXG5cdGxlZnQ6IDBweDtcclxuXHRcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgyNTUsIDAsIDAsIDApIDEzMCUpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdFxyXG59XHJcbi5odnJib3g6aG92ZXIgLmh2cmJveC1sYXllcl90b3AsXHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC10ZXh0IHtcclxuXHRcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHJcblx0Ym90dG9tOiBpbmhlcml0O1xyXG5cdFxyXG59XHJcbi8qIC5odnJib3ggLmh2cmJveC10ZXh0X21vYmlsZSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTc5LCAxNzksIDE3OSk7IFxyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE3OSwgMTc5LCAxNzksIDAuNyk7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdHBhZGRpbmctdG9wOiAycHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uaHZyYm94LmFjdGl2ZSAuaHZyYm94LXRleHRfbW9iaWxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufSAqL1xyXG5cclxuXHJcblxyXG4uY2hlY2tfZm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNoZWNrX2ZvY3VzOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uaG92ZXJlZF9wcm9we1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0aGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1x0XHJcbn1cclxuXHJcbi5ub25ob3ZlcmVke1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0aGVpZ2h0OiA0NjBweDtcclxufVxyXG5cclxuLnRleHRfZGVza3tcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0bGVmdDogMTM1cHg7XHJcblx0cGFkZGluZy10b3A6IDI2JTtcclxufVxyXG5cclxuLnRleHRfbW9ie1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRsZWZ0OiA4JTtcclxuXHRwYWRkaW5nLXRvcDogMzklO1xyXG59XHJcblxyXG4uc29tZXRoaW5ne1xyXG5cdG1hcmdpbjogMCA3JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-first-carousel',
                templateUrl: './first-carousel.component.html',
                styleUrls: ['./first-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel', { static: true }]
        }] }); })();


/***/ }),

/***/ "kIlJ":
/*!****************************************************!*\
  !*** ./src/app/watch-list/watch-list.component.ts ***!
  \****************************************************/
/*! exports provided: WatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListComponent", function() { return WatchListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function WatchListComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchListComponent_div_0_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const obj_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onSelect(obj_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r3.title);
} }
function WatchListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchListComponent_div_0_div_3_Template, 6, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.new_watch_list_order_for_frontend);
} }
function WatchListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No items found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WatchListComponent {
    // for adjusting mylist route - delete this
    // temporary_list = [{ id: 71383, media_type: "tv", title: "The Crossing", poster_path: "https://image.tmdb.org/t/p/w500/cvoSPs6We2u88mXz2vSqjbd4kQ0.jpg" },
    //   { id: 86769, media_type: "tv", title: "Ares", poster_path: "https://image.tmdb.org/t/p/w500/iVUiL32XmwQyba3EH2E3g77dXge.jpg" },
    //   { id: 118956, media_type: "tv", title: "DOTA: Dragon's Blood", poster_path: "https://image.tmdb.org/t/p/w500/s1wP1YeQS9fgSHiXZ3yJb2ufB2D.jpg" },
    //   { id: 49013, media_type: "movie", title: "Cars 2", poster_path: "https://image.tmdb.org/t/p/w500/okIz1HyxeVOMzYwwHUjH2pHi74I.jpg" },
    //   {id: 260514, media_type: "movie", title: "Cars 3", poster_path: "https://image.tmdb.org/t/p/w500/fyy1nDC8wm553FCiBDojkJmKLCs.jpg"},
    //   {id: 587807, media_type: "movie", title: "Tom & Jerry", poster_path: "https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg"},
    //   {id: 399566, media_type: "movie", title: "Godzilla vs. Kong", poster_path: "https://image.tmdb.org/t/p/w500/5KYaB1CTAklQHm846mHTFkozgDN.jpg"},
    //   {id: 1682, media_type: "movie", title: "Mothra vs. Godzilla", poster_path: "https://image.tmdb.org/t/p/w500/rDTf5sXRM9wKCj8pqcjvGnHFSvH.jpg"},
    //   {id: 1679, media_type: "movie", title: "Godzilla Raids Again", poster_path: "https://image.tmdb.org/t/p/w500/ulH1XvZlxuwi34Vcc3iomekcZgO.jpg"},
    //   { id: 39256, media_type: "movie", title: "Godzilla 1985", poster_path: "https://image.tmdb.org/t/p/w500/blKtf1L6LA3mFW8aVJzxnaI8CLn.jpg" },
    //   { id: 315011, media_type: "movie", title: "Shin Godzilla", poster_path: "https://image.tmdb.org/t/p/w500/jPNShaWZMpVF0iQ7j1dvTuZLD20.jpg" }]
    constructor(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        // "watchlist" - will store only id's - sequence
        this.fetch_list_string = localStorage.watchlist;
        this.fetch_list_json = JSON.parse(this.fetch_list_string);
        this.watch_list = this.fetch_list_json.list;
        this.fetch_list_string2 = localStorage.cont_watching;
        this.fetch_list_json2 = JSON.parse(this.fetch_list_string2);
        this.id_array_order = this.fetch_list_json2.id_array;
        this.id_values_for_lookup = JSON.parse(localStorage.cont_watching_objects);
        this.fetch_list_string3 = localStorage.media_type;
        this.id_mediaType = JSON.parse(this.fetch_list_string3);
        this.rev_order_array = this.id_array_order.reverse(); // use this - reversed order
        this.new_watch_list_order_for_frontend = [];
    }
    ngOnInit() {
        console.log("watch_list: ", this.watch_list);
        console.log("id_array_order: ", this.id_array_order);
        console.log("rev_order_array: ", this.rev_order_array);
        console.log("id_values_for_lookup: ", this.id_values_for_lookup);
        for (var i = 0; i < this.rev_order_array.length; i++) {
            var idVal = this.rev_order_array[i];
            var dict = {};
            // console.log("for loop")
            if (this.watch_list.includes(idVal) == true) {
                // console.log("if loop");
                dict['id'] = idVal;
                dict['media_type'] = this.id_mediaType[idVal];
                dict['title'] = this.id_values_for_lookup[idVal].lookup_title;
                dict['poster_path'] = this.id_values_for_lookup[idVal].lookup_poster_path;
                this.new_watch_list_order_for_frontend.push(dict);
                // console.log("dict: ", dict)
            }
        }
        console.log("new_watch_list_order_for_frontend: ", this.new_watch_list_order_for_frontend);
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    setMargins() {
        return {
            margin_desk: this.desktop_screen_size,
            margin_mob: this.mobile_screen_size
        };
    }
    setSize() {
        return {
            size_desk: this.desktop_screen_size,
            size_mob: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    onSelect(img) {
        // check where to redirect [from localStorage] - could be tv or movie
        // console.log("img: ", img)
        var media_json_string = localStorage.getItem("media_type");
        var media_json = JSON.parse(media_json_string);
        var get_media_type = media_json[img.id.toString()];
        if (get_media_type == "movie") {
            this.router.navigate(['/watch/movie', img.id]);
        }
        else {
            this.router.navigate(['/watch/tv', img.id]);
        }
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
    }
}
WatchListComponent.ɵfac = function WatchListComponent_Factory(t) { return new (t || WatchListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
WatchListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchListComponent, selectors: [["app-watch-list"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "ml-sm-5", "pl-sm-5", "mb-5", "pb-4"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", "mb-5", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"], [1, "mt-5", "mx-n2", 2, "text-align", "center"]], template: function WatchListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchListComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchListComponent_div_1_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.new_watch_list_order_for_frontend.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watch_list.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 1% 10%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 5%;\r\n    height: 410px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\tright: 0;\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 22px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n.margin_desk[_ngcontent-%COMP%]{\r\n\tmargin: 0 8%;\r\n}\r\n\r\n.margin_mob[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n.size_desk[_ngcontent-%COMP%]{\r\n\twidth: 13em;\r\n\tmargin-bottom: 4em;\r\n}\r\n\r\n.size_mob[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: -12px;\r\n\twidth: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: -11px;\r\n\twidth: 89%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2gtbGlzdC93YXRjaC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFHQTtFQUNFLDBCQUEwQixFQUFFLGNBQWM7QUFDNUM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0NBRUMsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsUUFBUTtDQUNSLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsbUVBQW1FO0NBQ25FLFdBQVc7O0FBRVo7O0FBQ0E7O0NBRUMsVUFBVTtBQUNYOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsZUFBZTtDQUNmLFVBQVU7Q0FDVixTQUFTO0NBQ1QsbUJBQW1CO0FBQ3BCOztBQUNBOzs7Ozs7Ozs7O0dBVUc7O0FBS0g7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7O0FBRUE7O0FBR0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUdBOztBQUVBOztBQUdBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3dhdGNoLWxpc3Qvd2F0Y2gtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMSUgMTAlO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDExMCwgNjYsIDApO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWx7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbiAgICBoZWlnaHQ6IDQxMHB4O1xyXG59XHJcblxyXG5cclxuLnpvb20ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMDVzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLnpvb206aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbn1cclxuXHJcbi5odnJib3gsXHJcbi5odnJib3ggKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaHZyYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG4uaHZyYm94IGltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl9ib3R0b20ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl90b3Age1xyXG5cdC8qIG9wYWNpdHk6IDA7ICovXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTJweDtcclxuXHQvKiBsZWZ0OiAtN3B4OyAqL1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogLTNweDtcclxuXHQvKiB3aWR0aDogODclOyAqL1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCByZ2JhKDI1NSwgMCwgMCwgMCkgMTMwJSk7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0XHJcbn1cclxuLmh2cmJveDpob3ZlciAuaHZyYm94LWxheWVyX3RvcCxcclxuLmh2cmJveC5hY3RpdmUgLmh2cmJveC1sYXllcl90b3Age1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLmh2cmJveCAuaHZyYm94LXRleHQge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMjJweDtcclxuXHRib3R0b206IGluaGVyaXQ7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4vKiAuaHZyYm94IC5odnJib3gtdGV4dF9tb2JpbGUge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE3OSwgMTc5LCAxNzkpOyBcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNzksIDE3OSwgMTc5LCAwLjcpO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHRwYWRkaW5nLXRvcDogMnB4O1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmh2cmJveC5hY3RpdmUgLmh2cmJveC10ZXh0X21vYmlsZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcbi5tYXJnaW5fZGVza3tcclxuXHRtYXJnaW46IDAgOCU7XHJcbn1cclxuXHJcbi5tYXJnaW5fbW9ie1xyXG5cclxufVxyXG5cclxuXHJcbi5zaXplX2Rlc2t7XHJcblx0d2lkdGg6IDEzZW07XHJcblx0bWFyZ2luLWJvdHRvbTogNGVtO1xyXG59XHJcblxyXG5cclxuLnNpemVfbW9ie1xyXG5cclxufVxyXG5cclxuXHJcbi5ob3ZlcmVkX3Byb3B7XHJcblx0b3BhY2l0eTogMTtcclxuXHRsZWZ0OiAtMTJweDtcclxuXHR3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubm9uaG92ZXJlZHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGxlZnQ6IC0xMXB4O1xyXG5cdHdpZHRoOiA4OSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watch-list',
                templateUrl: './watch-list.component.html',
                styleUrls: ['./watch-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "mVkU":
/*!************************************************************!*\
  !*** ./src/app/third-carousel/third-carousel.component.ts ***!
  \************************************************************/
/*! exports provided: ThirdCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdCarouselComponent", function() { return ThirdCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function ThirdCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r7.onSelect(obj_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r6.title);
} }
function ThirdCarouselComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ThirdCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template, 6, 5, "div", 4);
} if (rf & 2) {
    const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r2);
} }
function ThirdCarouselComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ThirdCarouselComponent_ngb_carousel_2_1_ng_template_0_Template, 1, 1, "ng-template", 3);
} }
function ThirdCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThirdCarouselComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.array2d);
} }
class ThirdCarouselComponent {
    constructor(http, router, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.array2d = [];
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/popularMovies")
            .subscribe((data) => {
            console.log("data from third: ", data);
            this.displayData(data);
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                // i phone viewport
                // console.log("small view port");
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                // larger screens
                // console.log("does not match")
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    displayData(data) {
        this.json_data_list = data;
        this.get_array = this.json_data_list.popular_movies_section;
        // divide into 6 cards per slide
        console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
        var count = 0;
        var new_array = [];
        // for desktop screens
        if (this.desktop_screen_size) {
            for (let arr of this.get_array) {
                if (count == 6) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        // for mobile screens
        else {
            for (let arr of this.get_array) {
                if (count == 1) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        // console.log("array2d: ", this.array2d)
    }
    onSelect(img) {
        this.router.navigate(['/watch/movie', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.title;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "movie";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
}
ThirdCarouselComponent.ɵfac = function ThirdCarouselComponent_Factory(t) { return new (t || ThirdCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
ThirdCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThirdCarouselComponent, selectors: [["app-third-carousel"]], decls: 3, vars: 1, consts: [["class", "check_focus", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function ThirdCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ThirdCarouselComponent_ngb_carousel_2_Template, 2, 3, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array2d);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 1% 10%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 5%;\r\n    height: 410px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 8%;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.5%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 96%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: -14px;\r\n\twidth: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: -11px;\r\n\twidth: 89%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhpcmQtY2Fyb3VzZWwvdGhpcmQtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUdBO0VBQ0UsMEJBQTBCLEVBQUUsY0FBYztBQUM1Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Q0FFQyxzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsWUFBWTtBQUNiOztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1FQUFtRTtDQUNuRSxXQUFXOztBQUVaOztBQUNBOztDQUVDLFVBQVU7QUFDWDs7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGVBQWU7Q0FDZixVQUFVO0NBQ1YsU0FBUztDQUNULG1CQUFtQjtBQUNwQjs7QUFDQTs7Ozs7Ozs7OztHQVVHOztBQUdIO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBRXJCLGdCQUFnQjtBQUNsQjs7QUFHQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxVQUFVO0FBQ1giLCJmaWxlIjoic3JjL2FwcC90aGlyZC1jYXJvdXNlbC90aGlyZC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMSUgMTAlO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDExMCwgNjYsIDApO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWx7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbiAgICBoZWlnaHQ6IDQxMHB4O1xyXG59XHJcblxyXG5cclxuLnpvb20ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMDVzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLnpvb206aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbn1cclxuXHJcbi5odnJib3gsXHJcbi5odnJib3ggKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaHZyYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG4uaHZyYm94IGltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl9ib3R0b20ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl90b3Age1xyXG5cdC8qIG9wYWNpdHk6IDA7ICovXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTJweDtcclxuXHQvKiBsZWZ0OiAtMTFweDsgKi9cclxuXHRib3R0b206IC0zcHg7XHJcblx0Lyogd2lkdGg6IDg5JTsgKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgyNTUsIDAsIDAsIDApIDEzMCUpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdFxyXG59XHJcbi5odnJib3g6aG92ZXIgLmh2cmJveC1sYXllcl90b3AsXHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC10ZXh0IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDI2cHg7XHJcblx0Ym90dG9tOiBpbmhlcml0O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLyogLmh2cmJveCAuaHZyYm94LXRleHRfbW9iaWxlIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzksIDE3OSwgMTc5KTsgXHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTc5LCAxNzksIDE3OSwgMC43KTtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0cGFkZGluZy10b3A6IDJweDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtdGV4dF9tb2JpbGUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG5cclxuLmNoZWNrX2ZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGVja19mb2N1czpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuLmRlc2t0b3BfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDYlO1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLm1vYmlsZV9jbGFzc3tcclxuXHRtYXJnaW4tbGVmdDogMTAlO1xyXG5cdG1hcmdpbi10b3A6IDglO1xyXG59XHJcblxyXG4uZGVza193aWR0aHtcclxuXHR3aWR0aDogMTUuNSU7XHJcbn1cclxuXHJcbi5tb2Jfd2lkdGh7XHJcblx0d2lkdGg6IDk2JTtcclxufVxyXG5cclxuLmhvdmVyZWRfcHJvcHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdGxlZnQ6IC0xNHB4O1xyXG5cdHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5ub25ob3ZlcmVke1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0bGVmdDogLTExcHg7XHJcblx0d2lkdGg6IDg5JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-third-carousel',
                templateUrl: './third-carousel.component.html',
                styleUrls: ['./third-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "oXbR":
/*!************************************************************!*\
  !*** ./src/app/sixth-carousel/sixth-carousel.component.ts ***!
  \************************************************************/
/*! exports provided: SixthCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SixthCarouselComponent", function() { return SixthCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function SixthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SixthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r7.onSelect(obj_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r6.name);
} }
function SixthCarouselComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SixthCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template, 6, 5, "div", 4);
} if (rf & 2) {
    const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r2);
} }
function SixthCarouselComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SixthCarouselComponent_ngb_carousel_2_1_ng_template_0_Template, 1, 1, "ng-template", 3);
} }
function SixthCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SixthCarouselComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.array2d);
} }
class SixthCarouselComponent {
    constructor(http, router, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.array2d = [];
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/popularTV")
            .subscribe((data) => {
            console.log("data from sixth: ", data);
            this.displayData(data);
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                // i phone viewport
                // console.log("small view port");
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                // larger screens
                // console.log("does not match")
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    displayData(data) {
        this.json_data_list = data;
        this.get_array = this.json_data_list.popular_tv_shows_section;
        // divide into 6 cards per slide
        // console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
        var count = 0;
        var new_array = [];
        // for desktop screens
        if (screen.width > 600) {
            for (let arr of this.get_array) {
                if (count == 6) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        // for mobile screens
        else {
            for (let arr of this.get_array) {
                if (count == 1) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
    }
    onSelect(img) {
        this.router.navigate(['/watch/tv', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.name;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "tv";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
}
SixthCarouselComponent.ɵfac = function SixthCarouselComponent_Factory(t) { return new (t || SixthCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
SixthCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SixthCarouselComponent, selectors: [["app-sixth-carousel"]], decls: 3, vars: 1, consts: [["class", "check_focus", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function SixthCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SixthCarouselComponent_ngb_carousel_2_Template, 2, 3, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array2d);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 1% 10%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 5%;\r\n    height: 410px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 8%;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.5%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 96%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: -14px;\r\n\twidth: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: -11px;\r\n\twidth: 89%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l4dGgtY2Fyb3VzZWwvc2l4dGgtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUdBO0VBQ0UsMEJBQTBCLEVBQUUsY0FBYztBQUM1Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Q0FFQyxzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsWUFBWTtBQUNiOztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1FQUFtRTtDQUNuRSxXQUFXOztBQUVaOztBQUNBOztDQUVDLFVBQVU7QUFDWDs7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGVBQWU7Q0FDZixVQUFVO0NBQ1YsU0FBUztDQUNULG1CQUFtQjtBQUNwQjs7QUFDQTs7Ozs7Ozs7OztHQVVHOztBQUlIO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBRXJCLGdCQUFnQjtBQUNsQjs7QUFLQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxVQUFVO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9zaXh0aC1jYXJvdXNlbC9zaXh0aC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMSUgMTAlO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDExMCwgNjYsIDApO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWx7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbiAgICBoZWlnaHQ6IDQxMHB4O1xyXG59XHJcblxyXG5cclxuLnpvb20ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMDVzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLnpvb206aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbn1cclxuXHJcbi5odnJib3gsXHJcbi5odnJib3ggKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaHZyYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG4uaHZyYm94IGltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl9ib3R0b20ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC1sYXllcl90b3Age1xyXG5cdC8qIG9wYWNpdHk6IDA7ICovXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTJweDtcclxuXHQvKiBsZWZ0OiAtMTFweDsgKi9cclxuXHRib3R0b206IC0zcHg7XHJcblx0Lyogd2lkdGg6IDg5JTsgKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgyNTUsIDAsIDAsIDApIDEzMCUpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdFxyXG59XHJcbi5odnJib3g6aG92ZXIgLmh2cmJveC1sYXllcl90b3AsXHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC10ZXh0IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDI2cHg7XHJcblx0Ym90dG9tOiBpbmhlcml0O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLyogLmh2cmJveCAuaHZyYm94LXRleHRfbW9iaWxlIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzksIDE3OSwgMTc5KTsgXHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTc5LCAxNzksIDE3OSwgMC43KTtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0cGFkZGluZy10b3A6IDJweDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtdGV4dF9tb2JpbGUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG5cclxuXHJcbi5jaGVja19mb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tfZm9jdXM6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmRlc2t0b3BfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDYlO1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLm1vYmlsZV9jbGFzc3tcclxuXHRtYXJnaW4tbGVmdDogMTAlO1xyXG5cdG1hcmdpbi10b3A6IDglO1xyXG59XHJcblxyXG4uZGVza193aWR0aHtcclxuXHR3aWR0aDogMTUuNSU7XHJcbn1cclxuXHJcbi5tb2Jfd2lkdGh7XHJcblx0d2lkdGg6IDk2JTtcclxufVxyXG5cclxuLmhvdmVyZWRfcHJvcHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdGxlZnQ6IC0xNHB4O1xyXG5cdHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5ub25ob3ZlcmVke1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0bGVmdDogLTExcHg7XHJcblx0d2lkdGg6IDg5JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SixthCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sixth-carousel',
                templateUrl: './sixth-carousel.component.html',
                styleUrls: ['./sixth-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "r0S5":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie-cast/movie-cast.component */ "NjZ3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










function MovieDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const obj_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r9.onSelect(obj_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r8.title);
} }
function MovieDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_div_0_Template, 6, 5, "div", 27);
} if (rf & 2) {
    const arr_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r4);
} }
function MovieDetailsComponent_div_48_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsComponent_div_48_ngb_carousel_3_1_ng_template_0_Template, 1, 1, "ng-template", 26);
} }
function MovieDetailsComponent_div_48_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_48_ngb_carousel_3_1_Template, 1, 0, undefined, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r2.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.array2d);
} }
function MovieDetailsComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieDetailsComponent_div_48_ngb_carousel_3_Template, 2, 3, "ngb-carousel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.array2d);
} }
function MovieDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const obj_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r19.onSelect(obj_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r18.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r18.title);
} }
function MovieDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_div_0_Template, 6, 5, "div", 27);
} if (rf & 2) {
    const arr_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r14);
} }
function MovieDetailsComponent_div_49_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsComponent_div_49_ngb_carousel_3_1_ng_template_0_Template, 1, 1, "ng-template", 26);
} }
function MovieDetailsComponent_div_49_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_49_ngb_carousel_3_1_Template, 1, 0, undefined, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r12.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.array2d2);
} }
function MovieDetailsComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieDetailsComponent_div_49_ngb_carousel_3_Template, 2, 3, "ngb-carousel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.array2d2);
} }
const _c0 = function (a0, a1) { return { "alert-success": a0, "alert-danger": a1, "alert-dismissible": true }; };
class MovieDetailsComponent {
    constructor(http, router, route, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.get_array = [];
        this.array2d = [];
        this.get_array2 = [];
        this.array2d2 = [];
        // grab from localStorage
        this.added = false;
        this.buttonName = 'Add to Watchlist';
        this.alert_text = "";
        this.isVisible = false;
        // add to watchList - information is already in the localStorage
        // "watchlist" - will store only id's - sequence
        this.fetch_list_string = localStorage.watchlist;
        this.fetch_list_json = JSON.parse(this.fetch_list_string);
        this.watch_list = this.fetch_list_json.list;
    }
    toggle() {
        this.added = !this.added;
        //change the name of the button
        if (this.watch_list.includes(this.global_id) == false) {
            this.buttonName = "Remove from Watchlist";
            this.alert_text = "Added to watchlist.";
            this.watch_list.push(this.global_id);
        }
        else {
            this.buttonName = "Add to Watchlist";
            this.alert_text = "Removed from watchlist.";
            var index = this.watch_list.indexOf(this.global_id);
            if (index > -1) {
                this.watch_list.splice(index, 1);
            }
        }
        this.fetch_list_json.list = this.watch_list;
        var fetch_back_string = JSON.stringify(this.fetch_list_json);
        localStorage.setItem("watchlist", fetch_back_string);
        // make the alert box visible for 5 seconds or manually close
        if (this.isVisible) {
            return;
        }
        this.isVisible = true;
        setTimeout(() => this.isVisible = false, 5000);
    }
    closeIt() {
        this.isVisible = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number   
            this.global_id = +params['id'];
            if (this.watch_list.includes(this.global_id) == true) {
                this.buttonName = "Remove from Watchlist";
            }
            else {
                this.buttonName = "Add to Watchlist";
            }
            this.http.get(`http://localhost:3080/detailsPage/${this.id}`)
                .subscribe((data) => {
                console.log("data from movie detailsPage.js: ", data);
                this.displayData(data);
            });
            this.http.get(`http://localhost:3080/recMovies/${this.id}`)
                .subscribe((data) => {
                console.log("data from movie recMovies.js: ", data);
                this.json_recMovies = data;
                // recommended movies carousel
                this.get_array = this.json_recMovies.recMov;
                var count = 0;
                var new_array = [];
                this.array2d = [];
                // for desktop screens
                if (screen.width > 600) {
                    for (let arr of this.get_array) {
                        if (count == 6) {
                            this.array2d.push(new_array);
                            new_array = [arr];
                            count = 1;
                        }
                        else {
                            new_array.push(arr);
                            count += 1;
                        }
                    }
                    if (new_array.length > 0) {
                        this.array2d.push(new_array);
                    }
                }
                // for mobile screens
                else {
                    for (let arr of this.get_array) {
                        if (count == 1) {
                            this.array2d.push(new_array);
                            new_array = [arr];
                            count = 1;
                        }
                        else {
                            new_array.push(arr);
                            count += 1;
                        }
                    }
                    if (new_array.length > 0) {
                        this.array2d.push(new_array);
                    }
                }
                // console.log("array2d: ", this.array2d);
                // similar movies carousel
                this.get_array2 = this.json_recMovies.simMov;
                var count = 0;
                var new_array2 = [];
                this.array2d2 = [];
                // for desktop screens
                if (screen.width > 600) {
                    for (let arr of this.get_array2) {
                        if (count == 6) {
                            this.array2d2.push(new_array2);
                            new_array2 = [arr];
                            count = 1;
                        }
                        else {
                            new_array2.push(arr);
                            count += 1;
                        }
                    }
                    if (new_array2.length > 0) {
                        this.array2d2.push(new_array2);
                    }
                }
                // for mobile screens
                else {
                    for (let arr of this.get_array2) {
                        if (count == 1) {
                            this.array2d2.push(new_array2);
                            new_array2 = [arr];
                            count = 1;
                        }
                        else {
                            new_array2.push(arr);
                            count += 1;
                        }
                    }
                    if (new_array2.length > 0) {
                        this.array2d2.push(new_array2);
                    }
                }
                // console.log("array2d2: ", this.array2d2);
            });
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    displayData(data) {
        this.json_data_list = data;
    }
    onSelect(img) {
        this.router.navigate(['/watch/movie', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.title;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "movie";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
    // ngClasses
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 50, vars: 22, consts: [[1, "content_body", 2, "margin-bottom", "7em"], [1, "row", "mx-n4", "mx-sm-0"], [1, "col-sm-8"], [1, "embed-responsive", "embed-responsive-16by9"], ["suggestedQuality", "highres", 2, "float", "left", 3, "videoId"], [1, "col-sm-4", 2, "float", "left"], [1, "mt-4", "mt-sm-0"], [1, "light_color"], ["type", "button", "id", "bt", 1, "btn", "btn-primary", "btn-lg", 3, "click"], ["role", "alert", 1, "alert", "fade", "alert_box", "alert-dismissible", 3, "ngClass"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "row", "description", "mx-0", "mx-n2", "mx-sm-4"], [2, "width", "100%"], [1, "light_color", 2, "text-align", "justify"], [1, "share", "mx-0", "mx-n2", "mx-sm-4"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", "fa-2x", 2, "color", "#007bff"], ["target", "_blank", 1, "fb-share-button", 3, "href"], [1, "fa", "fa-facebook-square", "fa-2x", 2, "color", "#007bff"], ["class", "mt-sm-5 ml-sm-5 mr-sm-5 pb-5", 4, "ngIf"], [1, "mt-sm-5", "ml-sm-5", "mr-sm-5", "pb-5"], [1, "my-5"], ["class", "check_focus", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "youtube-player", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Genres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Spoken Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_Template_button_click_25_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_Template_button_click_30_listener() { return ctx.closeIt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-movie-cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MovieDetailsComponent_div_48_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MovieDetailsComponent_div_49_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx.json_data_list.movies_video_endpoint[0].key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.movies_details_endpoint[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.movies_details_endpoint[0].tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.json_data_list.movies_details_endpoint[0].release_date.slice(0, 4), " | \u2605 ", ctx.json_data_list.movies_details_endpoint[0].vote_average, " | ", ctx.json_data_list.movies_details_endpoint[0].runtime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.movies_details_endpoint[0].genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.movies_details_endpoint[0].spoken_languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx.alert_text == "Added to watchlist.", ctx.alert_text == "Removed from watchlist."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.alert_text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.json_data_list.movies_details_endpoint[0].overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx.json_data_list.movies_details_endpoint[0].title, "%0A&url=", ctx.json_data_list.movies_video_endpoint[0].create_video_link, "%0A&hashtags=USC,CSCI571,FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.json_data_list.movies_video_endpoint[0].create_video_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_recMovies.recMov.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.json_recMovies.simMov.length > 0);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_6__["MovieCastComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"]], styles: [".visible[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: translateY(1.25rem);\r\n}\r\n\r\n.content_body[_ngcontent-%COMP%]{\r\n  margin-left: 14%;\r\n  margin-right: 14%;\r\n  margin-top: 4em;\r\n}\r\n\r\n.title_and_all[_ngcontent-%COMP%]{\r\n  margin-left: 4em\r\n}\r\n\r\n.youtubeTitle_div[_ngcontent-%COMP%]{\r\n  height: -webkit-max-content;\r\n  height: max-content;\r\n}\r\n\r\n.youtube_div[_ngcontent-%COMP%]{\r\n  width: 10em;\r\n  height: 7em;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  \r\n}\r\n\r\n.share[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n  \r\n}\r\n\r\n.fa-twitter[_ngcontent-%COMP%]{\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 -6%;\r\n    height: 330px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.light_color[_ngcontent-%COMP%]{\r\n\tcolor: rgba(255, 255, 255, 0.616);\r\n}\r\n\r\n\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 0;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.6%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 88%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: 14px;\r\n    width: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: 14px;\r\n    width: 87%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBSUEsa0NBQWtDOztBQUVsQztJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBR0E7RUFDRSwwQkFBMEIsRUFBRSxjQUFjO0FBQzVDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztDQUVDLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1FQUFtRTtDQUNuRSxXQUFXOztBQUVaOztBQUNBOztDQUVDLFVBQVU7QUFDWDs7QUFDQTtFQUNFLGVBQWU7Q0FDaEIsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixlQUFlO0NBQ2YsVUFBVTtDQUNWLFNBQVM7Q0FDVCxtQkFBbUI7QUFDcEI7O0FBQ0E7Ozs7Ozs7Ozs7R0FVRzs7QUFJSDtDQUNDLGFBQWE7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUVyQixnQkFBZ0I7QUFDbEI7O0FBR0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBR0Esb0JBQW9COztBQUVwQjtDQUNDLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixVQUFVO0lBQ1AsVUFBVTtBQUNkOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFVBQVU7SUFDUCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aXNpYmxlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjI1cmVtKTtcclxufVxyXG5cclxuLmNvbnRlbnRfYm9keXtcclxuICBtYXJnaW4tbGVmdDogMTQlO1xyXG4gIG1hcmdpbi1yaWdodDogMTQlO1xyXG4gIG1hcmdpbi10b3A6IDRlbTtcclxufVxyXG5cclxuLnRpdGxlX2FuZF9hbGx7XHJcbiAgbWFyZ2luLWxlZnQ6IDRlbVxyXG59XHJcblxyXG4ueW91dHViZVRpdGxlX2RpdntcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4ueW91dHViZV9kaXZ7XHJcbiAgd2lkdGg6IDEwZW07XHJcbiAgaGVpZ2h0OiA3ZW07XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC8qIHBhZGRpbmctbGVmdDogMzBweDsgKi9cclxufVxyXG5cclxuLnNoYXJle1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgLyogcGFkZGluZy1sZWZ0OiAxNXB4OyAqL1xyXG59XHJcblxyXG4uZmEtdHdpdHRlcntcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIHJlY29tbWVuZGVkIG1vdmllcyAtIGNhcm91c2VsICovXHJcblxyXG4uY2FyZHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDExMCwgNjYsIDApO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWx7XHJcbiAgICBtYXJnaW46IDAgLTYlO1xyXG4gICAgaGVpZ2h0OiAzMzBweDtcclxufVxyXG5cclxuXHJcbi56b29tIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjA1czsgLyogQW5pbWF0aW9uICovXHJcbn1cclxuXHJcbi56b29tOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG59XHJcblxyXG4uaHZyYm94LFxyXG4uaHZyYm94ICoge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmh2cmJveCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmh2cmJveCBpbWcge1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uaHZyYm94IC5odnJib3gtbGF5ZXJfYm90dG9tIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaHZyYm94IC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHQvKiBvcGFjaXR5OiAwOyAqL1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0ycHg7XHJcblx0LyogbGVmdDogMTRweDsgKi9cclxuXHQvKiByaWdodDogMDsgKi9cclxuXHRib3R0b206IC0zcHg7XHJcblx0Lyogd2lkdGg6IDg3JTsgKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgyNTUsIDAsIDAsIDApIDEzMCUpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdFxyXG59XHJcbi5odnJib3g6aG92ZXIgLmh2cmJveC1sYXllcl90b3AsXHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtbGF5ZXJfdG9wIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5odnJib3ggLmh2cmJveC10ZXh0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDI2cHg7XHJcblx0Ym90dG9tOiBpbmhlcml0O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLyogLmh2cmJveCAuaHZyYm94LXRleHRfbW9iaWxlIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzksIDE3OSwgMTc5KTsgXHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTc5LCAxNzksIDE3OSwgMC43KTtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0cGFkZGluZy10b3A6IDJweDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5odnJib3guYWN0aXZlIC5odnJib3gtdGV4dF9tb2JpbGUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG5cclxuXHJcbi5jaGVja19mb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tfZm9jdXM6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcbi5saWdodF9jb2xvcntcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxNik7XHJcbn1cclxuXHJcblxyXG4vKiBjYXJvdXNlbHMgLSBjc3MgKi9cclxuXHJcbi5kZXNrdG9wX2NsYXNze1xyXG5cdG1hcmdpbi1sZWZ0OiA2JTtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tb2JpbGVfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDEwJTtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uZGVza193aWR0aHtcclxuXHR3aWR0aDogMTUuNiU7XHJcbn1cclxuXHJcbi5tb2Jfd2lkdGh7XHJcblx0d2lkdGg6IDg4JTtcclxufVxyXG5cclxuLmhvdmVyZWRfcHJvcHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdGxlZnQ6IDE0cHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubm9uaG92ZXJlZHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGxlZnQ6IDE0cHg7XHJcbiAgICB3aWR0aDogODclO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-details',
                templateUrl: './movie-details.component.html',
                styleUrls: ['./movie-details.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "uaHH":
/*!****************************************************************!*\
  !*** ./src/app/seventh-carousel/seventh-carousel.component.ts ***!
  \****************************************************************/
/*! exports provided: SeventhCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeventhCarouselComponent", function() { return SeventhCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function SeventhCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeventhCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const obj_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r7.onSelect(obj_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setMargins());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setWidth());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setHover());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r6.name);
} }
function SeventhCarouselComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeventhCarouselComponent_ngb_carousel_2_1_ng_template_0_div_0_Template, 6, 5, "div", 4);
} if (rf & 2) {
    const arr_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arr_r2);
} }
function SeventhCarouselComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeventhCarouselComponent_ngb_carousel_2_1_ng_template_0_Template, 1, 1, "ng-template", 3);
} }
function SeventhCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeventhCarouselComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false)("ngClass", ctx_r0.noIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.array2d);
} }
class SeventhCarouselComponent {
    constructor(http, router, breakpointObserver) {
        this.http = http;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.array2d = [];
    }
    ngOnInit() {
        this.http.get("http://localhost:3080/topTV")
            .subscribe((data) => {
            console.log("data from seventh: ", data);
            this.displayData(data);
        });
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile_screen_size = true;
                this.desktop_screen_size = false;
            }
            else {
                this.mobile_screen_size = false;
                this.desktop_screen_size = true;
            }
        });
    }
    setMargins() {
        return {
            desktop_class: this.desktop_screen_size,
            mobile_class: this.mobile_screen_size
        };
    }
    setWidth() {
        return {
            desk_width: this.desktop_screen_size,
            mob_width: this.mobile_screen_size
        };
    }
    setHover() {
        return {
            hovered_prop: this.mobile_screen_size,
            nonhovered: this.desktop_screen_size
        };
    }
    noIndicators() {
        return {
            no_indicators: this.mobile_screen_size
        };
    }
    displayData(data) {
        this.json_data_list = data;
        this.get_array = this.json_data_list.top_rated_tv_shows_section;
        // divide into 6 cards per slide
        // console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
        var count = 0;
        var new_array = [];
        // for desktop screens
        if (screen.width > 600) {
            for (let arr of this.get_array) {
                if (count == 6) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
        // for mobile screens
        else {
            for (let arr of this.get_array) {
                if (count == 1) {
                    this.array2d.push(new_array);
                    new_array = [arr];
                    count = 1;
                }
                else {
                    new_array.push(arr);
                    count += 1;
                }
            }
            if (new_array.length > 0) {
                this.array2d.push(new_array);
            }
        }
    }
    onSelect(img) {
        this.router.navigate(['/watch/tv', img.id]);
        // store in localStorage from here - both empty
        var fetch_string = localStorage.getItem("cont_watching");
        var fetch_string_json = JSON.parse(fetch_string);
        var id_to_add = img.id;
        if (fetch_string_json.id_array.includes(id_to_add)) {
            // get the index value - remove - append
            var index = fetch_string_json.id_array.indexOf(id_to_add);
            if (index > -1) {
                fetch_string_json.id_array.splice(index, 1);
            }
        }
        fetch_string_json.id_array.push(id_to_add);
        var new_json_to_set = JSON.stringify(fetch_string_json);
        localStorage.setItem("cont_watching", new_json_to_set);
        // let's add to cont_watching_objects
        // string, convert into json, manipulate, convert to string
        var fetch_string2 = localStorage.getItem("cont_watching_objects");
        var fetch_string_json2 = JSON.parse(fetch_string2);
        var extract_id = img.id;
        var extract_title = img.name;
        var extract_poster_path = img.poster_path;
        // get_array_with_objects
        fetch_string_json2[extract_id] = {
            "lookup_id": extract_id,
            "lookup_title": extract_title,
            "lookup_poster_path": extract_poster_path
        };
        var new_json_to_set2 = JSON.stringify(fetch_string_json2);
        localStorage.setItem("cont_watching_objects", new_json_to_set2);
        // setting the value of media_type in localStorage - for every click
        var sss = localStorage.getItem("media_type");
        var sss_json = JSON.parse(sss);
        sss_json[extract_id] = "tv";
        var sss_json_string = JSON.stringify(sss_json);
        localStorage.setItem("media_type", sss_json_string);
    }
}
SeventhCarouselComponent.ɵfac = function SeventhCarouselComponent_Factory(t) { return new (t || SeventhCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
SeventhCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeventhCarouselComponent, selectors: [["app-seventh-carousel"]], decls: 3, vars: 1, consts: [["class", "check_focus", 3, "interval", "ngClass", 4, "ngIf"], [1, "check_focus", 3, "interval", "ngClass"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "zoom", "hvrbox", 3, "ngClass", "click"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "hvrbox-layer_top", 3, "ngClass"], [1, "hvrbox-text"]], template: function SeventhCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SeventhCarouselComponent_ngb_carousel_2_Template, 2, 3, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array2d);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 1% 10%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgba(145, 110, 66, 0);\r\n    margin: 0 0;\r\n    padding: 0 14px;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    margin: 0 5%;\r\n    height: 410px;\r\n}\r\n\r\n.zoom[_ngcontent-%COMP%] {\r\n  transition: transform .05s; \r\n}\r\n\r\n.zoom[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%], .hvrbox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_bottom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\t\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\t\r\n\tbottom: -3px;\r\n\t\r\n\tbackground: linear-gradient(to top, black, rgba(255, 0, 0, 0) 130%);\r\n\tcolor: #fff;\r\n\t\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]:hover   .hvrbox-layer_top[_ngcontent-%COMP%], .hvrbox.active[_ngcontent-%COMP%]   .hvrbox-layer_top[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n\r\n.hvrbox[_ngcontent-%COMP%]   .hvrbox-text[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tposition: absolute;\r\n\tleft: 26px;\r\n\tbottom: inherit;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.check_focus[_ngcontent-%COMP%]{\r\n\toutline: none;\r\n}\r\n\r\n.check_focus[_ngcontent-%COMP%]:focus {\r\n  border-color: inherit;\r\n  box-shadow: none;\r\n}\r\n\r\n.desktop_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 6%;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.mobile_class[_ngcontent-%COMP%]{\r\n\tmargin-left: 10%;\r\n\tmargin-top: 8%;\r\n}\r\n\r\n.desk_width[_ngcontent-%COMP%]{\r\n\twidth: 15.5%;\r\n}\r\n\r\n.mob_width[_ngcontent-%COMP%]{\r\n\twidth: 96%;\r\n}\r\n\r\n.hovered_prop[_ngcontent-%COMP%]{\r\n\topacity: 1;\r\n\tleft: -14px;\r\n\twidth: 90%;\r\n}\r\n\r\n.nonhovered[_ngcontent-%COMP%]{\r\n\topacity: 0;\r\n\tleft: -11px;\r\n\twidth: 89%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V2ZW50aC1jYXJvdXNlbC9zZXZlbnRoLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFHQTtFQUNFLDBCQUEwQixFQUFFLGNBQWM7QUFDNUM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0NBRUMsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixtRUFBbUU7Q0FDbkUsV0FBVzs7QUFFWjs7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixlQUFlO0NBQ2YsVUFBVTtDQUNWLFNBQVM7Q0FDVCxtQkFBbUI7QUFDcEI7O0FBQ0E7Ozs7Ozs7Ozs7R0FVRzs7QUFJSDtDQUNDLGFBQWE7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUVyQixnQkFBZ0I7QUFDbEI7O0FBSUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsVUFBVTtBQUNYIiwiZmlsZSI6InNyYy9hcHAvc2V2ZW50aC1jYXJvdXNlbC9zZXZlbnRoLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAxJSAxMCU7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NSwgMTEwLCA2NiwgMCk7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbHtcclxuICAgIG1hcmdpbjogMCA1JTtcclxuICAgIGhlaWdodDogNDEwcHg7XHJcbn1cclxuXHJcblxyXG4uem9vbSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4wNXM7IC8qIEFuaW1hdGlvbiAqL1xyXG59XHJcblxyXG4uem9vbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxufVxyXG5cclxuLmh2cmJveCxcclxuLmh2cmJveCAqIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5odnJib3gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5odnJib3ggaW1nIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmh2cmJveCAuaHZyYm94LWxheWVyX2JvdHRvbSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmh2cmJveCAuaHZyYm94LWxheWVyX3RvcCB7XHJcblx0Lyogb3BhY2l0eTogMDsgKi9cclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMnB4O1xyXG5cdC8qIGxlZnQ6IC0xMXB4OyAqL1xyXG5cdGJvdHRvbTogLTNweDtcclxuXHQvKiB3aWR0aDogODklOyAqL1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCByZ2JhKDI1NSwgMCwgMCwgMCkgMTMwJSk7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0XHJcbn1cclxuLmh2cmJveDpob3ZlciAuaHZyYm94LWxheWVyX3RvcCxcclxuLmh2cmJveC5hY3RpdmUgLmh2cmJveC1sYXllcl90b3Age1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLmh2cmJveCAuaHZyYm94LXRleHQge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMjZweDtcclxuXHRib3R0b206IGluaGVyaXQ7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG4vKiAuaHZyYm94IC5odnJib3gtdGV4dF9tb2JpbGUge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE3OSwgMTc5LCAxNzkpOyBcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNzksIDE3OSwgMTc5LCAwLjcpO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHRwYWRkaW5nLXRvcDogMnB4O1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmh2cmJveC5hY3RpdmUgLmh2cmJveC10ZXh0X21vYmlsZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuLmNoZWNrX2ZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGVja19mb2N1czpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi5kZXNrdG9wX2NsYXNze1xyXG5cdG1hcmdpbi1sZWZ0OiA2JTtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tb2JpbGVfY2xhc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDEwJTtcclxuXHRtYXJnaW4tdG9wOiA4JTtcclxufVxyXG5cclxuLmRlc2tfd2lkdGh7XHJcblx0d2lkdGg6IDE1LjUlO1xyXG59XHJcblxyXG4ubW9iX3dpZHRoe1xyXG5cdHdpZHRoOiA5NiU7XHJcbn1cclxuXHJcbi5ob3ZlcmVkX3Byb3B7XHJcblx0b3BhY2l0eTogMTtcclxuXHRsZWZ0OiAtMTRweDtcclxuXHR3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubm9uaG92ZXJlZHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGxlZnQ6IC0xMXB4O1xyXG5cdHdpZHRoOiA4OSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeventhCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seventh-carousel',
                templateUrl: './seventh-carousel.component.html',
                styleUrls: ['./seventh-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "r0S5");
/* harmony import */ var _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tv-details/tv-details.component */ "6AZv");
/* harmony import */ var _watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watch-list/watch-list.component */ "kIlJ");








const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'mylist',
        component: _watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_5__["WatchListComponent"]
    },
    {
        path: 'watch/movie/:id',
        component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"]
    },
    {
        path: 'watch/tv/:id',
        component: _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_4__["TvDetailsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    _watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_5__["WatchListComponent"],
    _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"],
    _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_4__["TvDetailsComponent"]
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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