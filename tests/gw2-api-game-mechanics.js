import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY




test("jadebots - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/jadebots?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("legendaryarmory - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/legendaryarmory?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("masteries - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/masteries?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("mounts - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/mounts?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("mounts/skins - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/mounts/skins?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("mounts/types - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/mounts/types?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("outfits - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/outfits?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("pets - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/pets?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("professions - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/professions?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("races - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/races?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("specializations - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/specializations?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})

test("skiffs - Status check ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/skiffs?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})