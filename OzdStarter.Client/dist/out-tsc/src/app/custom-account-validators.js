"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var CustomAccountValidators = /** @class */ (function (_super) {
    __extends(CustomAccountValidators, _super);
    function CustomAccountValidators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomAccountValidators.matchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('confirmPassword').setErrors({ matchPassword: true });
        }
        else {
            return null;
        }
    };
    return CustomAccountValidators;
}(forms_1.Validators));
exports.CustomAccountValidators = CustomAccountValidators;
//# sourceMappingURL=custom-account-validators.js.map