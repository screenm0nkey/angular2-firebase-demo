import {Component} from 'angular2/core';
import {Router} from "angular2/router";

@Component({
  selector: 'search-bar',
  providers: [],
  directives: [],
  pipes: [],
  template: `
    <input type="text" #input>
    <button (click)="search(input)">Search</button>`,
})
export class SearchBarComponent {
  constructor(private _router : Router) {}

  search (input:HTMLInputElement) {
    this._router.navigateByUrl(`/profile/${input.value}`);
    input.value = '';
  }
}
