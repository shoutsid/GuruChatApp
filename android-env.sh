#!/bin/bash
export ANDROID_SDK_ROOT=/mnt/c/Users/jsumm/AppData/Local/Android/Sdk
export PATH="$PATH:$ANDROID_SDK_ROOT/emulator"
export PATH="$PATH:$ANDROID_SDK_ROOT/tools"
export PATH="$PATH:$ANDROID_SDK_ROOT/tools/bin"
export PATH="$PATH:$ANDROID_SDK_ROOT/platform-tools"

# Aliases for Android executables
alias adb='$ANDROID_SDK_ROOT/platform-tools/adb.exe'
alias emulator='$ANDROID_SDK_ROOT/emulator/emulator.exe'
alias sdkmanager='$ANDROID_SDK_ROOT/tools/bin/sdkmanager.bat'
alias avdmanager='$ANDROID_SDK_ROOT/tools/bin/avdmanager.bat'

# export PATHEXT=$PATHEXT:.EXE
