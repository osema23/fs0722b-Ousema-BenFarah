package com.GodFathersPizza.model;

public class PizzaFamilySize extends Pizza {
	
	private Pizza pizza;
	private double calorie;
	private double prezzo;
	
	
	public PizzaFamilySize(Pizza pizza) {
		
		this.pizza = pizza;
		this.calorie = 1.95;
		this.prezzo = 4.15;
	}


	@Override
	public double getCalorie() {
		
		return this.pizza.getCalorie() * this.calorie;
	}


	@Override
	public String getNome() {
		
		return this.pizza.getNome() + " - Family Size";
	}


	@Override
	public double getPrezzo() {
		
		return this.pizza.getPrezzo() + this.prezzo;
	}
	@Override
	public String getMenuPizza() {
		return "Family size for Pizza  - Calorie: " + this.calorie + " Prezzo: " + this.prezzo;
	}
	
}
