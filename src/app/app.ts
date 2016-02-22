import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './components/home/home';
import {ProfileComponent} from './components/profile/profile';

@Component({
  selector: 'seed-app',
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  template : `
    <h3>Angular2 Note Taker</h3>
    <div>
	  <a [routerLink]="['/Home']">Home</a>
	  <a [routerLink]="['/Profile/RepoDetail', {repo: ''}]">Profile</a>
    </div>
    <div>
	  <router-outlet></router-outlet>
    </div>
  `
})
@RouteConfig([
  new Route({ path: '/', component: HomeComponent, name: 'Home', useAsDefault: true}),
  new Route({ path: '/profile/...', component: ProfileComponent, name: 'Profile'}),
])
export class SeedApp {
  constructor() {}
}
