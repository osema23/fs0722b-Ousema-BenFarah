package com.GodFathersPizza.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Bevanda extends Prodotto {

	double calorie;

	public Bevanda(String nome, double prezzo, double calorie) {
		super(nome, prezzo);
		this.calorie = calorie;
	}
	
	public String getDrink() {
		return this.getNome() + " - Calorie: " + this.getCalorie() + " Prezzo: " + this.getPrezzo();
	}
}
