import {test, expect} from '@playwright/test'

test('Alert with OK', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handler
    // Need this block before actually clicking on the alert
    page.on('dialog', async dialog=>{
        // Alert type of dialog
        expect(dialog.type()).toContain('alert')

        // Text inside the dialog box
        expect(dialog.message()).toContain('I am an alert box!')

        // The button we'll press when it comes up
        await dialog.accept()
    })
    // We need above Alert Handler code block to be able to validate the alert box from below
    await page.click("button[onclick='myFunctionAlert()']")




    await page.waitForTimeout(2000) //pausing execution, give you time to get eyes on it
    
})