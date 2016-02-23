import {Component, ChangeDetectionStrategy, Input, } from 'angular2/core';
import {OnInit} from "angular2/core";

@Component({
    selector: 'github-repos',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template : `
        <div>
          <h4>User's Repositories</h4>
          <ul class="list-group">
            <li *ngFor="#repo of repos" class="list-group-item">
                <h4><a [href]="repo.html_url">{{repo.name}}</a></h4>
                <p *ngIf="repo.description">{{repo.description}}</p>
            </li>
          </ul>
        </div>
    `
})
export class ReposComponent {
    @Input() repos : any [];
}
