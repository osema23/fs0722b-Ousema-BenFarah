package com.GodFathersPizza.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ArticoloBrand extends Prodotto {public ArticoloBrand(String nome, double prezzo) {
		super(nome, prezzo);

	}
	
	public String getArticoloBrand() {
	return this.getNome() + " Prezzo: " + this.getPrezzo();
	}
	
}
