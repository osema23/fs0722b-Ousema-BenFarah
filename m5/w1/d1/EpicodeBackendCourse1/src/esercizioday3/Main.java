package esercizioday3;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		pariDispari("ciao");
		annoBisestile(2015);
		stampaNumero(5);
		dividereStringa("buonasera roberta");
		contoRovescia(10);
	}
	/* ESERCIZIO 1 */
	public static void pariDispari(String a) {
		if ((a.length() % 2) == 0) {
			System.out.println(true);
		} else {
			System.out.println(false);
		}

	}

	public static void annoBisestile(int b) {
		if (b % 4 == 0 && b % 100 != 0) {
			System.out.println(true);
		} else {
			System.out.println(false);
		}

	}
	/* ESERCIZIO 2 */
	public static void stampaNumero(int n) {
		switch(n) {
		case 1: 
			System.out.println("uno");
			break;
		case 2:
			System.out.println("due");
			break;
		case 3:
			System.out.println("tre");
			break;
		default:
			System.out.println("ERRORE");
		}
	}
	/* ESERCIZIO 3 */
	public static void dividereStringa(String f) {
		f.split(f);
			System.out.println(f);
		}
		
	
	/* ESERCIZIO 4*/
	public static void contoRovescia(int a) {
		for(int i=a; i>=0; i=i-1 ) {
			System.out.println(i);
			
		}
	}
}

