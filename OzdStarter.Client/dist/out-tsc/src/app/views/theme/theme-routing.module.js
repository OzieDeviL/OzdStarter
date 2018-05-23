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
var colors_component_1 = require("./colors.component");
var typography_component_1 = require("./typography.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Theme'
        },
        children: [
            {
                path: 'colors',
                component: colors_component_1.ColorsComponent,
                data: {
                    title: 'Colors'
                }
            },
            {
                path: 'typography',
                component: typography_component_1.TypographyComponent,
                data: {
                    title: 'Typography'
                }
            }
        ]
    }
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());
exports.ThemeRoutingModule = ThemeRoutingModule;
//# sourceMappingURL=theme-routing.module.js.map