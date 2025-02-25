import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("build - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/build?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("colors - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/colors?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("currencies - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/currencies?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("dungeons - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/dungeons?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

