# Time Capsule Gift Mini-App

## 📝 Short Description
This repository hosts the **Time Capsule Gift Mini-App**, a modular component that plugs into the Base ecosystem. It enables users to craft personalized digital gifts, lock them with a future timestamp, and ensure they stay sealed until the preset unlock date. The mini-app keeps the Base App lightweight by isolating time-lock logic, media storage, and secure delivery workflows inside its own module.

## 🚀 Topics & Features Covered
- **Modular Integration with Base App:** Seamless authentication, routing, and shared design tokens.
- **Time-Lock Scheduler:** Create, update, and validate unlock timestamps, including timezone handling.
- **Secure Gift Vault:** Encrypts messages/media and stores unlock metadata without exposing Base App resources.
- **Notification & Handoff:** Triggers Base App events (e.g., push/email) when a time capsule unlocks.
- **User Experience Layer:** Capsule timeline views, countdown UI, and responsive layouts matched to the Base design system.
- **Analytics Hook:** Emits capsule creation and unlock metrics back to the Base App’s analytics pipeline.
