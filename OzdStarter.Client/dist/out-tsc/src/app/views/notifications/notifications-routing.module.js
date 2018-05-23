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
var alerts_component_1 = require("./alerts.component");
var badges_component_1 = require("./badges.component");
var modals_component_1 = require("./modals.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Notifications'
        },
        children: [
            {
                path: 'alerts',
                component: alerts_component_1.AlertsComponent,
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'badges',
                component: badges_component_1.BadgesComponent,
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'modals',
                component: modals_component_1.ModalsComponent,
                data: {
                    title: 'Modals'
                }
            }
        ]
    }
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());
exports.NotificationsRoutingModule = NotificationsRoutingModule;
//# sourceMappingURL=notifications-routing.module.js.map