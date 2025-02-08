import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("home/cats - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/home/cats?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("home/nodes - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/home/nodes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


