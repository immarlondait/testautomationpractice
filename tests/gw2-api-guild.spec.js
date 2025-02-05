import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("emblem - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/emblem?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("guild/permissions - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/guild/permissions?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("guild/search - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/guild/search?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})