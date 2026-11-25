# Authorized Partner Signup Automation

## Project Overview

This project is part of the QA Intern task assigned by Vrit Technologies. The objective is to automate the signup process of the Authorized Partner website using JavaScript and Playwright.

**Website:** https://authorized-partner.vercel.app/

## Current Challenge / Blocker

During manual testing, I used my available email addresses to explore and test the signup process. However, after using those email addresses to create accounts, I encountered a problem when trying to run the signup automation.

The application does not allow registration with an email address that is already in use. It also requires email verification through an OTP before allowing the user to proceed to the next signup page.

This means I cannot continue testing the remaining signup pages using the email addresses already used during manual testing.

I have not bypassed the email verification process. To complete the full end-to-end automation, I would need an unused authorized test email address or a test account/environment provided by the application owner.

Because of this limitation, the complete signup flow and final account creation have not yet been verified.

## Technologies Used

- JavaScript
- Node.js
- Playwright
- Chromium
- Visual Studio Code

## Project Structure

```text
TAP_signup_automation/
│
├── tests/
│   └── signup.spec.js
│
├── screenshots/
│
├── test_data/
│
├── test-results/
│
├── node_modules/
│
├── package.json
├── package-lock.json
└── playwright.config.js
```

## Setup and Installation

The following tools are required:

- Node.js
- npm
- Visual Studio Code
- Playwright

Install the project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## How to Run the Tests

Open the project directory in Visual Studio Code and run the following commands in the terminal.

**Run tests:**

```bash
npx playwright test
```

**Run tests with the browser visible:**

```bash
npx playwright test --headed
```

## Automation Progress

The following work has been completed or explored:

1. Set up the Playwright automation environment.
2. Created the initial project structure.
3. Tested navigation to the website.
4. Identified the login page as the entry point to signup.
5. Identified the Sign Up navigation option.
6. Identified the Terms of Service and Privacy Policy agreement checkbox.
7. Inspected the Account Setup form fields.
8. Identified the input attributes required for locating the form fields.
9. Implemented initial form-filling logic.
10. Identified email OTP verification as a blocker to continuing the signup process.

## Signup Flow Under Test

The intended signup process includes:

1. Open the Authorized Partner website.
2. Navigate to the Login page.
3. Select Sign Up.
4. Accept the Terms of Service and Privacy Policy.
5. Complete the Account Setup form.
6. Submit the form using the Next button.
7. Verify the email using the OTP.
8. Complete Agency Details.
9. Complete Professional Experience.
10. Complete Verification and Preferences.
11. Submit the final form.
12. Verify successful account creation and redirection to the admin profile.

**Note:** The complete flow listed above is the intended test scope. It has not yet been fully automated or executed because of the email verification blocker.

## Test Data

Synthetic test information was used for form exploration.

Email addresses used during manual testing were already registered with the application. No passwords or OTP codes are included in this repository.

A fresh, authorized test email account is required to continue testing the complete signup process.

## Test Execution Status

| Test Activity | Status |
|---|---|
| Playwright environment setup | Completed |
| Initial website navigation test | Passed |
| Login and signup navigation exploration | Completed |
| Terms and Conditions checkbox identification | Completed |
| Account Setup field inspection | Completed |
| Account Setup automation | In progress |
| Email OTP automation | Blocked |
| Agency Details automation | Not completed |
| Professional Experience automation | Not completed |
| Verification and Preferences automation | Not completed |
| Final account creation verification | Not completed |

## Next Steps

To continue the automation, the following are required:

- An unused authorized test email address.
- Access to the email verification OTP.
- Completion of automation for the remaining signup pages.
- Execution of the complete signup flow.
- Final screenshots and execution report.

## Conclusion

This project helped me understand how to set up Playwright, inspect website form elements, identify selectors, and begin automating a multi-step signup process.

The main challenge encountered was the application's email verification requirement combined with the restriction against registering an already-used email address.

The remaining work is to obtain an authorized test email account and complete the automation from email verification through final account creation.
