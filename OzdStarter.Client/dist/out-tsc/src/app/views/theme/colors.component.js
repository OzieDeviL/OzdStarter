"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _1 = require("@coreui/coreui/js/src/utilities/");
var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
    }
    ColorsComponent.prototype.themeColors = function () {
        Array.from(document.querySelectorAll('.theme-color')).forEach(function (el) {
            var elem = document.getElementsByClassName(el.classList[0])[0];
            var background = _1.getStyle('background-color', elem);
            var table = document.createElement('table');
            table.innerHTML = "\n        <table class=\"w-100\">\n          <tr>\n            <td class=\"text-muted\">HEX:</td>\n            <td class=\"font-weight-bold\">" + _1.rgbToHex(background) + "</td>\n          </tr>\n          <tr>\n            <td class=\"text-muted\">RGB:</td>\n            <td class=\"font-weight-bold\">" + background + "</td>\n          </tr>\n        </table>\n      ";
            el.parentNode.appendChild(table);
        });
    };
    ColorsComponent.prototype.ngOnInit = function () {
        this.themeColors();
    };
    ColorsComponent = __decorate([
        core_1.Component({
            templateUrl: 'colors.component.html'
        })
    ], ColorsComponent);
    return ColorsComponent;
}());
exports.ColorsComponent = ColorsComponent;
//# sourceMappingURL=colors.component.js.map