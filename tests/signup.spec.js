const { test, expect } = require('@playwright/test');

test('should navigate from login to signup', async ({ page }) => {

  // Open the website
await page.goto('/');
// Navigate to the login page if necessary
  if (!page.url().includes('/login')) {
    await page.goto('/login');
  }
// Verify that the login page is displayed
  await expect(
    page.getByRole('heading', { name: 'Log in to Authorized Partner' })
  ).toBeVisible();
// Click the Sign Up link
  await page.getByRole('link', { name: 'Sign Up' }).click();
  // Locate the agreement checkbox
const termsCheckbox = page.getByRole('checkbox');




// Verify that it is visible
await expect(termsCheckbox).toBeVisible();

// Accept the Terms of Service and Privacy Policy
await termsCheckbox.check();

// Verify that it is selected
await expect(termsCheckbox).toBeChecked();
// Verify that the Continue button is visible and enabled
const continueButton = page.getByRole('button', { name: /continue/i });







await expect(continueButton).toBeVisible();
await expect(continueButton).toBeEnabled();

// Click Continue
await continueButton.click();








  // Wait for the signup page to load
await expect(page).toHaveURL(/signup|register/i);
// Wait for the Account Setup form to appear
await expect(page.getByLabel('First Name')).toBeVisible();

// Fill in personal details
await page.getByLabel('First Name').fill('Test');
await page.getByLabel('Last Name').fill('User');

await page.getByLabel('Email Address').fill('your-authorized-test-email@example.com');

await page.getByLabel('Phone Number').fill('9812345677');
















// Fill in the password
await page.locator('input[name="password"]').fill('Test@12345');

// Fill in the confirm password
await page.locator('input[name="confirmPassword"]').fill('Test@12345');
// Verify both password fields contain the expected value
await expect(page.locator('input[name="password"]'))
  .toHaveValue('Test@12345');

await expect(page.locator('input[name="confirmPassword"]'))
  .toHaveValue('Test@12345');


// Locate the Next button
const nextButton = page.getByRole('button', { name: /^next$/i });

// Verify that the Next button is visible and enabled
await expect(nextButton).toBeVisible();
await expect(nextButton).toBeEnabled();

// Click Next to proceed to email verification
await nextButton.click();


  

// Capture signup page evidence
await page.screenshot({
    path: 'screenshots/signup-page.png',
    fullPage: true,
  });

await page.pause();
});