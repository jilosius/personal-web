import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NewsService } from '../services/news.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
            RouterModule,
            MatToolbarModule,
            CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news: NewsComponent[] = [];
  id: number = 0;
  date: Date = new Date();
  title: string = '';
  description: string = '';


  constructor(private newsService:NewsService){}


  ngOnInit(): void {
    this.newsService.news$().subscribe(
      (news: NewsComponent[]) => {
        // Handle the data here
        // this.id = news[0].id;
        // this.date = news[0].date;
        // this.title = news[0].title;
        // this.description = news[0].description;

        this.news = news;

      },
      (error) => {
        // Handle errors here
        console.error('Error fetching news:', error);
      }
    );
  }
}
