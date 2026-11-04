---
title: "Section 2 — Core Development Tools"
prev:
  text: "Section 1 · Accounts and Workspace"
  link: /sections/01-accounts
next:
  text: "Section 3 · Flutter and Android"
  link: /sections/03-android
---

# Section 2 — Core Development Tools

<PrepImage asset="section-02" eager />

Install the tools used for source control, Python APIs, and browser preview. Choose the download for your operating system.

## 1. Git

1. [Download and install Git](https://git-scm.com/install/).
2. Close and reopen PowerShell on Windows or Terminal on macOS, then run:

   ```sh
   git --version
   ```

**Completion check:** a Git version is displayed.

## 2. Python 3.12

1. Install **Python 3.12** using your organization's approved method. This is the course baseline, rather than the newest Python feature version.
2. For Windows, use the [official Python downloads](https://www.python.org/downloads/) and [Windows installation guide](https://docs.python.org/3/using/windows.html). Select a 3.12 runtime. For macOS, use an IT-approved Python 3.12 distribution.
3. If your installation process requires the traditional Windows/macOS installer, use the [Python 3.12.10 installer page](https://www.python.org/downloads/release/python-31210/). This is an older release; ask IT about an approved distribution with current 3.12 security fixes. [Newer 3.12 releases](https://www.python.org/downloads/release/python-31216/) are source-only, so do not download the source archive as a normal installer.
4. Verify the intended interpreter:

   **Windows — PowerShell**

   ```powershell
   py -3.12 --version
   ```

   **macOS — Terminal**

   ```sh
   python3.12 --version
   ```

**Completion check:** the output begins with `Python 3.12`.

## 3. Google Chrome

1. [Download Google Chrome](https://www.google.com/chrome/) or update your existing installation.
2. Open Chrome and confirm you can access this preparation website.

**Completion check:** Chrome opens and the website loads.

::: info Installation permissions
If an installer is blocked or a command cannot be found, ask IT to complete setup before class. Reopen your terminal after changing PATH.
:::
