import {test, expect} from '@playwright/test'

test('Handling Table', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const rows = await page.locator('#HTML1 table tbody tr')
    


    

    await page.waitForTimeout(2000) 
    
})

