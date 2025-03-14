import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("/commerce/delivery - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/backstory/commerce/delivery?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("/commerce/exchange - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/backstory/commerce/exchange?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("/commerce/exchange/coins - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/backstory/commerce/exchange/coins?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


