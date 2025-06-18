import {test, expect} from '@playwright/test'
import { loadHomePage } from '../helpers';

test('Home', async ({page})=> {
    await loadHomePage(page)
    await expect(page).toHaveTitle("Entrar - Hands On Code");
})