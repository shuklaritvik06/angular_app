import { Component } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { IGithubData } from '../../../../types/fylehq.types';
import { CommonModule } from '@angular/common';
import { RepoTagsComponent } from '../repo-tags/repo-tags.component';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile-data',
  standalone: true,
  imports: [CommonModule, RepoTagsComponent],
  providers: [GithubService],
  templateUrl: './profile-data.component.html',
  styleUrl: './profile-data.component.css',
})
export class ProfileDataComponent {
  noOfElements = '10';
  searchQuery = '';
  repoData: IGithubData = [];
  loading: boolean = false;
  page_num: number = 1;
  last_page: number | undefined;

  constructor(private githubService: GithubService) {}

  onChangeElements(event: Event) {
    this.noOfElements = (event.target as HTMLSelectElement).value;
  }

  onChangeSearchQuery(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  searchUser() {
    if (!this.searchQuery.trim()) {
      console.error('Search query is empty');
      return;
    }

    this.loading = true;

    this.githubService
      .getUser(this.searchQuery, this.page_num, this.noOfElements)
      .subscribe({
        next: (resp: HttpResponse<IGithubData>) => {
          this.repoData = resp.body || [];
          this.loading = false;
          this.getLastPage(resp.headers.get('Link')!);
        },
        error: (error) => {
          this.repoData = [];
          console.error('Error fetching user:', error);
          this.loading = false;
        },
      });
  }
  getLastPage(header: string) {
    const items = header.split(',');
    const last_url_header = items?.[1]?.split(';');
    const url_header = last_url_header?.[0]?.trim();
    this.last_page = parseInt(url_header.split('=').pop()?.replace('>', '')!);
  }

  incr() {
    if (this.last_page !== undefined && this.page_num < this.last_page) {
      this.page_num += 1;
    }
  }

  prev() {
    if (this.page_num > 1) {
      this.page_num -= 1;
    }
  }
}
