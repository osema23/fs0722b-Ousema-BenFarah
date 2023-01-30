package it.epicode.be;
import java.util.Scanner;
public class Helloworld {

public static void main (String[] args)
		{
		
		System.out.println("This is my first Epicode Java Project!");
		
		/* ESERCIZIO 1 */
		int num1 = 49;
		int num2 = 57;
		int ris = num1*num2;
		System.out.println("Il risultato è :" +  ris );
		String a[] = new String [5]; 
		
		
		/* ESERCIZIO 2 */
		Scanner sc = new Scanner(System.in);
		
		System.out.print("scrvi prima stringa : ");
		String primo = sc.nextLine();		
		System.out.print("scrvi seconda stringa : ");
		String secondo = sc.nextLine();	
		System.out.print("scrvi terza stringa : ");
		String terzo = sc.nextLine();	
		System.out.println("stringa concatenate " + primo + secondo + terzo);
		
		perimetroRettangolo();
		pariDispari();
		}
public static void perimetroRettangolo() {
	Scanner rett = new Scanner(System.in);
	System.out.print("Inserisci base rettangolo ");
	int b = rett.nextInt();
	System.out.print("Inserisci altezza rettangolo ");
	int h = rett.nextInt();
	int base = b*2;
	int altezza = h*2;
	int per = base + altezza;
	System.out.println("il perimetro del rettangolo è : " + per);
}
public static void pariDispari() {
	Scanner pd = new Scanner(System.in);
	System.out.print("Inserisci un numero ");
	int n = pd.nextInt();
	if(n%2 == 0) {
		System.out.print("Il numero " + n + " è pari ");
	}else {
		System.out.print("Il numero " + n + " è dispari ");
	}
}

public static void perimetroTriangolo() {
	Scanner tri = new Scanner(System.in);
	System.out.print("Inserisci il  primo lato del triangolo ");
	float f = tri.nextFloat();
	System.out.print("Inserisci il secondo lato del triangolo ");
	float g = tri.nextFloat();
	System.out.print("Inserisci il terzo lato del triangolo ");
	float z = tri.nextFloat();
	float p = f+g+z;
	float u = (p-f)*(p-g)*(p-z);
	System.out.println("Area triangolo " + Math.sqrt(u));
	
}
}

		



	



