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
var forms_1 = require("@angular/forms");
var custom_account_validators_1 = require("../../custom-account-validators");
var account_service_1 = require("../account.service");
var account_data_models_1 = require("../account-data-models");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, accountService) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.vendorOauthImplemented = {
            any: false,
            facebook: false,
            twitter: false
        };
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.registrationForm = this.formBuilder.group({ email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])
            ],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,256})\S$/)])],
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: custom_account_validators_1.CustomAccountValidators.matchPassword });
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registrationForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registrationForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () { return this.registrationForm.get('confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    ;
    RegisterComponent.prototype.onSubmit = function () {
        if (this.registrationForm.valid) {
            var userRegistration = new account_data_models_1.AccountRegistration(this.email.value, this.password.value, this.confirmPassword.value);
            this.accountService.postNewUserRegistration(userRegistration)
                .subscribe();
            //TODO Modal Pop-up
            this.router.navigateByUrl(this.returnUrl);
        }
        else {
            throw new console.error("Invalid Form");
        }
        console.log(this.registrationForm.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "returnUrl", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: 'register.component.html',
            inputs: ["returnUrl"],
            providers: [account_service_1.AccountService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, account_service_1.AccountService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map