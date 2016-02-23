import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './components/home/home';
import {ProfileComponent} from './components/profile/profile';
import {Github} from './services/github';

@Component({
  selector: 'seed-app',
  directives: [ROUTER_DIRECTIVES],
  providers : [Github],
  styleUrls: ['app/app.css'],
  template : `

    <nav class="navbar navbar-light bg-faded col-sm-12">
    <a class="navbar-brand" href="#">Angular2 Note Taker</a>
    <ul class="nav navbar-nav">
      <li class="nav-item active">
         <a class="nav-link" [routerLink]="['/Home']">Home</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" [routerLink]="['/Profile/RepoDetail', {repo: ''}]">Profile</a>
      </li>
    </ul>
    </nav>

    <div class="col-sm-12 container">
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
