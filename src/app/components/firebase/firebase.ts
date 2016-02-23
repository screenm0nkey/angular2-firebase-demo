import {Component, ChangeDetectionStrategy, Input, OnInit, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {observableFirebaseObject, observableFirebaseArray, NgWhen} from 'angular2-firebase';
import {FirebaseService} from "../../services/firebase";

@Component({
    selector: 'firebase',
    directives: [NgWhen],
    providers : [FirebaseService],
    template : `
        <h4>Firebase notes for {{repoName}}</h4>

        <ul class="list-group" *ngFor="#note of notes | async">
            <li class="list-group-item">{{note}}</li>
        </ul>
    `
})
export class FirebaseComponent implements OnInit{
    @Input('repo') repoName:string;
    notes: Observable<string>;

    constructor(private _fireBase : FirebaseService) {}

    ngOnInit() {
        console.log(20, this.repoName);
        //let db = new FirebaseService(this.firebaseDB).child(this.repoName);
        let db = this._fireBase.connect().child(this.repoName);
        this.notes = observableFirebaseObject(db);
    }

    addNote () {

    }
}
