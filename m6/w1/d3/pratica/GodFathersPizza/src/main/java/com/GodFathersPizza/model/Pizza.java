package com.GodFathersPizza.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@Getter
@Setter
@ToString
public class Pizza extends Prodotto {
	
	double calorie;

	
	
	public Pizza(String nome, double prezzo, double calorie) {
		super(nome, prezzo);
		this.calorie = calorie;
	}


	public String getMenuPizza() {
		return this.getNome() + " - Calorie: " + this.getCalorie() + ") - Calorie: " + this.getCalorie() + " Prezzo: " + this.getPrezzo();
	
	}
	
}
