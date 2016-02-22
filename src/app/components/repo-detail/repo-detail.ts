import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router";

@Component({
    selector: 'repo-detail',
    directives: [],
    template : `<h1 *ngIf="repo">user details for {{repo}}</h1>`
})
export class RepoDetailComponent {
    repo :string;
    constructor(routeParams:RouteParams) {
        this.repo = routeParams.get('repo');
    }
}
