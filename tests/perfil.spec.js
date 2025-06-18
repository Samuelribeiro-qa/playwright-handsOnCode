import { test, expect } from '@playwright/test'
import { loadHomePage, fillInData, logPerfil } from '../helpers'

test('Perfil', async ({ page }) => {
    // Entrar no site
    await loadHomePage(page)

    await expect(page).toHaveTitle("Entrar - Hands On Code")

    // Preencher os campos
    await fillInData(page)

    // Mensagem esperada
    await expect(page.getByRole('link', { name: 'Hands On Code' })).toBeVisible()

    // Logar no perfil
    await logPerfil(page)

    await expect(page.getByRole('heading', { name: 'Samuel Vinicius' })).toBeVisible()
})

test('Meus dados', async ({ page }) => {
    // Entrar no site
    await loadHomePage(page)

    await expect(page).toHaveTitle("Entrar - Hands On Code")

    // Preencher os campos
    await fillInData(page)

    // Mensagem esperada
    await expect(page.getByRole('link', { name: 'Hands On Code' })).toBeVisible()

    // Logar no perfil
    await logPerfil(page)

    await expect(page.getByRole('heading', { name: 'Samuel Vinicius' })).toBeVisible()

    // Clicar em Meus Dados 
    await page.getByRole('link', { name: ' Meus dados' }).nth(1).click()

    // Estar dentro da url de Meus dados
    await page.goto('https://app.eadhandsoncode.com.br/campus/meus-dados')

    // Preencher o campo data de Nascimento
    await page.locator('input[name="user_datebirth"]').click()
    await page.locator('input[name="user_datebirth"]').fill('28102005')

    // Preencher o campo CEP
    await page.locator('input[name="addr_zipcode"]').click()
    await page.locator('input[name="addr_zipcode"]').fill('13308-075')

    // Preencher o número da casa
    await page.locator('input[name="addr_number"]').click()
    await page.locator('input[name="addr_number"]').fill('05')

    // Clicar no botão 'Salvar Dados'
    await page.getByRole('button', { name: ' Salvar Dados' }).click()

    // Validação dos Campos a seguir: (Bairro, Estado, Cidade, País e Endereço)
    await expect(page.locator('input[name="addr_district"]')).toHaveValue('Jardim Guanhembu')
    await expect(page.locator('input[name="addr_city"]')).toHaveValue('São Paulo')
    await expect(page.locator('input[name="addr_street"]')).toHaveValue('Rua Daniel Ribeiro Calado')
    await expect(page.locator('input[name="addr_state"]')).toHaveValue('SP')
    await expect(page.locator('input[name="addr_country"]')).toHaveValue('Brasil')
})

test('Meus certificados', async ({ page }) => {

    // Entrar no site
    await loadHomePage(page)

    await expect(page).toHaveTitle("Entrar - Hands On Code")

    // Preencher os campos
    await fillInData(page)

    // Mensagem esperada
    await expect(page.getByRole('link', { name: 'Hands On Code' })).toBeVisible()

    // Logar no perfil
    await logPerfil(page)

    await expect(page.getByRole('heading', { name: 'Samuel Vinicius' })).toBeVisible()

    // Clicar em Meus Certificados 
    await page.getByRole('link', { name: ' Meus certificados' }).nth(1)

    // Estar dentro da url de Meus certificados
    await page.goto('https://app.eadhandsoncode.com.br/campus/certificados')

    await expect(page.getByText('Você ainda não tem')).toBeVisible()
})

test('Meus pedidos', async ({ page }) => {
    // Entrar no site
    await loadHomePage(page)

    await expect(page).toHaveTitle("Entrar - Hands On Code")

    // Preencher os campos
    await fillInData(page)

    // Mensagem esperada
    await expect(page.getByRole('link', { name: 'Hands On Code' })).toBeVisible()

    // Logar no perfil
    await logPerfil(page)

    await expect(page.getByRole('heading', { name: 'Samuel Vinicius' })).toBeVisible()

    // Clicar em Meus pedidos 
    await page.getByRole('link', { name: ' Meus pedidos' }).nth(1)

    // Estar dentro da url de Meus pedidoss
    await page.goto('https://app.eadhandsoncode.com.br/campus/meus-pedidos')

    await expect(page.getByRole('cell', { name: 'Produto' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'Data' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'Valor' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'Garantia' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'Reembolso' })).toBeVisible()
})

test('Minha Senha', async ({ page }) => {
    // Entrar no site
    await loadHomePage(page)

    await expect(page).toHaveTitle("Entrar - Hands On Code")

    // Preencher os campos
    await fillInData(page)

    // Mensagem esperada
    await expect(page.getByRole('link', { name: 'Hands On Code' })).toBeVisible()

    // Logar no perfil
    await logPerfil(page)

    await expect(page.getByRole('heading', { name: 'Samuel Vinicius' })).toBeVisible()

    // Clicar em Minha senha 
    await page.getByRole('link', { name: ' Minha senha' }).nth(1)

    // Estar dentro da url de Minha senha
    await page.goto('https://app.eadhandsoncode.com.br/campus/minha-senha')

    await expect(page.locator('input[type="email"]')).toHaveValue('samuelvinicius.vr@gmail.com')
})