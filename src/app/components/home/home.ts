import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {Github} from "../../services/github";

@Component({
    selector: 'home',
    template : `
        <h3>This is home.</h3>
        <a href="#" (click)="goToProfile($event)">Go to profile page</a>
    `
})
export class HomeComponent {
    defaultGithubUser : string;

    constructor(private _router:Router, github : Github) {
        this.defaultGithubUser = github.defaultGithubUser;
    }

    goToProfile(evt) {
        evt.preventDefault();
        this._router.navigateByUrl(`/profile/${this.defaultGithubUser}`);
    }
}

