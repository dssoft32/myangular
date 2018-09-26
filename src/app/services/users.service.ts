import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class userService {

   users:any=[];
    constructor(private http: HttpClient) {        

    }
    
}

