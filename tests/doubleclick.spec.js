import {test, expect} from '@playwright/test'

test('Double Click', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const f1 = await page.locator('#field1')
    const f2 = await page.locator('#field2')

    // first we check the default state of the page
    await expect(await f1).toHaveValue("Hello World!")
    await expect(await f2).toBeEmpty()

    
    // change the value in field1
    await f1.fill('Marlon Dait')
    await expect(await f1).toHaveValue("Marlon Dait")
    

    // test a single click
    await page.locator("//button[normalize-space()='Copy Text']").click()
    // Since this is a single click, field2 should be empty
    await expect(await f2).toBeEmpty()  


    // test a double click
    await page.locator("//button[normalize-space()='Copy Text']").dblclick()
    // This should now copy the value in field1
    await expect(await f2).toHaveValue("Marlon Dait")
    

    


    //await page.waitForTimeout(2000)
    


    
})

