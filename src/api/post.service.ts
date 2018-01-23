import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APP_CONFIG } from "../config/app.config";

/*
  Generated class for the NotiApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostApiProvider {
  host = APP_CONFIG.HOST;

  constructor(public http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.host}/posts`);
  }

  getPost(id) {
    return this.http.get(`${this.host}/posts/${id}`);
  }

  createPost(data) {
    return this.http.post(`${this.host}/posts`, data);
  }

  updatePost(data) {
    return this.http.put(`${this.host}/posts/${data.id}`, data);
  }

  deletePost(id) {
    return this.http.delete(`${this.host}/posts/${id}`);
  }
}
