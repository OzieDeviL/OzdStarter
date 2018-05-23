"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var buttons_component_1 = require("./buttons.component");
var brand_buttons_component_1 = require("./brand-buttons.component");
// Dropdowns Component
var dropdown_1 = require("ngx-bootstrap/dropdown");
var dropdowns_component_1 = require("./dropdowns.component");
// Buttons Routing
var buttons_routing_module_1 = require("./buttons-routing.module");
// Angular
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                buttons_routing_module_1.ButtonsRoutingModule,
                dropdown_1.BsDropdownModule.forRoot(),
                forms_1.FormsModule
            ],
            declarations: [
                buttons_component_1.ButtonsComponent,
                dropdowns_component_1.DropdownsComponent,
                brand_buttons_component_1.BrandButtonsComponent
            ]
        })
    ], ButtonsModule);
    return ButtonsModule;
}());
exports.ButtonsModule = ButtonsModule;
//# sourceMappingURL=buttons.module.js.map