import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IBlog} from "../blog";

@Component({
  selector: 'blog-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog: IBlog;
  errorMessage:string;
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private blogService: BlogService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.blogService.getBlogById(id).subscribe(
      blog => this.blog = blog,
      error => this.errorMessage = <any>error);
  }

  onBack(){
    this._router.navigate(['/bloglist']);
  }
}
