import {Component, OnInit} from '@angular/core';
import {BlogService} from "../blog.service";
import {IBlog} from "../blog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'blog-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  errorMessage: string;
  pageTitle: string;
  blog: IBlog = {
    'id': null,
    'title': '',
    'contents': '',
    'category': '',
    'date': new Date(),
    "rating":4.0,
    'author': 'Tushar'
  };

  types = ['Tech', 'Entertainment', 'Sports', 'Food'];

  constructor(private _route: ActivatedRoute,
              private blogService: BlogService,
              private router: Router) {
  }

  callType(value) {
    console.log(value);
    this.blog.category = value;
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.getBlog(id);
    console.log(id);
    if (id != 0) {
      this.pageTitle = "Edit your Blog";
    } else {
      this.pageTitle = "Add your Blog"
    }
  }

  getBlog(id: number) {
    this.blogService.getBlogById(id).subscribe(
      blog => this.blog = blog,
      error => this.errorMessage = <any>error);
  }

  checkBlog(blog: IBlog) {
    if (blog.id) {
      this.updateBlog(blog);
    } else {
      this.postBlog(blog);
    }
    location.reload();
    this.router.navigate(['/bloglist']);
  }

  onBack() {
    this.router.navigate(['/bloglist']);
  }

  private postBlog(blog) {
    this.blogService.postData(blog).subscribe();
  }

  private updateBlog(blog) {
    blog.date = new Date();
    this.blogService.updateData(blog, blog.id).subscribe();
  }
}
