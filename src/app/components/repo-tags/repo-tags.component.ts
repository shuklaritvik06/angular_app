import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-tags',
  standalone: true,
  imports: [],
  templateUrl: './repo-tags.component.html',
  styleUrl: './repo-tags.component.css',
})
export class RepoTagsComponent {
  @Input() tag: String = '';
}
