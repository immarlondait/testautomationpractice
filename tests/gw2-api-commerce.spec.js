import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("/commerce/delivery - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/commerce/delivery?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("/commerce/exchange - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/commerce/exchange?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("/commerce/exchange/coins - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/commerce/exchange/coins?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("/commerce/exchange/gems - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/commerce/exchange/gems?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("/commerce/listings - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/commerce/listings?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text()) 


})


test("/commerce/prices - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/commerce/prices?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text()) 


})


test("/commerce/transactions - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/commerce/transactions?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text()) 


})


