import {test, expect} from '@playwright/test'

test('Form Fill', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    await page.locator('#name').fill('Marlon Dait')
    await page.locator('#email').fill('immarlondait@gmail.com')
    await page.locator('#phone').fill('111-222-3333')
    await page.locator('#textarea').fill('Lorem Ipsum')

    await expect(await page.locator('#name')).toHaveValue('Marlon Dait')
    await expect(await page.locator('#email')).toHaveValue('immarlondait@gmail.com')
    await expect(await page.locator('#phone')).toHaveValue('111-222-3333')
    await expect(await page.locator('#textarea')).toHaveValue('Lorem Ipsum')


    await page.waitForTimeout(2000)

})