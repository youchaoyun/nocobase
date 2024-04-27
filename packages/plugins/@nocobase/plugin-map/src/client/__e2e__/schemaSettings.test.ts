import { expect, expectSettingsMenu, test } from '@nocobase/test/e2e';
import { oneMapUsedToTestSettings } from './templates';

test.beforeEach(async ({ page }) => {
  await page.goto('/admin/settings/map');
  await page.waitForLoadState('networkidle');
  if (await page.getByRole('button', { name: 'Edit' }).isVisible()) {
    await page.getByRole('button', { name: 'Edit' }).click();
  }
  await page.getByLabel('Access key').click();
  await page.getByLabel('Access key').fill('9717a70e44273882bcf5489f72b4e261');
  await page.getByLabel('securityJsCode or serviceHost').click();
  await page.getByLabel('securityJsCode or serviceHost').fill('6876ed2d3a6168b75c4fba852e16c99c');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('.ant-message-notice').getByText('Saved successfully')).toBeVisible();
});

test.afterEach(async ({ page }) => {
  await page.goto('/admin/settings/map');
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByLabel('Access key').clear();
  await page.getByLabel('securityJsCode or serviceHost').clear();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('.ant-message-notice').getByText('Saved successfully')).toBeVisible();
});

test.describe('schema settings', () => {
  test('what settings can be used in map block', async ({ page, mockPage }) => {
    await mockPage(oneMapUsedToTestSettings).goto();

    await expectSettingsMenu({
      page,
      showMenu: async () => {
        await page.getByLabel('block-item-CardItem-map-map').hover();
        await page.getByLabel('designer-schema-settings-CardItem-blockSettings:map-map').hover();
      },
      supportedOptions: [
        'Edit block title',
        'Fix block',
        'Map field',
        'Marker field',
        'Concatenation order field',
        'Set data loading mode',
        'The default zoom level of the map',
        'Set the data scope',
        'Connect data blocks',
        'Save as template',
        'Delete',
      ],
    });
  });
});