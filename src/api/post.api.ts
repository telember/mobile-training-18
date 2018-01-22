import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the NotiApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostApiProvider {
  host = "http://27.254.63.20:8200";

  constructor(public http: HttpClient) {
    console.log("Hello NotiApiProvider Provider");
  }

  getPosts() {
    return this.http.get(`${this.host}/posts`);
  }

  getPost(id) {
    return this.http.get(`${this.host}/posts/${id}`);
  }

  createPost( data) {
    return this.http.post(`${this.host}/posts`, data);
  }

  updatePost(data) {
    return this.http.put(`${this.host}/posts/${data.id}`, data);
  }
}
