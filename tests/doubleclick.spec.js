import {test, expect} from '@playwright/test'

test('Double Click', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const f1 = await page.locator('#field1')
    const f2 = await page.locator('#field2')

    
    await f1.fill('Marlon Dait')
    
    //await expect(await page.locator('#name')).toHaveValue('Marlon Dait')
    await expect(await f1).toHaveValue("Marlon Dait")
    

    await page.locator("//button[normalize-space()='Copy Text']").click()

    await expect(await f2).toBeEmpty()  // Since this is a single click, field2 should be empty


    await page.locator("//button[normalize-space()='Copy Text']").dblclick()

    await expect(await f2).toHaveValue("Marlon Dait")
    

    


    //await page.waitForTimeout(2000)
    


    
})

