import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'home',
    providers: [],
    directives: [],
    pipes: [],
    template : `
        <h3>This is home</h3>
    `
})
export class HomeComponent {
    constructor() {

    }
}