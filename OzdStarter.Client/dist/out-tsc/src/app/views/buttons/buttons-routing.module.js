"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var buttons_component_1 = require("./buttons.component");
var dropdowns_component_1 = require("./dropdowns.component");
var brand_buttons_component_1 = require("./brand-buttons.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Buttons'
        },
        children: [
            {
                path: 'buttons',
                component: buttons_component_1.ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'dropdowns',
                component: dropdowns_component_1.DropdownsComponent,
                data: {
                    title: 'Dropdowns'
                }
            },
            {
                path: 'brand-buttons',
                component: brand_buttons_component_1.BrandButtonsComponent,
                data: {
                    title: 'Brand buttons'
                }
            }
        ]
    }
];
var ButtonsRoutingModule = /** @class */ (function () {
    function ButtonsRoutingModule() {
    }
    ButtonsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ButtonsRoutingModule);
    return ButtonsRoutingModule;
}());
exports.ButtonsRoutingModule = ButtonsRoutingModule;
//# sourceMappingURL=buttons-routing.module.js.map