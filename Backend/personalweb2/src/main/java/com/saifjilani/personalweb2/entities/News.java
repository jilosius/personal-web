package com.saifjilani.personalweb2.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "news")
public class News {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "news_id", nullable = false)
  private Integer id;

  @Column(name = "date")
  private LocalDate date;

  @Column(name = "title")
  private String title;

  @Column(name = "description")
  private String description;

}
