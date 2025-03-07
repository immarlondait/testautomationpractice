import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("continents - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/continents?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("maps - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/maps?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


