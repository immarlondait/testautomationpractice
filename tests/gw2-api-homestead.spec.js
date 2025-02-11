import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("homestead/decorations - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/homestead/decorations?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("homestead/decorations/categories - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/homestead/decorations/categories?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("homestead/glyphs - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/homestead/glyphs?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
