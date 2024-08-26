import {test, expect} from "@playwright/test"
require('dotenv').config()

//run in serial since we'll create a user then edit then delete in different tests
test.describe.configure({mode: 'serial'})

const apiKey = process.env.access_token


test("Status test - 200 success", async ({request}) => {

    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=${apiKey}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())

    console.log(responseBody)

})

test("API - Status test - 404 not found", async ({request}) => {

    const response = await request.get('https://reqres.in/api/users/asdf')
    await expect(response.status()).toBe(404)

})
