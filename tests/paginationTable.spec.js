import {test, expect} from '@playwright/test'

test('Handling Table', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    // total number of rows and columns
    const columns = await table.locator('thead tr th') //table head, table row, table header
    //console.log("Number of columns: ", await columns.count())

    const rows = await table.locator('tbody tr') //table body, table row
    //console.log("Number of rows: ", await rows.count())
    
    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    

    // read data from all pages in the table
    const pages = await page.locator('.pagination li a') //'a' anchor
    //console.log("Number of pages for table: ", await pages.count())
    for(let p=0; p<await pages.count(); p++){
        //pagination loop
        
        if(p>0){
            await pages.nth(p).click() //clicking on next page if not at start
        }

        for(let i=0; i<await rows.count(); i++){
            //row loop
            const row = rows.nth(i)
            const tds = row.locator('td') //td 'table data'
                
            for(let j=0; j<await tds.count()-1; j++){ 
                //column loop
                //'-1' since we don't need last column, checkboxes
                console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(1000)

    }


    await page.waitForTimeout(2000)
    
})

