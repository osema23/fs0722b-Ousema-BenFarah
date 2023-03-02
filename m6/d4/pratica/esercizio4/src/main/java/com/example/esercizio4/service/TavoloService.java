package com.example.esercizio4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.esercizio4.model.Tavolo;
import com.example.esercizio4.repository.TavoloDaoRepository;

@Service
public class TavoloService {
	@Autowired TavoloDaoRepository repo;
	
	public void insertTavolo(Tavolo t) {
		repo.save(t);
	}
	public Tavolo getTavoloById(Integer t) {
		return repo.findById(t).get();
	}
	public void updateTavolo(Tavolo t) {
		repo.save(t);
	}
	public void removeTavolo(Tavolo t) {
		repo.delete(t);
	}
	public List<Tavolo> getAllTavoli() {
		return (List<Tavolo>) repo.findAll();
	}

}
