import {test, expect} from '@playwright/test'

test('Handling Table', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')



    const rows = await page.$$('#HTML1 table tbody tr')

    //console.log(rows.length)
    for (let i=1; i<rows.length; i++){
        // starting at 1 since 0 is headers
        // console.log(rows.values())
    }

    

    await page.waitForTimeout(2000) 
    
})

