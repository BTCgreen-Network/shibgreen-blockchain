!include "nsDialogs.nsh"

; Add our customizations to the finish page
!macro customFinishPage
XPStyle on

Var DetectDlg
Var FinishDlg
Var SHIBgreenSquirrelInstallLocation
Var SHIBgreenSquirrelInstallVersion
Var SHIBgreenSquirrelUninstaller
Var CheckboxUninstall
Var UninstallSHIBgreenSquirrelInstall
Var BackButton
Var NextButton

Page custom detectOldSHIBgreenVersion detectOldSHIBgreenVersionPageLeave
Page custom finish finishLeave

; Add a page offering to uninstall an older build installed into the shibgreen-blockchain dir
Function detectOldSHIBgreenVersion
  ; Check the registry for old shibgreen-blockchain installer keys
  ReadRegStr $SHIBgreenSquirrelInstallLocation HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\shibgreen-blockchain" "InstallLocation"
  ReadRegStr $SHIBgreenSquirrelInstallVersion HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\shibgreen-blockchain" "DisplayVersion"
  ReadRegStr $SHIBgreenSquirrelUninstaller HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\shibgreen-blockchain" "QuietUninstallString"

  StrCpy $UninstallSHIBgreenSquirrelInstall ${BST_UNCHECKED} ; Initialize to unchecked so that a silent install skips uninstalling

  ; If registry keys aren't found, skip (Abort) this page and move forward
  ${If} SHIBgreenSquirrelInstallVersion == error
  ${OrIf} SHIBgreenSquirrelInstallLocation == error
  ${OrIf} $SHIBgreenSquirrelUninstaller == error
  ${OrIf} $SHIBgreenSquirrelInstallVersion == ""
  ${OrIf} $SHIBgreenSquirrelInstallLocation == ""
  ${OrIf} $SHIBgreenSquirrelUninstaller == ""
  ${OrIf} ${Silent}
    Abort
  ${EndIf}

  ; Check the uninstall checkbox by default
  StrCpy $UninstallSHIBgreenSquirrelInstall ${BST_CHECKED}

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $DetectDlg

  ${If} $DetectDlg == error
    Abort
  ${EndIf}

  !insertmacro MUI_HEADER_TEXT "Uninstall Old Version" "Would you like to uninstall the old version of SHIBgreen Blockchain?"

  ${NSD_CreateLabel} 0 35 100% 12u "Found SHIBgreen Blockchain $SHIBgreenSquirrelInstallVersion installed in an old location:"
  ${NSD_CreateLabel} 12 57 100% 12u "$SHIBgreenSquirrelInstallLocation"

  ${NSD_CreateCheckBox} 12 81 100% 12u "Uninstall SHIBgreen Blockchain $SHIBgreenSquirrelInstallVersion"
  Pop $CheckboxUninstall
  ${NSD_SetState} $CheckboxUninstall $UninstallSHIBgreenSquirrelInstall
  ${NSD_OnClick} $CheckboxUninstall SetUninstall

  nsDialogs::Show

FunctionEnd

Function SetUninstall
  ; Set UninstallSHIBgreenSquirrelInstall accordingly
  ${NSD_GetState} $CheckboxUninstall $UninstallSHIBgreenSquirrelInstall
FunctionEnd

Function detectOldSHIBgreenVersionPageLeave
  ${If} $UninstallSHIBgreenSquirrelInstall == 1
    ; This could be improved... Experiments with adding an indeterminate progress bar (PBM_SETMARQUEE)
    ; were unsatisfactory.
    ExecWait $SHIBgreenSquirrelUninstaller ; Blocks until complete (doesn't take long though)
  ${EndIf}
FunctionEnd

Function finish

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $FinishDlg

  ${If} $FinishDlg == error
    Abort
  ${EndIf}

  GetDlgItem $NextButton $HWNDPARENT 1 ; 1 = Next button
  GetDlgItem $BackButton $HWNDPARENT 3 ; 3 = Back button

  ${NSD_CreateLabel} 0 35 100% 12u "SHIBgreen has been installed successfully!"
  EnableWindow $BackButton 0 ; Disable the Back button
  SendMessage $NextButton ${WM_SETTEXT} 0 "STR:Let's Farm!" ; Button title is "Close" by default. Update it here.

  nsDialogs::Show

FunctionEnd

; Copied from electron-builder NSIS templates
Function StartApp
  ${if} ${isUpdated}
    StrCpy $1 "--updated"
  ${else}
    StrCpy $1 ""
  ${endif}
  ${StdUtils.ExecShellAsUser} $0 "$launchLink" "open" "$1"
FunctionEnd

Function finishLeave
  ; Launch the app at exit
  Call StartApp
FunctionEnd

; Section
; SectionEnd
!macroend
