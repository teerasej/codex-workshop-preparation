---
title: "Section 6 — Final Readiness and Download Test"
prev:
  text: "Section 4 · Container and Cloud Tools"
  link: /sections/04-cloud-tools
next: false
---

# Section 6 — Final Readiness and Download Test

<PrepImage asset="section-06" eager />

Complete these checks before the first training day. If something is blocked, contact the organizer or IT with the tool name and a redacted error message.

## 1. Tool readiness

1. Confirm Codex creates a test file inside a local project folder.
2. Confirm Git and Python 3.12 display their versions.
3. Run the Flutter checks below. Confirm Chrome and your chosen Android device are detected, with no blockers for those targets.

   ```sh
   flutter doctor -v
   flutter devices
   ```

4. Run a sample Flutter app in Chrome and on Android.
5. Confirm Docker Desktop is running and the following command shows both **Client** and **Server**:

   ```sh
   docker version
   ```

6. Confirm Azure CLI displays version information:

   ```sh
   az version
   ```

7. If completing the optional iOS activity, confirm a sample app runs on your Simulator.

## 2. Download test {#download-test}

Check that your laptop and training network can download and extract files from this website.

<DownloadTest />

1. Select **Download test ZIP** above and save the file to your laptop. Your browser's Downloads panel should show a completed download.
2. Extract `preparation-download-test.zip`. On Windows, right-click it and select **Extract All**. On macOS, double-click the ZIP.
3. Confirm the extracted folder contains exactly these three files:

   ```text
   README.txt
   download-success.txt
   sample-data.csv
   ```

4. Open `download-success.txt` in a text editor. Confirm it contains:

   ```text
   Download test successful.
   ```

5. Open `sample-data.csv` in a text editor or spreadsheet application and confirm it contains a header and three fictional service requests.

::: tip Completion check
The ZIP downloads, extracts, and its text and CSV files open successfully. This checks file access and extraction; it does not confirm that development tools are ready.
:::

If a security or network policy blocks the download, ask IT to review access to this website. Keep the error message available for support.

## 3. Bring to training

1. Laptop and charger.
2. USB data cable if using a physical Android phone.
3. Access to your ChatGPT/Codex and GitHub accounts.
4. Assigned training credentials, when provided through the private channel.
5. Any unresolved setup errors, with passwords and other secrets removed.

**Ready to attend:** required tools work, a sample Flutter app runs in Chrome and Android, and the download test passes. iOS remains optional. VS Code is not required.
