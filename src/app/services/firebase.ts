import {Injectable, Inject} from 'angular2/core';
import * as Firebase from 'firebase';

@Injectable()
export class FirebaseService {
    constructor(@Inject('firebaseDB') public firebaseDB) {}
    connect () {
        return new Firebase(this.firebaseDB);
    }
}


