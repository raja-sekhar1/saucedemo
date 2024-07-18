import {type Page} from '@playwright/test'

export const addToCart = async (page: Page, index) => {
    await page.locator(`button[class*='btn_primary btn_small btn_inventory']>>nth=${index}`).click()
    await page.locator('.shopping_cart_link').click()
    // @ts-ignore
    await page.locator('.title').textContent('Your Cart')
}
