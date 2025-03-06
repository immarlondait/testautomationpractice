import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("backstory/answers - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/backstory/answers?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("backstory/questions - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/backstory/questions?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("stories - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/stories?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


