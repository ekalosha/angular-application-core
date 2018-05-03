// outsource
import { NgModule } from '@angular/core';
import { UIRouterModule } from "@uirouter/angular";
// app
import { LoginPage } from './login.component';

/**
 * Metada of home page
 *
 *
 */
@NgModule({
    declarations: [ LoginPage ],
    bootstrap: [],
    exports: [],
    imports: [
        UIRouterModule, // directives uiSref and uiSrefActive
    ],
    providers: [],
})
export class LoginModule { }

/**
 * Metada of home state
 *
 *
 */
export const loginState = {
    name: 'login',
    url: '/login',
    component: LoginPage,
    resolve: [
        { 
            token: 'people',
            deps: [], 
            resolveFn: () => {
                return new Promise(( resolve, reject ) => {
                    setTimeout(resolve, 2 * 1000);
                });
            }
        }
    ]
};
