package com.example.esercizio4.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.esercizio4.model.Tavolo;
@Repository

public interface TavoloDaoRepository extends CrudRepository<Tavolo, Integer> {

}
