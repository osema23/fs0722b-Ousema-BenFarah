package com.GodFathersPizza.model;

public class PizzaTopping extends Pizza {
	
	private Pizza pizza;
	String nome;
	protected double calorie;
	protected double prezzo;
	
	
	public PizzaTopping(Pizza pizza) {
		this.pizza = pizza;
		
	}
	@Override
	public double getCalorie() {
		
		return this.pizza.getCalorie() + this.calorie;
	}


	@Override
	public String getNome() {
		
		return this.pizza.getNome() + " + Topping: " + nome;
	}


	@Override
	public double getPrezzo() {
		
		return this.pizza.getPrezzo() + this.prezzo;
	}
	
	public String getPizzaTopping() {
		return  this.nome + ") - Calorie: " + this.calorie + " Prezzo: " + this.prezzo;
	}
	
}
