package com.GodFathersPizza;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.GodFathersPizza.configuration.MenuConfiguration;
import com.GodFathersPizza.model.Menu;

@SpringBootApplication
public class GodFathersPizzaApplication {
	
	static Menu menu;
	public static void main(String[] args) {
		SpringApplication.run(GodFathersPizzaApplication.class, args);
		gestioneMenu();
	}
	
	public static void gestioneMenu() {
		//dico quale file di configurazione voglio utilizzare
		ApplicationContext appCtx = new  AnnotationConfigApplicationContext(MenuConfiguration.class);
		//vado a leggere il bean
		menu = (Menu) appCtx.getBean("menu");
		stampaMenu();
		((AbstractApplicationContext) appCtx).close();
	}
	public static void stampaMenu() {
		System.out.println("************** Menu *************");
		System.out.println("************** Pizzas ************");
		menu.getMenuPizza().forEach(p -> System.out.println(p.getMenuPizza()));
		System.out.println("************** Toppings **********");
		menu.getMenuTopping().forEach(t -> System.out.println(t.getPizzaTopping()));
		System.out.println("************** Drinks *************");
		menu.getMenuBevanda().forEach(d -> System.out.println(d.getDrink()));
		System.out.println("************** Franchise *************");
		menu.getMenuArticoloBrand().forEach(a -> System.out.println(a.getArticoloBrand()));


	}
}
