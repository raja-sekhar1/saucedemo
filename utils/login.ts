import { expect, type Page  } from '@playwright/test'

export const login = async (page: Page) => {
    await page.goto('/')
    const pageTitle = 'Swag Labs'
    await expect(page).toHaveTitle(/Swag Labs/)
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.locator('#login-button', { hasText: 'Login' }).click()
    await expect(page).toHaveTitle(pageTitle)
}
