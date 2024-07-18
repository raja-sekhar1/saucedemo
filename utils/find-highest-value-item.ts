import {type Page  } from '@playwright/test'

export const findHighestPriceItem = async (page: Page) => {
    const inventoryPriceList = await page.locator('.inventory_item .inventory_item_price').allInnerTexts()
    // set the first element as max
    let max =  inventoryPriceList[0].replace('$', '')
    // find the max in the array
    for (let i = 1; i < inventoryPriceList.length; i++) {
        if (parseInt(inventoryPriceList[i].replace('$', '')) > parseInt(max)) {
            max = inventoryPriceList[i]
        }
    }
    return inventoryPriceList.indexOf(max)
}