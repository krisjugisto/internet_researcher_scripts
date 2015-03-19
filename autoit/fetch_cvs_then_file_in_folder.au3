#include <File.au3>
#include <MsgBoxConstants.au3>

$inputDir = FileSelectFolder("Quellordner w�hlen", "")
If @error Then
   MsgBox($MB_SYSTEMMODAL, "Fehler", "Kein g�ltiger Ordner.")
   Exit
EndIf

$outputDir = FileSelectFolder("Zielprojektordner w�hlen", "Z:\_Projekte")
If @error Then
   MsgBox($MB_SYSTEMMODAL, "Fehler", "Kein g�ltiger Ordner.")
   Exit
EndIf

$inputFiles = _FileListToArray($inputDir, "*.txt", $FLTA_FILES)
If @error = 1 Then
   MsgBox($MB_SYSTEMMODAL, "Fehler", "Ung�ltiger Pfad.")
   Exit
EndIf
If @error = 4 Then
   MsgBox($MB_SYSTEMMODAL, "Fehler", "Keine Dateien gefunden.")
   Exit
EndIf

For $i = 1 To $inputFiles[0]
   $splitMIMEType = StringSplit($inputFiles[$i], ".")[1]
   ;ToDo: Plausibility and error checks for StringSplit?
   $splitFileName = StringSplit($splitMIMEType, "_")
   $firstName = $splitFileName[2]
   $lastName = $splitFileName[1]
   $outputFilePath = $outputDir & "\" & $lastname & "," & " " & $firstName
   ;ToDo: Error-Handling here for DirCreate?
   DirCreate($outputFilePath)
   ;ToDo: Error-Handling FileMove?
   FileMove($inputDir & "\" & $inputFiles[$i], $outputFilePath)
Next