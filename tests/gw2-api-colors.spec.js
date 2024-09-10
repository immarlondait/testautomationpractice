import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY
const myChar = 'Yokai'


// region Initial API test
test("Colors  API - Status test - 200 success", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/colors`)

    await expect(response.status()).toBe(200)


})





// region Character List
test("Colors  API - Colors ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/colors`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

