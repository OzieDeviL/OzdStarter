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
var http_1 = require("@angular/common/http");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }
    AccountService.prototype.postNewUserRegistration = function (newUserRegistration) {
        return this.http.post(this.accountResources.prefix + this.accountResources.register, newUserRegistration, this.httpOptions).pipe(operators_1.tap(function (registration) { return console.log("successful registration attempt"); }), operators_1.catchError(this.handleError('postRegistration', [])));
    };
    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
   */
    AccountService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return of_1.of(result);
        };
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map