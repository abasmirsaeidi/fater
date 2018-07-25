import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class  PageService{
  constructor (private httpClient: HttpClient){}
  readonly PAGE_URL = 'https://d02432fd-2be4-4754-a3a6-50942b41bea2.mock.pstmn.io';
  readonly NewsPAGE_URL = 'https://d02432fd-2be4-4754-a3a6-50942b41bea2.mock.pstmn.io';


  getPageDate(data:any){
    return this.httpClient.post(this.PAGE_URL, data)
  }
  getNewsPageDate(data:any){
    return this.httpClient.post(this.NewsPAGE_URL, data)
  }

}
