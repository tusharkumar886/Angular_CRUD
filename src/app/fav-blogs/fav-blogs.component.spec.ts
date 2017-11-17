import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavBlogsComponent } from './fav-blogs.component';

describe('FavBlogsComponent', () => {
  let component: FavBlogsComponent;
  let fixture: ComponentFixture<FavBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
