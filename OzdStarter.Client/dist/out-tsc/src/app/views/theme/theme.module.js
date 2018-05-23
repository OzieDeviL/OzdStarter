"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var colors_component_1 = require("./colors.component");
var typography_component_1 = require("./typography.component");
// Theme Routing
var theme_routing_module_1 = require("./theme-routing.module");
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                theme_routing_module_1.ThemeRoutingModule
            ],
            declarations: [
                colors_component_1.ColorsComponent,
                typography_component_1.TypographyComponent
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());
exports.ThemeModule = ThemeModule;
//# sourceMappingURL=theme.module.js.map