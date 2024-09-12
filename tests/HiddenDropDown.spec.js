const {test, expect} = require('@playwright/test')

test('Hidden options dropdown', async ({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // We use SelectorsHub Debug feature, click and then open dropdown within 5 seconds of pressing Debug

    // Navigate to page
    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()
    await page.locator("//span[normalize-space()='PIM']").click()


    // Subunit locator
    // Flaky - sometimes page comes up in different language
    await page.locator("div:nth-child(7) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click()

    // waiting for options
    await page.waitForTimeout(2000)
    
    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options){
        const subUnit = await option.textContent()
        // console.log("Sub Unit: ", subUnit)
        if(subUnit.includes("Quality Assurance")){
            await option.click()
            break
        }
    }
    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})