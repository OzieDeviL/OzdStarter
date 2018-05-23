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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var cards_component_1 = require("./cards.component");
// Forms Component
var forms_component_1 = require("./forms.component");
var switches_component_1 = require("./switches.component");
var tables_component_1 = require("./tables.component");
// Tabs Component
var tabs_1 = require("ngx-bootstrap/tabs");
var tabs_component_1 = require("./tabs.component");
// Carousel Component
var carousel_1 = require("ngx-bootstrap/carousel");
var carousels_component_1 = require("./carousels.component");
// Collapse Component
var collapse_1 = require("ngx-bootstrap/collapse");
var collapses_component_1 = require("./collapses.component");
// Dropdowns Component
var dropdown_1 = require("ngx-bootstrap/dropdown");
// Pagination Component
var pagination_1 = require("ngx-bootstrap/pagination");
var popovers_component_1 = require("./popovers.component");
// Popover Component
var popover_1 = require("ngx-bootstrap/popover");
var paginations_component_1 = require("./paginations.component");
// Progress Component
var progressbar_1 = require("ngx-bootstrap/progressbar");
var progress_component_1 = require("./progress.component");
// Tooltip Component
var tooltip_1 = require("ngx-bootstrap/tooltip");
var tooltips_component_1 = require("./tooltips.component");
// Components Routing
var base_routing_module_1 = require("./base-routing.module");
var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                base_routing_module_1.BaseRoutingModule,
                dropdown_1.BsDropdownModule.forRoot(),
                tabs_1.TabsModule,
                carousel_1.CarouselModule.forRoot(),
                collapse_1.CollapseModule.forRoot(),
                pagination_1.PaginationModule.forRoot(),
                popover_1.PopoverModule.forRoot(),
                progressbar_1.ProgressbarModule.forRoot(),
                tooltip_1.TooltipModule.forRoot()
            ],
            declarations: [
                cards_component_1.CardsComponent,
                forms_component_1.FormsComponent,
                switches_component_1.SwitchesComponent,
                tables_component_1.TablesComponent,
                tabs_component_1.TabsComponent,
                carousels_component_1.CarouselsComponent,
                collapses_component_1.CollapsesComponent,
                paginations_component_1.PaginationsComponent,
                popovers_component_1.PopoversComponent,
                progress_component_1.ProgressComponent,
                tooltips_component_1.TooltipsComponent
            ]
        })
    ], BaseModule);
    return BaseModule;
}());
exports.BaseModule = BaseModule;
//# sourceMappingURL=base.module.js.map