import { expect, test } from '@playwright/test';
import { testNames } from '../src/data/testNames';

test.describe.configure({ mode: 'parallel' });

testNames.forEach((testName) => {
  test(`test ${testName}`, async ({ page }, testInfo) => {
    await page.goto(`http://localhost:4173/${testName}`);
    await expect(page).toHaveScreenshot([testName, testInfo.project.name + '.png']);
  });
});
