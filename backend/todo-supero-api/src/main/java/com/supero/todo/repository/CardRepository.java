package com.supero.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supero.todo.model.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, Long>{

}
