import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {IBlog} from "./blog";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";

const header = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class BlogService {
  private blogsUrl = "http://localhost:3000/blogs";

  constructor(private http: Http) {
  }

  loadData(): Observable<IBlog[]> {
    return this.http.get(this.blogsUrl)
      .map(res => res.json())
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  getBlogById(id): Observable<IBlog> {
    return this.http.get(this.blogsUrl + "/" + id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  postData(data) {
    return this.http.post(this.blogsUrl, data, header)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateData(data, id) {
    return this.http.put(this.blogsUrl + "/" + id, data, header)
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteData(id) {
    return this.http.delete(this.blogsUrl + "/" + id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }
}
