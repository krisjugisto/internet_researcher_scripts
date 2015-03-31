#include <File.au3>
#include <MsgBoxConstants.au3>
#include <TrayConstants.au3>

Global $INIPATH = @ScriptDir & "\settings.ini"

; Check for options.
If Not _IniFileExists() Then _CreateOptionsIni()
Global $SOURCEDIR = IniRead($INIPATH, "general", "source", @DocumentsCommonDir)
Global $TARGETDIR = IniRead($INIPATH, "general", "target", @DocumentsCommonDir)

Opt("TrayMenuMode", 3)

$moveFiles = TrayCreateItem("Dateien verschieben")
TrayCreateItem("")
$setSource = TrayCreateItem("Quelle festlegen")
$setDestination = TrayCreateItem("Ziel festlegen")
TrayCreateItem("")
$Exit = TrayCreateItem("Beenden")

TraySetState($TRAY_ICONSTATE_SHOW)

While 1
	Switch TrayGetMsg()
		Case $moveFiles
			_MoveFiles($SOURCEDIR, $TARGETDIR)
		Case $setSource
			_SetSource()
			$SOURCEDIR = IniRead($INIPATH, "general", "source", @DocumentsCommonDir)
		Case $setDestination
			_SetTarget()
			$TARGETDIR = IniRead($INIPATH, "general", "target", @DocumentsCommonDir)
		Case $Exit
			ExitLoop
	EndSwitch
WEnd

Func _SetSource()
	Local $inputDir = FileSelectFolder("Quellordner wählen", $SOURCEDIR)
	If @error Then
	   MsgBox($MB_SYSTEMMODAL, "Fehler", "Kein gültiger Ordner.")
	Else
		IniWrite($INIPATH, "general", "source", $inputDir)
	EndIf
EndFunc

Func _SetTarget()
	Local $outputDir = FileSelectFolder("Zielprojektordner wählen", $TARGETDIR)
	If @error Then
		MsgBox($MB_SYSTEMMODAL, "Fehler", "Kein gültiger Ordner.")
	Else
		IniWrite($INIPATH, "general", "target", $outputDir)
	EndIf
EndFunc

Func _MoveFiles($inputDir, $outputDir)
	Local $inputFiles = _FileListToArray($inputDir, "*.txt", $FLTA_FILES)
	If @error = 1 Then
	   MsgBox($MB_SYSTEMMODAL, "Fehler", "Ungültiger Pfad.")
	   Return -1
	EndIf
	If @error = 4 Then
	   MsgBox($MB_SYSTEMMODAL, "Fehler", "Keine Dateien gefunden.")
	   Return -1
	EndIf

	For $i = 1 To $inputFiles[0]
	   Local $splitMIMEType = StringSplit($inputFiles[$i], ".")[1]
	   ;ToDo: Plausibility and error checks for StringSplit?
	   Local $splitFileName = StringSplit($splitMIMEType, "_")
	   Local $firstName = $splitFileName[2]
	   Local $lastName = $splitFileName[1]
	   Local $outputFilePath = $outputDir & "\" & $lastname & "," & " " & $firstName
	   ;ToDo: Error-Handling here for DirCreate?
	   DirCreate($outputFilePath)
	   ;ToDo: Error-Handling FileMove?
	   FileMove($inputDir & "\" & $inputFiles[$i], $outputFilePath)
	Next
EndFunc

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