import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("finishers - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/finishers?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



test("items - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/items?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("itemstats - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/itemstats?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("materials - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/materials?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("pvp/amulets - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/pvp/amulets?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("recipes - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/recipes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("recipes/search - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/recipes/search?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

