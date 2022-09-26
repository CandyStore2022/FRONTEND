import { User } from './../models/user';
import { environment } from './../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string=environment.basePath;
  constructor(private http: HttpClient) { }
  getUser (){
    return this.http.get<User[]>(this.baseUrl);
  }
}
