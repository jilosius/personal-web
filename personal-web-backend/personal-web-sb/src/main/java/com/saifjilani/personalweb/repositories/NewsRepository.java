package com.saifjilani.personalweb.repositories;

import com.saifjilani.personalweb.entities.News;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Integer> {

}