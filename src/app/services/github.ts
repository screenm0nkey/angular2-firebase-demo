import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';

@Injectable()
export class Github {
	constructor(private http: Http){}

	getRepos(username){
        return this.http.get(`https://api.github.com/users/${username}/repos`);
    }

	getUserInfo(username){
        return this.http.get(`https://api.github.com/users/${username}`);
    }

    getGithubInfo(username){
        return this.getRepos(username)
            .combineLatest(this.getUserInfo(username))
            .map(function (res:Array<Response>) {
                return {
                    repos: res[0].json(),
                    bio: res[1].json()
                }
            })
    }
}


