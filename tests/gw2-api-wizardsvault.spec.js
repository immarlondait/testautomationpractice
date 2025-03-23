import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("/wizardsvault - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wizardsvault?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("/wizardsvault/listings - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/wizardsvault/listings?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


