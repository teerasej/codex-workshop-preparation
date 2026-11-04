---
title: "Section 5 — Optional iOS Setup"
prev:
  text: "Section 4 · Container and Cloud Tools"
  link: /sections/04-cloud-tools
next:
  text: "Section 6 · Final Readiness and Download Test"
  link: /sections/06-readiness
---

# Section 5 — Optional iOS Setup

<PrepImage asset="section-05" eager />

::: info Optional · macOS only
Complete this section only if you want to try Flutter on the iOS Simulator. Windows users and participants following the required Android/browser path can go directly to [Section 6](./06-readiness).
:::

## 1. Xcode and Simulator runtime

1. Use a Mac with a macOS version compatible with the required Xcode release.
2. [Download Xcode](https://developer.apple.com/xcode/) and open it to complete the initial setup and required license prompts.
3. Follow [Flutter's iOS setup guide](https://docs.flutter.dev/platform-integration/ios/setup) to configure Xcode command-line tools and install an iOS Simulator runtime.
4. Open one iPhone Simulator before training. Allow time for Xcode and runtime downloads.

**Completion check:** an iPhone Simulator starts successfully.

## 2. Flutter dependencies

1. Complete the native dependency setup required by the [Flutter iOS guide](https://docs.flutter.dev/platform-integration/ios/setup), including CocoaPods when required by the plugins in use.
2. Run:

   ```sh
   flutter doctor -v
   flutter devices
   ```

**Completion check:** Flutter reports no iOS toolchain blockers and lists your running Simulator.

## 3. Sample-app verification

1. Run a sample Flutter app on the Simulator using [Flutter's first-app instructions](https://docs.flutter.dev/reference/create-new-app#terminal).
2. Confirm the app opens and responds to interaction.

::: tip Completion check
A sample Flutter app runs on the iOS Simulator. If setup is incomplete, record it as optional pending and continue with Android/browser preparation.
:::

This activity uses the Simulator. Physical iPhone testing, distribution signing, and App Store submission require separate preparation.
