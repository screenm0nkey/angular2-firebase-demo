import {Component, ChangeDetectionStrategy, Input, } from 'angular2/core';
import {OnInit} from "angular2/core";

@Component({
    selector: 'github-bio',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <h4>User Repos for {{bio.login}}</h4>
        <ul class="list-group">
            <li class="list-group-item">
                <img [src]="bio.avatar_url" class="img-rounded img-responsive"/>
            </li>
            <li class="list-group-item">Name: {{bio.name}}</li>
            <li class="list-group-item">Username: {{bio.login}}</li>
            <li class="list-group-item">Email: {{bio.email}}</li>
            <li class="list-group-item">Location: {{bio.location}}</li>
            <li class="list-group-item">Company: {{bio.company}}</li>
            <li class="list-group-item">Followers: {{bio.followers}}</li>
            <li class="list-group-item">Following: {{bio.following}}</li>
            <li class="list-group-item">Public Repos: {{bio.public_repos}}</li>
            <li class="list-group-item">Blog: <a [href]="bio.blog"> {{bio.blog}}</a></li>
        </ul>
    `
})
export class UserBioComponent {
    @Input() bio:Object = {};

    constructor() {
        console.log(11, this.bio)
    }
}
