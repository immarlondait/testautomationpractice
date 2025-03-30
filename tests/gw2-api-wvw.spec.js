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


test("wvw/guilds - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wvw/guilds?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("wvw/matches - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wvw/matches?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("wvw/objectives - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wvw/objectives?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("wvw/ranks - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wvw/ranks?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("wvw/timers - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wvw/timers?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


