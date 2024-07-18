// @ts-check
import {login} from "../utils/login";
import {findHighestPriceItem} from "../utils/find-highest-value-item";
import {addToCart} from "../utils/add-to-cart";

const {test} = require('@playwright/test');

test('Add the highest priced item to cart', async ({page}) => {
    await login(page)
    const index = await findHighestPriceItem(page)
    await addToCart(page, index)
});
