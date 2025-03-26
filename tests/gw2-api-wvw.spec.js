import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("wvw - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wvw?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("wvw/abilities - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wvw/abilities?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


