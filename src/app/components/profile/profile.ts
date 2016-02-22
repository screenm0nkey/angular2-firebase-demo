import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchBarComponent} from '../search-bar/search-bar'
import {RepoDetailComponent} from '../repo-detail/repo-detail'


@Component({
    selector: 'home',
    providers: [],
    directives: [SearchBarComponent, ROUTER_DIRECTIVES],
    pipes: [],
    template : `
        <search-bar></search-bar>
        <hr>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    new Route({path: '/:repo', component: RepoDetailComponent, name: 'RepoDetail'}),
])
export class ProfileComponent {
    constructor() {

    }
}
