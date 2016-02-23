import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {SeedApp} from './app/app';
import {LocationStrategy, HashLocationStrategy} from "angular2/router";
import "style!css!bootstrap/dist/css/bootstrap.css";

bootstrap(SeedApp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide('firebaseDB', {useValue: "https://shining-heat-9958.firebaseio.com/"})
]).catch(err => console.error(err));
