---
title: "Section 4 — Container and Cloud Tools"
prev:
  text: "Section 3 · Flutter and Android"
  link: /sections/03-android
next:
  text: "Section 6 · Final Readiness and Download Test"
  link: /sections/06-readiness
---

# Section 4 — Container and Cloud Tools

<PrepImage asset="section-04" eager />

Install the local tools used for containers and Azure. The instructor will provide the training environment and private access instructions.

## 1. Docker Desktop

1. Install Docker Desktop for [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) or [macOS](https://docs.docker.com/desktop/setup/install/mac-install/). On a Mac, choose the installer matching Apple silicon or Intel.
2. Ask IT to confirm your organization's [Docker Desktop license eligibility](https://docs.docker.com/subscription-billing/desktop-license/) and the supported virtualization/backend requirements. Some organizations require a paid subscription.
3. Start Docker Desktop and wait for its engine to be running.
4. Check:

   ```sh
   docker version
   ```

**Completion check:** the output includes both **Client** and **Server** information. Client information alone does not confirm the engine is running.

## 2. Azure CLI

1. Follow the [Azure CLI installation guide](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) for your operating system.
2. Reopen your terminal and run:

   ```sh
   az version
   ```

**Completion check:** Azure CLI version information is displayed.

## 3. Training access

The instructor provides the **Azure account, PostgreSQL database, and Azure Container Apps environment**. Receive your assigned credentials through the private channel and complete the supplied access check when instructed.

You do not need to create an Azure subscription, database, or Container App before training. Keep training credentials out of chat, screenshots, and Git repositories.

::: info Your next step
Continue to Section 6 for the required final check. Mac users who want to try the iOS Simulator can complete [Section 5 — Optional iOS Setup](./05-ios) first.
:::
