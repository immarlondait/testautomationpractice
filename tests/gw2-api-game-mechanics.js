import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("jadebots - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/jadebots?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("legendaryarmory - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/legendaryarmory?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("masteries - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/masteries?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("mounts - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/mounts?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("mounts/skins - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/mounts/skins?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})