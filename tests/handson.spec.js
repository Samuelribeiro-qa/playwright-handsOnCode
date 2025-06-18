import {test, expect} from '@playwright/test'

test('Home', async ({page})=> {
    await page.goto('/');

    await expect(page).toHaveTitle("Entrar - Hands On Code");
})