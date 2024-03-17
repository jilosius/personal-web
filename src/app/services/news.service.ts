import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsComponent } from '../news/news.component';


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly serverUrl: string = 'http://localhost:8080/news';
  
  constructor(private http: HttpClient) {}

  news$ = (): Observable<NewsComponent[]> => this.http.get<NewsComponent[]>(this.serverUrl);
}
