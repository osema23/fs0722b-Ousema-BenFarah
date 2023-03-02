package com.example.esercizio4.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.esercizio4.model.Tavolo;
import com.example.esercizio4.service.TavoloService;

@Component
public class TavoloRunner implements ApplicationRunner {
	@Autowired TavoloService userService;
	@Override
	public void run(ApplicationArguments args) throws Exception {
  System.out.println("TavoloRunner...");
  Tavolo t = new Tavolo();
  t.setNumero(null);
  t.setNumeroMassimoCoperti(6);
  t.setOccupato(true);
  
  userService.insertTavolo(t);
  System.out.println(t);
  
	}

}
