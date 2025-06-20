import { test, expect } from '@playwright/test'
import { loadHomePage, fillInData, logPerfil } from '../helpers'

test('Acessar as anotações', async ({page})=>{
    await loadHomePage(page)

    await fillInData(page)

    await page.getByRole('link', { name: '' }).click()

    await page.goto('https://app.eadhandsoncode.com.br/campus/anotacoes')

    await expect(page.getByRole('heading', { name: 'Minhas anotações' })).toBeVisible()
    await expect(page.getByText('Ainda não há anotações aqui!')).toBeVisible()
})

test('Acessar os favoritos', async ({page})=>{
    await loadHomePage(page)

    await fillInData(page)

    await page.getByRole('link', { name: '' }).click()

    await page.goto('https://app.eadhandsoncode.com.br/campus/favoritos')

    await expect(page.getByRole('heading', { name: 'Favoritos' })).toBeVisible()
    await expect(page.getByText('Você ainda não tem cursos')).toBeVisible()
})

