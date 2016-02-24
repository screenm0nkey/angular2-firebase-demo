import {Component, ChangeDetectionStrategy, Input, OnInit, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {observableFirebaseObject, observableFirebaseArray, NgWhen} from 'angular2-firebase';
import {FirebaseService} from "../../services/firebase";
import {AddNoteComponent} from "./add-note";
import 'rxjs/add/operator/toArray';

@Component({
    selector: 'firebase',
    directives: [NgWhen, AddNoteComponent],
    providers : [FirebaseService],
    template : `
        <h4>Firebase notes for {{repoName}}</h4>
        <add-note [repoName]="repoName"></add-note>
        <ul class="list-group" *ngWhen="#note is notes | async">
            <li class="list-group-item">{{note}}</li>
        </ul>
    `
})
export class NotesComponent implements OnInit{
    @Input('repo') repoName:string;
    notes: Observable<string>;

    constructor(private _fireBase : FirebaseService) {}

    ngOnInit() {
        console.log(20, this.repoName);
        //let db = new FirebaseService(this.firebaseDB).child(this.repoName);
        let db = this._fireBase.connect().child(this.repoName);
        this.notes = observableFirebaseObject(db)

        this.notes.subscribe(function (val) {
            console.log(val);
        })
    }
}
