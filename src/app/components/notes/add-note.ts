import {Component, Input, OnInit} from 'angular2/core';
import {FirebaseService} from "../../services/firebase";
import * as Firebase from 'firebase';

@Component({
    selector: 'add-note',
    template: `
        <form class="form-inline" [ngStyle]="{'margin-bottom': '10px'}">
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputName2" placeholder="Add Note" #input>
            </div>
            <button type="submit" class="btn btn-default" (click)="addNote(input)">Add Note</button>
        </form>
    `,
})
export class AddNoteComponent implements OnInit {
    @Input() repoName:string;
    ref : Firebase;

    constructor(private _fireBase : FirebaseService) {}

    ngOnInit(){
        this.ref = this._fireBase.connect().child(this.repoName);
    }

    addNote(input:HTMLInputElement) {
        this.ref.push(input.value);
        input.value = '';
    }
}


