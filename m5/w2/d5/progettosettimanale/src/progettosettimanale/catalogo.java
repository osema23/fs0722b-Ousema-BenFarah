package progettosettimanale;

public abstract class catalogo {
	public int codiceISBN;
	public String titolo;
	public String annoPub;
	public int numPag;
	public catalogo(int codiceISBN, String titolo, String annoPub, int numPag) {
		super();
		this.codiceISBN = codiceISBN;
		this.titolo = titolo;
		this.annoPub = annoPub;
		this.numPag = numPag;
	}
	
	public int getcodiceisbn() {
		return this.codiceISBN;
	}
	public String getTitolo() {
		return this.titolo;
	}
	public String getAnno() {
		return this.annoPub;
	}
	public int getNumPag() {
		return this.numPag;
	}
	
}
