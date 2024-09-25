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
