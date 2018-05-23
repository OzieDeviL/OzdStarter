"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    // it('should create the app', async(() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app).toBeTruthy();
    // }));
    // it(`should have as title 'app'`, async(() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.title).toEqual('app');
    // }));
    // it('should render title in a h1 tag', async(() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    // }));
});
//# sourceMappingURL=app.component.spec.js.map