import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost, IpostRes } from '../model/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  Base_url:string=environment.BASE_URL
  Post_url:string=`${this.Base_url}/posts.json`

  EditPost$ : Subject<Ipost>=new Subject<Ipost>()
  constructor( private _http:HttpClient) { }

  fetchPost():Observable<IpostRes>{
    return this._http.get<IpostRes>(this.Post_url)
  }

  createPost(post:Ipost):Observable<any>{
    return this._http.post<any>(this.Post_url,post)
  }

  removePost(id:string):Observable<string>{
    return this._http.delete<string>(`${this.Base_url}/posts/${id}.json`)
  }

  updatePost(post:Ipost):Observable<any>{
    return this._http.patch<any>(`${this.Base_url}/posts/${post.id}.json`,post)
  }
}
