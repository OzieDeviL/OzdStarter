"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flags_component_1 = require("./flags.component");
var font_awesome_component_1 = require("./font-awesome.component");
var simple_line_icons_component_1 = require("./simple-line-icons.component");
var icons_routing_module_1 = require("./icons-routing.module");
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = __decorate([
        core_1.NgModule({
            imports: [icons_routing_module_1.IconsRoutingModule],
            declarations: [
                flags_component_1.FlagsComponent,
                font_awesome_component_1.FontAwesomeComponent,
                simple_line_icons_component_1.SimpleLineIconsComponent
            ]
        })
    ], IconsModule);
    return IconsModule;
}());
exports.IconsModule = IconsModule;
//# sourceMappingURL=icons.module.js.map