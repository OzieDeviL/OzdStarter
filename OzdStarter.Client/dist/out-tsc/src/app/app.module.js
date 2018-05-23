"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var modal_1 = require("ngx-bootstrap/modal");
var angular_1 = require("@coreui/angular");
// Import containers
var containers_1 = require("./containers");
var app_component_1 = require("./app.component");
var _404_component_1 = require("./views/error/404.component");
var _500_component_1 = require("./views/error/500.component");
// Import routing module
var app_routing_1 = require("./app.routing");
// Import 3rd party components
var dropdown_1 = require("ngx-bootstrap/dropdown");
var tabs_1 = require("ngx-bootstrap/tabs");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var account_module_1 = require("./account/account.module");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var APP_CONTAINERS = [
    containers_1.DefaultLayoutComponent,
    containers_1.LayoutComponent
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.AppRoutingModule,
                angular_1.AppAsideModule,
                angular_1.AppBreadcrumbModule.forRoot(),
                angular_1.AppFooterModule,
                angular_1.AppHeaderModule,
                angular_1.AppSidebarModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                dropdown_1.BsDropdownModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                ng2_charts_1.ChartsModule,
                forms_1.ReactiveFormsModule,
                modal_1.ModalModule,
                account_module_1.AccountModule,
                http_1.HttpClientModule,
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(APP_CONTAINERS, [
                _404_component_1.P404Component,
                _500_component_1.P500Component,
            ]),
            exports: [
                forms_1.ReactiveFormsModule,
                modal_1.ModalModule,
                http_1.HttpClientModule,
            ],
            providers: [{
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map