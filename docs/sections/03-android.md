---
title: "Section 3 — Flutter and Android"
prev:
  text: "Section 2 · Core Development Tools"
  link: /sections/02-tools
next:
  text: "Section 4 · Container and Cloud Tools"
  link: /sections/04-cloud-tools
---

# Section 3 — Flutter and Android

<PrepImage asset="section-03" eager />

Prepare Flutter for both browser preview and Android testing. Use one working Android emulator or a physical Android phone.

## 1. Flutter SDK

1. Follow the [manual Flutter installation guide](https://docs.flutter.dev/install/manual) for Windows or macOS. Use the **stable** channel. Dart is included.
2. Add Flutter's `bin` folder to PATH, then reopen your terminal.
3. Run:

   ```sh
   flutter --version
   ```

**Completion check:** a Flutter version and the stable channel are displayed.

## 2. Android Studio and SDK tools

1. [Download Android Studio](https://developer.android.com/studio) and complete its initial setup.
2. Follow the [Flutter Android setup guide](https://docs.flutter.dev/platform-integration/android/setup). In **SDK Manager**, install the required Android SDK Platform, Build-Tools, Command-line Tools, Platform-Tools, and any NDK/CMake components required by the guide. Add emulator tools if using an emulator.
3. Review the Android SDK licenses using:

   ```sh
   flutter doctor --android-licenses
   ```

4. Accept the applicable licenses according to your organization's policy, then run:

   ```sh
   flutter doctor -v
   ```

**Completion check:** Flutter reports no blockers for Android development. Xcode warnings can be skipped if you are following only the Android/browser path.

## 3. Android emulator or phone

1. Choose a test device using the [official device setup instructions](https://docs.flutter.dev/platform-integration/android/setup).
2. **Emulator:** use Android Studio's **Device Manager** to create a virtual device, download its system image, and start it. Ask IT to enable supported virtualization if needed.
3. **Physical phone:** enable Developer options and USB debugging, connect with a USB data cable, and approve the computer on the phone. Install the manufacturer's USB driver on Windows if required.
4. Check device detection:

   ```sh
   flutter devices
   adb devices
   ```

5. Follow [Flutter's first-app instructions](https://docs.flutter.dev/reference/create-new-app#terminal) to run a sample app in Chrome and on your chosen Android device.

::: tip Completion check
Chrome and your chosen Android device are detected, and a sample Flutter app runs on both. An Android device listed as `unauthorized` still needs approval on the phone.
:::
