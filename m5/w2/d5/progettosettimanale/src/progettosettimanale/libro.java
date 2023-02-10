package progettosettimanale;

public class libro extends catalogo{
	private String autore;
	private String genere;
	public libro(int codiceISBN, String titolo, String annoPub, int numPag, String autore2, String genere2) {
		super(codiceISBN, titolo, annoPub, numPag);
		this.autore = autore;
		this.genere = genere;
	}
	public String getAutore() {
		return autore;
	}
	public String getGenere() {
		return genere;
	}
	
	@Override
	public String toString() {
		return "codice ISBN:"  + getcodiceisbn()
				+"Autore:" + autore 
				+ ",Genere:" + genere
				+ "titolo:" + getTitolo()
				+ "Anno pubblicazione:" + getAnno()
				+ "Numero di pagine:" + getNumPag();
	}
	
	

}
