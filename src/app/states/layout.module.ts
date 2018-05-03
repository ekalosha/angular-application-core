// outsource
import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule } from "@uirouter/angular";

import { LayoutComponent } from './layout.component';
// app states
import { homeState, HomeModule } from './home/home.module';
import { loginState, LoginModule } from './login/login.module';



/**
 * define all pages within application
 *
 *
 */
export const routing: RootModule = {
    useHash: true,
    otherwise: '/home',
    states: [
        homeState,
        loginState,
    ],
};

/**
 * Layout application module
 *
 *
 */
@NgModule({
    declarations: [ LayoutComponent ],
    imports: [
        HomeModule,
        LoginModule,
        UIRouterModule.forRoot(routing)
    ],
    exports: [ UIRouterModule ]
})
export class LayoutModule { }
