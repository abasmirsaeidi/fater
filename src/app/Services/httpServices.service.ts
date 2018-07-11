import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class  HttpService{
constructor (private httpClient: HttpClient){}

fetchPosts(){
  return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',{})
  }
createPost(data: any){
  return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',data)
}

}
