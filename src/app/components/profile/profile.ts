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
        <div class="col-sm-12">
            <search-bar></search-bar>
        </div>
        <div class="col-sm-12">
            <router-outlet></router-outlet>
        </div>

    `
})
@RouteConfig([
    new Route({path: '/:repo', component: RepoDetailComponent, name: 'RepoDetail'}),
])
export class ProfileComponent {
    constructor() {

    }
}
