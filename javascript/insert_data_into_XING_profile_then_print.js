/*
 * Dies ist eine JavaScript-Umgebung.
 *
 * Geben Sie etwas JavaScript ein und führen Sie einen Rechtsklick aus oder wählen Sie aus dem Ausführen-Menü:
 * 1. Ausführen, um den ausgewählten Text zu evaluieren (Strg+R),
 * 2. Untersuchen, um den Objekt-Inspektor auf das Resultat anzuwenden (Strg+I), oder
 * 3. Anzeigen, um das Ergebnis in einem Kommentar hinter der Auswahl einzufügen. (Strg+L)
 */

var oldInnerHTML = document.getElementsByClassName('grey')[0].innerHTML;
document.getElementsByClassName('grey')[0].innerHTML = oldInnerHTML + '<ul><li>Branchenkenntnis: gut okay wenig</li><li>Führungserfahrung: gut okay wenig</li><li>Mobilität: gut okay wenig</li><li>BizDev: gut okay wenig</li><li>Vertrieb: gut okay wenig</li><li>______________: gut okay wenig</li><li>______________: gut okay wenig</li><li>==============</li><li>BEWERTUNG:</li></ul>';
window.print();
