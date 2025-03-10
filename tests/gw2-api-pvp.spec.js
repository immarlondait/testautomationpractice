import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("pvp - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/backstory/pvp?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


