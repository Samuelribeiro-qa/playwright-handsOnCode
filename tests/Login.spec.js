import {test, expect} from '@playwright/test'

test('Login com sucesso!', async ({page})=> {
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
})

test('Não deve logar com e-mail inválido', async ({page})=> {
    // Acessar o site
    await page.goto('/');

    // Verificar se está no site
    await expect(page).toHaveTitle("Entrar - Hands On Code");

    // Preenchendo o Campo e-mail
    await page.getByPlaceholder('Digite seu e-mail...').click()
    await page.getByPlaceholder('Digite seu e-mail...').fill('test@test')

    // Preenchendo o Campo senha
    await page.getByPlaceholder('Digite sua senha...').click()
    await page.getByPlaceholder('Digite sua senha...').fill('pwd')

    // Clicando no botão Entrar
    await page.getByRole('button').click()

    // Mensagem esperada
    await expect(page.getByRole('dialog', { name: 'Oops!' })).toBeVisible()

    // Clicar no botão entendi 
    await page.getByRole('button', { name: 'ENTENDI' }).click()

    // Validar mensagem de E-mail inválido
    await expect(page.getByRole('paragraph')).toHaveText('E-mail Inválido!')
})

test('Não deve logar com senha incorreta', async ({page})=> {
    // Acessar o site
    await page.goto('/');

    // Verificar se está no site
    await expect(page).toHaveTitle("Entrar - Hands On Code");

    // Preenchendo o Campo e-mail
    await page.getByPlaceholder('Digite seu e-mail...').click()
    await page.getByPlaceholder('Digite seu e-mail...').fill('samuelvinicius@gmail.com')

    // Preenchendo o Campo senha
    await page.getByPlaceholder('Digite sua senha...').click()
    await page.getByPlaceholder('Digite sua senha...').fill('pwd')

    // Clicando no botão Entrar
    await page.getByRole('button').click()

    // Mensagem esperada
    await expect(page.getByRole('dialog', { name: 'Oops!' })).toBeVisible()

    // Clicar no botão entendi 
    await page.getByRole('button', { name: 'ENTENDI' }).click()

})

test('Não deve logar com os campos vazios', async ({page})=> {
    // Acessar o site
    await page.goto('/');

    // Verificar se está no site
    await expect(page).toHaveTitle("Entrar - Hands On Code");

    // Clicando no botão Entrar
    await page.getByRole('button').click()

    // Clicar no botão Entendi
    await page.getByRole('button', { name: 'ENTENDI' }).click()

    // Validar mensagem de E-mail inválido
    await expect(page.getByRole('paragraph')).toHaveText('Informe seu e-mail!')

})

test('Não deve logar com o campo senha vazio', async ({page})=> {
    // Acessar o site
    await page.goto('/');

    // Verificar se está no site
    await expect(page).toHaveTitle("Entrar - Hands On Code");

    // Preenchendo o Campo e-mail
    await page.getByPlaceholder('Digite seu e-mail...').click()
    await page.getByPlaceholder('Digite seu e-mail...').fill('samuelvinicius@gmail.com')

    // Clicando no botão Entrar
    await page.getByRole('button').click()

    // Mensagem esperada
    await expect(page.getByRole('dialog', { name: 'Oops!' })).toBeVisible()

    // Clicar no botão entendi 
    await page.getByRole('button', { name: 'ENTENDI' }).click()

    // Validar mensagem da Senha
    await expect(page.getByRole('paragraph')).toHaveText('Informe sua senha!')

})