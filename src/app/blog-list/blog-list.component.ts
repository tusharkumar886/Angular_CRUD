import {Component, OnInit} from '@angular/core';
import {IBlog} from "./blog";
import {BlogService} from "./blog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'blog-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  pageTitle: string = 'Blog List';
  errorMessage: string;
  blogs: IBlog[] = [];
  filteredBlogs: IBlog[];
  types = ['All blogs','Tech', 'Entertainment', 'Sports', 'Food'];

  constructor(private blogService: BlogService,
              private router: Router) {
  }

  private _category: string;

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
    this.filteredBlogs = this.category ? this.performFilter(this.category) : this.blogs;
  }

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBlogs = this.listFilter ? this.performSearch(this.listFilter) : this.blogs;
  }

  callType(value) {
    console.log(value);
    this._category = value;
  }

  ngOnInit() {
    this.blogService.loadData().subscribe(blogs => {
        this.blogs = blogs;
        this.filteredBlogs = this.blogs;
      },
      error => this.errorMessage = <any>error);
  }

  addBlog() {
    this.router.navigate(['/addblog']);
  }

  editBlog(id) {
    this.router.navigate(['/editblog', id]);
  }

  deleteBlog(id, i) {
    console.log(i);
    this.blogService.deleteData(id).subscribe(data => {
        this.blogs.splice(i, 1);
      }
    );
  }

  private performSearch(filterBy: string): IBlog[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.blogs.filter((blog: IBlog) =>
      blog.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  private performFilter(filterBy: string): IBlog[] {
    filterBy = filterBy.toLocaleLowerCase();
    if(filterBy === 'all blogs'){
      return this.blogs;
    }
    return this.blogs.filter((blog: IBlog) =>
      blog.category.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
