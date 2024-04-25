import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTagsComponent } from './repo-tags.component';

describe('RepoTagsComponent', () => {
  let component: RepoTagsComponent;
  let fixture: ComponentFixture<RepoTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoTagsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepoTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
