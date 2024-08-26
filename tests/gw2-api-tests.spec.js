import {test, expect} from "@playwright/test"
require('dotenv').config()

//run in serial since we'll create a user then edit then delete in different tests
test.describe.configure({mode: 'serial'})

const apiKey = process.env.access_token


test("Character API - Status test - 200 success", async ({request}) => {

    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=${apiKey}`)
    await expect(response.status()).toBe(200)

    //const responseBody = JSON.parse(await response.text())

    //console.log(responseBody)

})

test("Character API - Status test - 401 fail", async ({request}) => {

    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=bad_key`)
    await expect(response.status()).toBe(401)
    

    const responseBody = JSON.parse(await response.text())
    await expect(responseBody.text).toBe("Invalid access token")


})

test("Character API - Character List", async ({request}) => {

    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=${apiKey}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())

    // for(const i=1; i<11; i++){
    //     await expect(responseBody).toContain(process.env.characters[i])
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
