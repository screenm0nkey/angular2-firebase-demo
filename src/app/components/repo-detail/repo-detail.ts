import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {Github} from '../../services/github';
import {ReposComponent} from '../github/repos';
import {UserBioComponent} from '../github/user-bio';
import {NotesComponent} from '../notes/notes';

@Component({
    selector: 'repo-detail',
    directives: [UserBioComponent, ReposComponent, NotesComponent],
    template: `
        <div class="row col-sm-12" *ngIf="repo">
            <div class="row col-sm-4">
                <github-bio [bio]="bio"></github-bio>
            </div>
            <div class="row col-sm-4">
                <github-repos [repos]="repos"></github-repos>
            </div>
            <div class="row col-sm-4">
                <firebase [repo]="repo"></firebase>
            </div>
        </div>
    `
})
export class RepoDetailComponent {
    repo :string ='';
    repos : any[] = [];
    bio : any = {};

    constructor(routeParams:RouteParams, github : Github) {
        this.repo = routeParams.get('repo');

        if (this.repo) {
            github.getGithubInfo(this.repo).subscribe(
                (data)=>{
                    console.log(data)
                    this.repos = data.repos;
                    this.bio = data.bio;
                },
                (err)=>{console.warn(err)},
                ()=>{console.log('completed')}
            )
        }

    }
}
