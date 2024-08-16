import {test, expect} from '@playwright/test'

test('Dropdown num options', async ({page}) =>{

    const numOfOptions = 10

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    const options = await page.$$('#country option')
    

    console.log("Number of options: ", options.length)
    await expect(options.length).toBe(numOfOptions)

})

test('Dropdown order', async ({page}) =>{
    
    const countryOrder = ['United States', 'Canada', 'United Kingdom', 
                          'Germany', 'France', 'Australia', 
                          'Japan', 'China', 'Brazil', 'India']
    

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    const options = await page.$$('#country option')
    
    let index = 0
    for(const country of options){
        const value = await country.textContent()
        await expect(await value).toContain(countryOrder[index])
        index++
    }
})

test('Dropdown Selection', async ({page}) =>{
    
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    await page.selectOption('#country', 'Japan')

    const selectedOption = await page.$eval('#country option:checked', element => element.textContent);
    // console.log("Dropdown current selecting: ", selectedOption)

    await expect(selectedOption).toBe('Japan')
    
    
})