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
var cards_component_1 = require("./cards.component");
var forms_component_1 = require("./forms.component");
var switches_component_1 = require("./switches.component");
var tables_component_1 = require("./tables.component");
var tabs_component_1 = require("./tabs.component");
var carousels_component_1 = require("./carousels.component");
var collapses_component_1 = require("./collapses.component");
var paginations_component_1 = require("./paginations.component");
var popovers_component_1 = require("./popovers.component");
var progress_component_1 = require("./progress.component");
var tooltips_component_1 = require("./tooltips.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Base'
        },
        children: [
            {
                path: 'cards',
                component: cards_component_1.CardsComponent,
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: forms_component_1.FormsComponent,
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'switches',
                component: switches_component_1.SwitchesComponent,
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: tables_component_1.TablesComponent,
                data: {
                    title: 'Tables'
                }
            },
            {
                path: 'tabs',
                component: tabs_component_1.TabsComponent,
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'carousels',
                component: carousels_component_1.CarouselsComponent,
                data: {
                    title: 'Carousels'
                }
            },
            {
                path: 'collapses',
                component: collapses_component_1.CollapsesComponent,
                data: {
                    title: 'Collapses'
                }
            },
            {
                path: 'paginations',
                component: paginations_component_1.PaginationsComponent,
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'popovers',
                component: popovers_component_1.PopoversComponent,
                data: {
                    title: 'Popover'
                }
            },
            {
                path: 'progress',
                component: progress_component_1.ProgressComponent,
                data: {
                    title: 'Progress'
                }
            },
            {
                path: 'tooltips',
                component: tooltips_component_1.TooltipsComponent,
                data: {
                    title: 'Tooltips'
                }
            }
        ]
    }
];
var BaseRoutingModule = /** @class */ (function () {
    function BaseRoutingModule() {
    }
    BaseRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], BaseRoutingModule);
    return BaseRoutingModule;
}());
exports.BaseRoutingModule = BaseRoutingModule;
//# sourceMappingURL=base-routing.module.js.map