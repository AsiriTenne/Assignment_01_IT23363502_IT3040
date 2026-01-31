Singlish to Sinhala Translator - Automated Test Suite
Project Overview
This project contains a comprehensive automated testing suite for the SwiftTranslator web application. The application converts Singlish (phonetic Sinhala typed in English characters) into standard Sinhala script in real-time.

The test suite is built using Playwright and is designed to validate functional accuracy, edge-case handling, and UI responsiveness across multiple browser engines.

Features Tested
Functional Accuracy: 24 Positive test cases covering simple, compound, and complex sentences, as well as various tenses and polite forms.

Robustness (Negative Testing): 12 Negative test cases covering currency, dates, technical English terms, and long paragraph-style inputs.

UI/UX Functionality: Validation of the Real-time update engine, Clear/Undo button logic, and Swap Language functionality.

Tech Stack
Framework: Playwright (Node.js)

Browsers: Chromium, Firefox, WebKit (Safari)

Language: JavaScript

Reporting: Playwright HTML Reporter

Project Structure
Plaintext
├── tests/
│   └── swift_translator.spec.js  # Main test suite (38 test cases)
├── playwright.config.js          # Cross-browser & timeout configurations
├── package.json                  # Dependencies and scripts
└── .gitignore                    # Exclusions for node_modules and reports
Setup Instructions
Clone the Repository:

Bash
git clone https://github.com/AsiriTenne/Assignment_01_IT23363502_IT3040.git
cd Assignment_01_IT23363502_IT3040
Install Dependencies:

Bash
npm install
Install Browsers:

Bash
npx playwright install
Running Tests
Run all tests on all browsers (Chromium, Firefox, WebKit):
Bash
npx playwright test
Run only on Chromium (Headless):
Bash
npx playwright test --project=chromium
Run in Headed mode (To see the browser):
Bash
npx playwright test --project=chromium --headed
View Test Reports
After running the tests, you can view a detailed HTML report by running:

Bash
npx playwright show-report
Test Configuration Details
To ensure stability across different network speeds and browser engines, the following configurations were applied:

Global Timeout: 60 seconds per test.

Action Timeout: 15 seconds for translation polling to account for rendering delays in WebKit/Firefox.

Typing Delay: 100ms between keystrokes to simulate natural user input and trigger real-time updates.

Known Issues
Undo/Clear Button: Occasional sync issues observed in specific browser engines where the internal state of the textarea does not reset immediately upon click.+

How to Interpret the Test Results
In this automation suite, the status indicators should be read as follows:

✅ Green Tick (Passed): The application behaved exactly as expected. The Singlish input was translated into the correct Sinhala script according to the test case requirements.

❌ Red Cross (Failed): This indicates a Functional Discrepancy. The test script worked perfectly, but the "SwiftTranslator" website produced an incorrect translation or failed to clear the text.

Author: Asiri Tenne

Student ID: IT23363502

Module: IT3040 - Assignment 01
