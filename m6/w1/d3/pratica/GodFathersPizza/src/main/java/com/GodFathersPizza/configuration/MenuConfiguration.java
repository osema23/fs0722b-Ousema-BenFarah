package com.GodFathersPizza.configuration;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.GodFathersPizza.model.BrandMug;
import com.GodFathersPizza.model.BrandShirt;
import com.GodFathersPizza.model.Lemonade;
import com.GodFathersPizza.model.Menu;
import com.GodFathersPizza.model.Pizza;
import com.GodFathersPizza.model.PizzaFamilySize;
import com.GodFathersPizza.model.PizzaHawaiian;
import com.GodFathersPizza.model.PizzaMargherita;
import com.GodFathersPizza.model.PizzaSalami;
import com.GodFathersPizza.model.ToppingCheese;
import com.GodFathersPizza.model.ToppingHam;
import com.GodFathersPizza.model.ToppingOnions;
import com.GodFathersPizza.model.Water;
import com.GodFathersPizza.model.Wine;

@Configuration  //essendo un file di configurazione dove creo tutti i BEAN devo dargli l annotation @Configuration
public class MenuConfiguration {

	//per creare un bean devo crearmi le mie classi POJO
	
	@Bean
	public Menu menu() {
		Menu menu = new Menu();
		//creare un bean di tipo PizzaMargherita
		
		menu.getMenuPizza().add(pizzaMargherita());     
		//punta alla zona di memoria del menupizza(il mio arraylist)
		//e gli pusho una pizzamargherita creata col bean
		
		
//		List<Pizza> listaPizze = menu.getMenuPizza();	//codice troppo lungo
//		PizzaMargherita pm = pizzaMargherita();         // è il passaggio menu.getMenuPizza().add(pizzaMargherita()); ma scritto in 3 righe
//		listaPizze.add(pm);								
		
		//creare un bean di tipo PizzaHawaiian
		menu.getMenuPizza().add(pizzaHawaiian());     
		//creare un bean di tipo PizzaSalami
		menu.getMenuPizza().add(pizzaSalami());     	
		//crare un bean di PizzaFamilySize
		menu.getMenuPizza().add(pizzaFamilySize());
		

		//creo un bean di tipo Lemonade                     //stesso approccio di pizza
		menu.getMenuBevanda().add(lemonade());				//creo un arraylist e lo sparo dentro
		//creo un bean di tipo Water
		menu.getMenuBevanda().add(water());
		//creo un bean di tipo Wine
		menu.getMenuBevanda().add(wine());

		
		
		//creo un bean di tipo ToppingCheese
		menu.getMenuTopping().add(cheese());
		//creo un bean di tipo ToppingHam
		menu.getMenuTopping().add(ham());
		//creo un bean di tipo ToppingOnion
		menu.getMenuTopping().add(onion());
		
		//creo un bean di tipo BrandShirt
		menu.getMenuArticoloBrand().add(shirt());
		//creo un bean di tipo BrandMug
		menu.getMenuArticoloBrand().add(mug());

		
		
		return menu;
	}
	
	//creo un bean di pizzamargherita che vado a mettere dentro alla lista di pizze creato nel menu
	
	@Bean
	public PizzaMargherita pizzaMargherita() {
		return new PizzaMargherita();
	}
	
	@Bean
	public PizzaHawaiian pizzaHawaiian() {
		return new PizzaHawaiian();
	}
	
	@Bean
	public PizzaSalami pizzaSalami() {
		return new PizzaSalami();
	}
	
	@Bean
	public PizzaFamilySize pizzaFamilySize() {
		return new PizzaFamilySize(null);
	}
	
	
	//creo i bean per le bevande
	
	@Bean
	public Lemonade lemonade() {
		return new Lemonade();
	}
	
	@Bean
	public Water water() {
		return new Water();
	}
	
	@Bean
	public Wine wine() {
		return new Wine();
	}
	
	//creo bean per i topping
	
	public ToppingCheese cheese() {
		return new ToppingCheese(null);
	}
	public ToppingHam ham() {
		return new ToppingHam(null);
	}
	public ToppingOnions onion() {
		return new ToppingOnions(null);
	}
	
	//creo bean per gli articoli brand
	
	public BrandShirt shirt() {
		return new BrandShirt();
	}
	
	public BrandMug mug() {
		return new BrandMug();
	}
}
