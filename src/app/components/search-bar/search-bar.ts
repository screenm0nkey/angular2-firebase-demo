import {Component} from 'angular2/core';
import {Router} from "angular2/router";

@Component({
    selector: 'search-bar',
    providers: [],
    directives: [],
    pipes: [],
    template: `
    <form class="form-inline">
    <div class="form-group">
    <label for="exampleInputName2">Name</label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Search github" #input>
    </div>
    <button type="submit" class="btn btn-default" (click)="search(input)">Search</button>
    </form>
    `,
})
export class SearchBarComponent {
    constructor(private _router:Router) {
    }

    search(input:HTMLInputElement) {
        this._router.navigateByUrl(`/profile/${input.value}`);
        input.value = '';
    }
}


