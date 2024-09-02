import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY


// region Initial API test
test("Character API - Status test - 200 success", async ({request}) => {

    // if (!process.env.API_KEY) {
    //     console.log("API_KEY is not defined, skipping tests...");
    //     process.exit(0);
    // }

    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=${API_KEY}`)

    await expect(response.status()).toBe(200)

    //const responseBody = JSON.parse(await response.text())
    // 
    //console.log(responseBody)

})

test("Character API - Status test - 401 fail", async ({request}) => {

    // if (!process.env.characters) {
    //     console.log("CHARACTERS is not defined, skipping tests...");
    //     process.exit(0);
    // }
    

    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=bad_key`)
    await expect(response.status()).toBe(401)
    

    const responseBody = JSON.parse(await response.text())
    await expect(responseBody.text).toBe("Invalid access token")


})

// endregion

test("Character API - backstory", async ({request}) => {

    // if (!process.env.characters) {
    //     console.log("CHARACTERS is not defined, skipping tests...");
    //     process.exit(0);
    // }
    
    const myChar = 'Yokai'



    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/backstory?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //await console.log(responseBody)

    await expect(responseBody).toBeTruthy()
    


})


test("Character API - Character List", async ({request}) => {

    // if (!process.env.characters) {
    //     console.log("CHARACTERS is not defined, skipping tests...");
    //     process.exit(0);
    // }

    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())

    // const myChars = process.env.characters.split(',')
    // console.log(myChars)

    // updated github workflow

    // outer loop to go through responseBody
    // inner loop to check for a match in myChars

    // this doesn't seem like the best way to do this
    // but responseBody will return a list of recently played chars instead of a sorted list
    


    // for(const character of myChars){
    //     await expect(responseBody).toContainText(character)
    // }
    // TO DO fix above so we can move the character identities below to .env file

    

    await expect(responseBody).toContain("Yokai")
    await expect(responseBody).toContain("Poufsouffle")
    await expect(responseBody).toContain("Rinne Snow")
    await expect(responseBody).toContain("Yokai The Engineer")
    await expect(responseBody).toContain("Brynndalynn")
    await expect(responseBody).toContain("Yokai The Warrior")
    await expect(responseBody).toContain("Ein The Fox")
    await expect(responseBody).toContain("Nocte Cereus")
    await expect(responseBody).toContain("Yokai Bank")
    await expect(responseBody).toContain("Yokai The Ranger")


})
