import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'blog-fav-blogs',
  templateUrl: './fav-blogs.component.html',
  styleUrls: ['./fav-blogs.component.css']
})
export class FavBlogsComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  constructor() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

}
