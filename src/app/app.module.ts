import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import {FormsModule} from "@angular/forms";
import {BlogService} from "./blog-list/blog.service";
import {HttpModule} from "@angular/http";
import { AddBlogComponent } from './blog-list/add-blog/add-blog.component';
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from './welcome/welcome.component';
import { BlogDetailsComponent } from './blog-list/blog-details/blog-details.component';
import { FavBlogsComponent } from './fav-blogs/fav-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    AddBlogComponent,
    WelcomeComponent,
    BlogDetailsComponent,
    FavBlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'bloglist',component:BlogListComponent},
      {path:'addblog', component:AddBlogComponent},
      {path:'editblog/:id', component:AddBlogComponent},
      {path:'blogdetails/:id', component:BlogDetailsComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
