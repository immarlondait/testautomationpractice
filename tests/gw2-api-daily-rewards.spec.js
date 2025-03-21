import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("dailycrafting - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/dailycrafting?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("mapchests - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/mapchests?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("worldbosses - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/worldbosses?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
