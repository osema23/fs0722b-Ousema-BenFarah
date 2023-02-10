package progettosettimanale;

import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	static ArrayList<catalogo> archivio = new ArrayList<catalogo>();
	static File file = new File("archivio/lista.txt");
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		Menu();
				

	}

	static public void Menu() {
		System.out.println("[0] Aggiungi Libro");
		System.out.println("[1] Rimozione Libro tramite ISBM");
		System.out.println("[2] Ricerca ISBM");
		System.out.println("[3] Ricerca anno tramite anno di pubblicazione ");
		System.out.println("[4] Ricerca per autore");
		System.out.println("[5] Salvataggio su disco dell'archivio ");
		System.out.println("[6] Caricamento dal disco dell'archivio");
	}
	static public void aggiungiLibro(int ISBM, String titolo, String annoPub, int numPag, String autore, String genere ) {
		catalogo nuovolibro = new libro(ISBM, titolo,annoPub,numPag,autore, genere);
		archivio.add(nuovoLibro);
		
	}
}
