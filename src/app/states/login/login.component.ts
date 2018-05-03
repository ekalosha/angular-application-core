// outsource
import { Component } from '@angular/core';
import { StateService } from '@uirouter/angular';
// app

/**
 * Root application component
 *
 *
 */
@Component({
    selector: '[id="login"]',
    templateUrl: './login.html',
})
export class LoginPage {
    /**
     * using vm to dafine publick data for the page 
     * and deleagate some properties
     *
     */
    public vm = {

    }
    
    /**
     * constructor holder to define what exactly past in public vm object
     * 
     *
     */
    constructor ( private state: StateService ) {

    }
    
    private goHome () {
        this.state.go('home');
    }
};
