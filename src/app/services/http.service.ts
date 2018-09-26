import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class GlobalHttpService {

   
    constructor(private http: HttpClient) {        

    }

    // Uses http.get() to load data from a single API endpoint
    getLead() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }


    
}

