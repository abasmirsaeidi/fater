import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class  UserService{
  constructor (private httpClient: HttpClient){}
  readonly USER_URL = 'fater.com/user';


  LoginUser(data:any){
    let LOGIN_URL = this.USER_URL + '/login';
    return this.httpClient.post(LOGIN_URL, data);

  }

  registerUser(data:any){
    let REGISTER_URL = this.USER_URL + '/register';
    return this.httpClient.post(REGISTER_URL, data);

  }

  authUser(data:any){
    let AUTH_URL = this.USER_URL + '/auth';
    return this.httpClient.post(AUTH_URL, data);

  }

}


