"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropdownsComponent = /** @class */ (function () {
    function DropdownsComponent() {
        this.status = { isOpen: false };
        this.disabled = false;
        this.isDropup = true;
        this.autoClose = false;
        this.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];
    }
    DropdownsComponent.prototype.onHidden = function () {
        console.log('Dropdown is hidden');
    };
    DropdownsComponent.prototype.onShown = function () {
        console.log('Dropdown is shown');
    };
    DropdownsComponent.prototype.isOpenChange = function () {
        console.log('Dropdown state is changed');
    };
    DropdownsComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isOpen = !this.status.isOpen;
    };
    DropdownsComponent.prototype.change = function (value) {
        this.status.isOpen = value;
    };
    DropdownsComponent = __decorate([
        core_1.Component({
            templateUrl: 'dropdowns.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], DropdownsComponent);
    return DropdownsComponent;
}());
exports.DropdownsComponent = DropdownsComponent;
//# sourceMappingURL=dropdowns.component.js.map