package com.GodFathersPizza.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;


@Getter
public class Menu {
		
	private List<Pizza> menuPizza = new ArrayList<Pizza>();
	private List<Bevanda> menuBevanda = new ArrayList<Bevanda>();
	private List<PizzaTopping> menuTopping = new ArrayList<PizzaTopping>();
	private List<ArticoloBrand> menuArticoloBrand = new ArrayList<ArticoloBrand>();

}
