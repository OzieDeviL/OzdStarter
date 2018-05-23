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
var platform_browser_1 = require("@angular/platform-browser");
var PopoversComponent = /** @class */ (function () {
    function PopoversComponent(sanitizer) {
        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-warning\">Never trust not sanitized <code>HTML</code>!!!</span>";
        this.html = sanitizer.sanitize(core_1.SecurityContext.HTML, this.html);
    }
    PopoversComponent = __decorate([
        core_1.Component({
            templateUrl: 'popovers.component.html'
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], PopoversComponent);
    return PopoversComponent;
}());
exports.PopoversComponent = PopoversComponent;
//# sourceMappingURL=popovers.component.js.map