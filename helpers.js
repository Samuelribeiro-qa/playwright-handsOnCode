// Carregar a página
export async function loadHomePage(page) {
    await page.goto('https://app.eadhandsoncode.com.br/campus/');
}

export async function fillInData(page) {
    await page.getByPlaceholder('Digite seu e-mail...').click()
    await page.getByPlaceholder('Digite seu e-mail...').fill('samuelvinicius.vr@gmail.com')
    // Preenchendo o Campo senha
    await page.getByPlaceholder('Digite sua senha...').click()
    await page.getByPlaceholder('Digite sua senha...').fill('@Handsoncode_administrativo2025')
    // Clicando no botão Entrar
    await page.getByRole('button').click()
    await page.goto('https://app.eadhandsoncode.com.br/campus/')
}

export async function logPerfil(page) {
    await page.getByRole('link', { name: 'Samuel Vinicius ' }).click()
    await page.goto('https://app.eadhandsoncode.com.br/campus/meu-perfil')
}