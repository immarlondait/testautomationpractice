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

// region Masteries
test("Account  API - Masteries ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/masteries?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Mastery/Points
test("Account  API - Mastery/Points ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/mastery/points?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Materials
test("Account  API - Materials ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/materials?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Minis
test("Account  API - Minis ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/minis?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Mounts
test("Account  API - Mounts ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/mounts?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Mounts/Skins
test("Account  API - Mounts/Skins ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/mounts/skins?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Mounts/Types
test("Account  API - Mounts/Types ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/mounts/types?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Novelties
test("Account  API - Novelties ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/novelties?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Outfits
test("Account  API - Outfits ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/outfits?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Progression
test("Account  API - Progression ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/progression?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region PvP/Heroes
test("Account  API - PvP/Heroes ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/heroes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Raids
test("Account  API - Raids ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/raids?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Recipes
test("Account  API - Recipes ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/recipes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Skiffs
test("Account  API - Skiffs ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/skiffs?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Skins
test("Account  API - Skins ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/skins?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Titles
test("Account  API - Titles ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/titles?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Wallet
test("Account  API - Wallet ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/wallet?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Wizards Vault
test("Account  API - Wizards Vault/Daily ", async ({request}) => {

    // returns 404/503 errors if requested, have to go direct to sub-endpoints


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/wizardsvault/daily?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})



test("Account  API - Wizards Vault/listings ", async ({request}) => {

    // returns 404/503 errors if requested, have to go direct to sub-endpoints


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/wizardsvault/listings?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("Account  API - Wizards Vault/special ", async ({request}) => {

    // returns 404/503 errors if requested, have to go direct to sub-endpoints


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/wizardsvault/special?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})


test("Account  API - Wizards Vault/weekly ", async ({request}) => {

    // returns 404/503 errors if requested, have to go direct to sub-endpoints


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/wizardsvault/weekly?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region World Bosses
test("Account  API - World Bosses ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/account/pvp/worldbosses?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion





// region Achievements
test("Achievements ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/achievements?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Achievements/Categories
test("Achievements/Categories ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/achievements/categories?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Achievements/Daily
test("Achievements/Daily ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/achievements/daily?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Achievements/Daily/Tomorrow
test("Achievements/Daily/Tomorrow ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/achievements/daily/tomorrow?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion

// region Achievements/Groups
test("Achievements/Daily/Groups ", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/achievements/groups?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())


})
// endregion