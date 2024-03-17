package com.saifjilani.personalweb2.controllers;

import com.saifjilani.personalweb2.services.NewsService;
import com.saifjilani.personalweb2.entities.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {
  private final NewsService newsService;

  @Autowired
  public NewsController(NewsService newsService) {
    this.newsService = newsService;
  }

  @GetMapping("")
  public List<News> getAll(){
    return newsService.getAllNews();
  }

}
