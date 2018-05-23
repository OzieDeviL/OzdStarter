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
var flags_component_1 = require("./flags.component");
var font_awesome_component_1 = require("./font-awesome.component");
var simple_line_icons_component_1 = require("./simple-line-icons.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Icons'
        },
        children: [
            {
                path: 'font-awesome',
                component: font_awesome_component_1.FontAwesomeComponent,
                data: {
                    title: 'Font Awesome'
                }
            },
            {
                path: 'flags',
                component: flags_component_1.FlagsComponent,
                data: {
                    title: 'Flags'
                }
            },
            {
                path: 'simple-line-icons',
                component: simple_line_icons_component_1.SimpleLineIconsComponent,
                data: {
                    title: 'Simple Line Icons'
                }
            }
        ]
    }
];
var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
}());
exports.IconsRoutingModule = IconsRoutingModule;
//# sourceMappingURL=icons-routing.module.js.map