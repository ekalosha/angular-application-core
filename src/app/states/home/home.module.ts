// outsource
import { NgModule } from '@angular/core';
import { UIRouterModule } from "@uirouter/angular";
// app
import { HomePage } from './home.component';

/**
 * Metada of home page
 *
 *
 */
@NgModule({
    declarations: [ HomePage ],
    bootstrap: [],
    exports: [],
    imports: [
        UIRouterModule, // directives uiSref and uiSrefActive
    ],
    providers: [],
})
export class HomeModule { }

/**
 * Metada of home state
 *
 *
 */
export const homeState = {
    name: 'home',
    url: '/home',
    component: HomePage,
};
