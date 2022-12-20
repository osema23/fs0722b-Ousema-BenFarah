// override -> la classe figlia ridefinisce il metodo della superclasse
class PrinterClass {
    doPrint():void {
        console.log("doPrint() from Parent called...")
    }
}
class StringPrinter extends PrinterClass {
    doPrint():void {
        super.doPrint() //super fa riferimento al genitore di una classe
        console.log("doPrint () is printing a string..")
    }
}
var obw = new StringPrinter()
obw.doPrint()