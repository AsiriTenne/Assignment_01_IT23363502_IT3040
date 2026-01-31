# Singlish to Sinhala Translator – Automated Test Suite

## 📌 Project Overview

This repository contains a **comprehensive automated testing suite** for the **SwiftTranslator** web application. The application converts **Singlish** (phonetic Sinhala typed using English characters) into **standard Sinhala script** in real time.

The test suite is built using **Playwright** and validates **functional accuracy**, **edge‑case handling**, and **UI responsiveness** across multiple browser engines.

---

## 🧪 Features Tested

### ✅ Functional Accuracy (Positive Testing)

* 24 test cases covering:

  * Simple, compound, and complex sentences
  * Various verb tenses
  * Polite and formal Sinhala expressions

### ⚠️ Robustness (Negative Testing)

* 12 test cases covering:

  * Currency values
  * Dates and numbers
  * Technical English terms
  * Long paragraph‑style inputs

### 🎨 UI / UX Functionality

* Real‑time translation update engine
* Clear / Undo button behavior
* Swap Language functionality

---

## 🛠 Tech Stack

* **Test Framework:** Playwright (Node.js)
* **Browsers Tested:**

  * Chromium
  * Firefox
  * WebKit (Safari)
* **Language:** JavaScript
* **Reporting:** Playwright HTML Reporter

---

## 📁 Project Structure

```
├── tests/
│   └── swift_translator.spec.js   # Main test suite (38 test cases)
├── playwright.config.js           # Cross‑browser & timeout configurations
├── package.json                   # Dependencies and npm scripts
└── .gitignore                      # Excludes node_modules & reports
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AsiriTenne/Assignment_01_IT23363502_IT3040.git
cd Assignment_01_IT23363502_IT3040
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests on all browsers

```bash
npx playwright test
```

### Run only on Chromium (Headless)

```bash
npx playwright test --project=chromium
```

### Run in Headed Mode (Visible Browser)

```bash
npx playwright test --project=chromium --headed
```

---

## 📊 View Test Reports

After executing the tests, generate and view the HTML report using:

```bash
npx playwright show-report
```

---

## 🔧 Test Configuration Details

To ensure stability across different browsers and network conditions, the following configurations are applied:

* **Global Timeout:** 60 seconds per test
* **Action Timeout:** 15 seconds (for translation polling in WebKit & Firefox)
* **Typing Delay:** 100 ms between keystrokes to simulate natural user input and trigger real‑time updates

---

## 🐞 Known Issues

* **Undo / Clear Button:**

  * Occasional synchronization issues observed in specific browser engines
  * Textarea internal state may not reset immediately after clicking the button

---

## 📈 Interpreting Test Results

| Status       | Meaning                                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| ✅ **Passed** | The application behaved exactly as expected and produced correct Sinhala translations                     |
| ❌ **Failed** | A **functional discrepancy** was detected in the SwiftTranslator website (test script executed correctly) |

---

## 👤 Author

* **Name:** Asiri Tenne
* **Student ID:** IT23363502
* **Module:** IT3040 – Assignment 01

---

✨ *This automation suite ensures translation accuracy, UI reliability, and cross‑browser consistency for the SwiftTranslator application.*
