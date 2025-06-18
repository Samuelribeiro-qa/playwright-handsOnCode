import {test, expect} from '@playwright/test'

test('Perfil', async ({page})=> {
        // Acessar o site
        await page.goto('/');

        // Verificar se está no site
        await expect(page).toHaveTitle("Entrar - Hands On Code");
    
        // Preenchendo o Campo e-mail
        await page.getByPlaceholder('Digite seu e-mail...').click()
        await page.getByPlaceholder('Digite seu e-mail...').fill('samuelvinicius.vr@gmail.com')
    
        // Preenchendo o Campo senha
        await page.getByPlaceholder('Digite sua senha...').click()
        await page.getByPlaceholder('Digite sua senha...').fill('@Handsoncode_administrativo2025')
    
        // Clicando no botão Entrar
        await page.getByRole('button').click()
    
        await page.goto('https://app.eadhandsoncode.com.br/campus/')
    
        // Mensagem esperada
        await expect(page.getByRole('link', { name: 'Hands On Code' })).toBeVisible()

        // Clicar no meu Perfil
        await page.getByRole('link', { name: 'Samuel Vinicius ' }).click()

        await page.goto('https://app.eadhandsoncode.com.br/campus/meu-perfil')

        await expect(page.getByRole('heading', { name: 'Samuel Vinicius' })).toBeVisible()
})

test('Meus dados', async ({page})=> {
    // Acessar o site
    await page.goto('/');

    // Verificar se está no site
    await expect(page).toHaveTitle("Entrar - Hands On Code");

    // Preenchendo o Campo e-mail
    await page.getByPlaceholder('Digite seu e-mail...').click()
    await page.getByPlaceholder('Digite seu e-mail...').fill('samuelvinicius.vr@gmail.com')

    // Preenchendo o Campo senha
    await page.getByPlaceholder('Digite sua senha...').click()
    await page.getByPlaceholder('Digite sua senha...').fill('@Handsoncode_administrativo2025')

    // Clicando no botão Entrar
    await page.getByRole('button').click()

    await page.goto('https://app.eadhandsoncode.com.br/campus/')

    // Mensagem esperada
    await expect(page.getByRole('link', { name: 'Hands On Code' })).toBeVisible()

    // Clicar no meu Perfil
    await page.getByRole('link', { name: 'Samuel Vinicius ' }).click()

    // Entrar no meu perfil
    await page.goto('https://app.eadhandsoncode.com.br/campus/meu-perfil')

    // Verificar se estou realmente acessando
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