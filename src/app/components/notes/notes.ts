import {Component, ChangeDetectionStrategy, Input, OnInit, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {observableFirebaseObject, observableFirebaseArray, NgWhen} from 'angular2-firebase';
import {FirebaseService} from "../../services/firebase";
import {AddNoteComponent} from "./add-note";
import * as _ from 'lodash';

@Component({
    selector: 'firebase',
    directives: [NgWhen, AddNoteComponent],
    providers : [FirebaseService],
    template : `
        <h4>Firebase notes for {{repoName}}</h4>
        <add-note [repoName]="repoName"></add-note>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="#note of notes | async">{{note}}</li>
        </ul>
    `
})
export class NotesComponent implements OnInit{
    @Input('repo') repoName:string;
    notes: Observable<string[]>;

    constructor(private _fireBase : FirebaseService) {}

    ngOnInit() {
        console.log(20, this.repoName);
        let ref = this._fireBase.connect().child(this.repoName);
        let sub = observableFirebaseObject(ref);
        // firebase returns an object and we want an array of values.
        this.notes = sub.map(_.toArray);
    }


}