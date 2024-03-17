package com.saifjilani.personalweb2.services;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.saifjilani.personalweb2.entities.News;
import com.saifjilani.personalweb2.repositories.NewsRepository;

import java.util.List;


@Service
@Transactional
@Slf4j

public class NewsService {
  private final NewsRepository newsRepository;

  @Autowired
  public NewsService(NewsRepository newsRepository) {
    this.newsRepository = newsRepository;
  }

  public List<News> getAllNews(){
    return newsRepository.findAll();
  }

}
