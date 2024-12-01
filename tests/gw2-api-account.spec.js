import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY
const myChar = 'Yokai'




// region Account
test("Account  API - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion


// region Achievements
test("Account  API - Achievements ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/achievements?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Bank
test("Account  API - Bank ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/bank?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Build Storage
test("Account  API - Build Storage ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/buildstorage?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Daily Crafting
test("Account  API - Daily Crafting ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/dailycrafting?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Dungeons
test("Account  API - Dungeons ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/dungeons?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Dyes
test("Account  API - Dyes ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/dyes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Emotes
test("Account  API - Emotes ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/emotes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Finishers
test("Account  API - Finishers ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/finishers?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Gliders
test("Account  API - Gliders ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/gliders?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Home
test("Account  API - Home ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/home?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Home/cats
test("Account  API - Home/cats ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/home/cats?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Home/nodes
test("Account  API - Home/nodes ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/home/nodes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion


// region Homestead
test("Account  API - Homestead ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/homestead?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Homestead/Deco
test("Account  API - Homestead/Decorations ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/homestead/decorations?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Homestead/Glyphs
test("Account  API - Homestead/Glyphs ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/homestead/glyphs?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Inventory
test("Account  API - Inventory ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/inventory?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Jadebots
test("Account  API - Jadebots ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/jadebots?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Legendary Armory
test("Account  API - Legendary Armory ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/legendaryarmory?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Luck
test("Account  API - Luck ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/luck?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Mail Carriers
test("Account  API - Mail Carriers ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/mailcarriers?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Map Chests
test("Account  API - Map Chests ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/mapchests?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion