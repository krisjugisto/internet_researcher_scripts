#include <File.au3>
#include <MsgBoxConstants.au3>

Global $INIPATH = @ScriptDir & "\settings.ini"

; Check for options.
If Not _IniFileExists() Then _CreateOptionsIni()
Global $SOURCEDIR = IniRead($INIPATH, "general", "source", @DocumentsCommonDir)
Global $TARGETDIR = IniRead($INIPATH, "general", "target", @DocumentsCommonDir)

$inputDir = FileSelectFolder("Quellordner wählen", $SOURCEDIR)
If @error Then
   MsgBox($MB_SYSTEMMODAL, "Fehler", "Kein gültiger Ordner.")
   Exit
EndIf

$outputDir = FileSelectFolder("Zielprojektordner wählen", $TARGETDIR)
If @error Then
   MsgBox($MB_SYSTEMMODAL, "Fehler", "Kein gültiger Ordner.")
   Exit
EndIf

$inputFiles = _FileListToArray($inputDir, "*.txt", $FLTA_FILES)
If @error = 1 Then
   MsgBox($MB_SYSTEMMODAL, "Fehler", "Ungültiger Pfad.")
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

Func _IniFileExists()
	Return FileExists($INIPATH)
EndFunc

Func _CreateOptionsIni()
	_FileCreate($INIPATH)
	Local $file = FileOpen($INIPATH, 1)

	FileWriteLine($file, "[general]")
	FileWriteLine($file, "source=" & @DocumentsCommonDir)
	FileWriteLine($file, "target=" & @DocumentsCommonDir)

	FileClose($file)
EndFunc