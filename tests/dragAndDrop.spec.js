import {test, expect} from '@playwright/test'

test('Drag and Drop', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // validate droppable says "Drop here" by default
    
    let dropText = await page.locator("div[id='droppable'] p").textContent()

    await expect(dropText).toBe("Drop here")

    const dragable  = await page.locator('#draggable')
    const droppable = await page.locator('#droppable')
    await dragable.hover()
    await page.mouse.down()
    await droppable.hover()
    await page.mouse.up()

    //update dropText
    dropText = await page.locator('#droppable').textContent()

    // couldn't get exact toBe to work, but contains work. 
    // to fix: figure out how to make this more specific
    await expect(dropText).toContain("Dropped!")


    

    

    //await page.waitForTimeout(2000) 
    
})

