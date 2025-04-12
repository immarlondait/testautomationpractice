import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("events - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/events?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



test("event_names - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/event_names?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("map_names - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/map_names?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("world_names - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/world_names?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



test("event_details - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/event_details?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



test("guild_details - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/guild_details?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



test("items - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/items?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



test("item_details - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/item_details?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("recipes - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/recipes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})




test("recipe_details - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/recipe_details?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



test("skins - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/skins?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("skin_details - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/skin_details?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



})

test("continents - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v1/continents?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})






