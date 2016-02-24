import {Component} from 'angular2/core';

@Component({
    selector: 'add-note',
    template: `
    <form class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputName2" placeholder="Add Note" #input>
        </div>
        <button type="submit" class="btn btn-default" (click)="addNote(input)">Add Note</button>
    </form>
    `,
})
export class AddNoteComponent {
    addNote(input:HTMLInputElement) {
        input.value = '';
    }
}


