import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { GITHUB_API_BASE_URL } from '../../../constants/fylehq.constants';
import { IGithubData } from '../../../types/fylehq.types';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(
    username: string,
    page_num: number,
    page_size: string
  ): Observable<any> {
    const apiUrl = `${GITHUB_API_BASE_URL}/${username}/repos?per_page=${page_size}&page=${page_num}`;
    return this.http
      .get<IGithubData>(apiUrl, { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error('Error fetching user:', error);
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
