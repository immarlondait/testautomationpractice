import {test, expect} from '@playwright/test'

test('Radio Button', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    await page.locator('#female').click()
    await page.waitForTimeout(1000)

    expect(await page.locator('#male').isChecked()).toBeFalsy()
    expect(await page.locator('#female').isChecked()).toBeTruthy()

    await page.waitForTimeout(1000)
    

})

test('Checkboxes', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    // Default no days of the week is checked
    expect(await page.locator('#sunday').isChecked()).toBeFalsy()
    expect(await page.locator('#monday').isChecked()).toBeFalsy()
    expect(await page.locator('#tuesday').isChecked()).toBeFalsy()
    expect(await page.locator('#wednesday').isChecked()).toBeFalsy()
    expect(await page.locator('#thursday').isChecked()).toBeFalsy()
    expect(await page.locator('#friday').isChecked()).toBeFalsy()
    expect(await page.locator('#saturday').isChecked()).toBeFalsy()


    // Click on all days 
    await page.locator('#sunday').click()
    await page.locator('#monday').click()
    await page.locator('#tuesday').click()
    await page.locator('#wednesday').click()
    await page.locator('#thursday').click()
    await page.locator('#friday').click()
    await page.locator('#saturday').click()

    await page.waitForTimeout(1000)

    // Confirm all are checked
    expect(await page.locator('#sunday').isChecked()).toBeTruthy()
    expect(await page.locator('#monday').isChecked()).toBeTruthy()
    expect(await page.locator('#tuesday').isChecked()).toBeTruthy()
    expect(await page.locator('#wednesday').isChecked()).toBeTruthy()
    expect(await page.locator('#thursday').isChecked()).toBeTruthy()
    expect(await page.locator('#friday').isChecked()).toBeTruthy()
    expect(await page.locator('#saturday').isChecked()).toBeTruthy()

    

    // Uncheck all days
    await page.locator('#sunday').click()
    await page.locator('#monday').click()
    await page.locator('#tuesday').click()
    await page.locator('#wednesday').click()
    await page.locator('#thursday').click()
    await page.locator('#friday').click()
    await page.locator('#saturday').click()

    await page.waitForTimeout(1000)

    // Validate all are now unchecked
    expect(await page.locator('#sunday').isChecked()).toBeFalsy()
    expect(await page.locator('#monday').isChecked()).toBeFalsy()
    expect(await page.locator('#tuesday').isChecked()).toBeFalsy()
    expect(await page.locator('#wednesday').isChecked()).toBeFalsy()
    expect(await page.locator('#thursday').isChecked()).toBeFalsy()
    expect(await page.locator('#friday').isChecked()).toBeFalsy()
    expect(await page.locator('#saturday').isChecked()).toBeFalsy()

    await page.waitForTimeout(1000)

})