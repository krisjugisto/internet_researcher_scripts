/*
 * Dies ist eine JavaScript-Umgebung.
 *
 * Geben Sie etwas JavaScript ein und führen Sie einen Rechtsklick aus oder wählen Sie aus dem Ausführen-Menü:
 * 1. Ausführen, um den ausgewählten Text zu evaluieren (Strg+R),
 * 2. Untersuchen, um den Objekt-Inspektor auf das Resultat anzuwenden (Strg+I), oder
 * 3. Anzeigen, um das Ergebnis in einem Kommentar hinter der Auswahl einzufügen. (Strg+L)
 */

var firm = prompt("Bitte Firma angeben");
firm = firm.replace(" ", "+");
//var searchString = "https://www.xing.com/search/members?utf8=%E2%9C%93&advanced_form=true&q[current_company]=" + firm + "&q[previous_company]=" + firm;
var searchString = "https://www.xing.com/search/members?advanced_form=&q[keywords]= + firm;
window.open(searchString);
void(0)