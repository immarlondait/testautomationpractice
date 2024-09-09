import {test, expect} from "@playwright/test"
require('dotenv').config()


const API_KEY = process.env.API_KEY
const myChar = 'Yokai'


// region Initial API test
test("Character API - Status test - 200 success", async ({request}) => {

    // if (!process.env.API_KEY) {
    //     console.log("API_KEY is not defined, skipping tests...");
    //     process.exit(0);
    // }

    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=${API_KEY}`)

    await expect(response.status()).toBe(200)

    //const responseBody = JSON.parse(await response.text())
    // 
    //console.log(responseBody)

})

test("Character API - Status test - 401 fail", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=bad_key`)
    await expect(response.status()).toBe(401)
    

    const responseBody = JSON.parse(await response.text())
    await expect(responseBody.text).toBe("Invalid access token")


})

// endregion




// region Character List
test("Character API - Character List", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())

    // const myChars = process.env.characters.split(',')
    // console.log(myChars)

    // updated github workflow

    // outer loop to go through responseBody
    // inner loop to check for a match in myChars

    // this doesn't seem like the best way to do this
    // but responseBody will return a list of recently played chars instead of a sorted list
    


    // for(const character of myChars){
    //     await expect(responseBody).toContainText(character)
    // }
    // TO DO fix above so we can move the character identities below to .env file

    

    await expect(responseBody).toContain("Yokai")
    await expect(responseBody).toContain("Poufsouffle")
    await expect(responseBody).toContain("Rinne Snow")
    await expect(responseBody).toContain("Yokai The Engineer")
    await expect(responseBody).toContain("Brynndalynn")
    await expect(responseBody).toContain("Yokai The Warrior")
    await expect(responseBody).toContain("Ein The Fox")
    await expect(responseBody).toContain("Nocte Cereus")
    await expect(responseBody).toContain("Yokai Bank")
    await expect(responseBody).toContain("Yokai The Ranger")


})
// endregion

// region Backstory
test("Character API - backstory", async ({request}) => {

    // if (!process.env.characters) {
    //     console.log("CHARACTERS is not defined, skipping tests...");
    //     process.exit(0);
    // }
    
 
    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/backstory?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //await console.log(responseBody)

    await expect(responseBody).toBeTruthy()
    


})
// endregion


// region Build Tabs
test("Character API - buildtabs", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/buildtabs?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //await console.log(responseBody)

    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Core
test("Character API - Core", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/core?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //await console.log(responseBody)

    await expect(responseBody.race).toBe("Asura")
    await expect(responseBody.gender).toBe("Male")
    await expect(responseBody.profession).toBe("Guardian")
    await expect(responseBody.level).toBe(80)
    await expect(responseBody.guild).toBe("27C7E87E-116F-EA11-81A8-C983E8889009") //this changes based on what is represented
    await expect(responseBody.age).toBeGreaterThan(2000000)
    await expect(responseBody.created).toBe("2012-08-25T04:51:00Z")
    await expect(responseBody.deaths).toBeGreaterThan(1000)
    await expect(responseBody.title).toBeTruthy() // this changes based on what is selected
    


})
// endregion

// region Crafting
test("Character API - Crafting", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/crafting?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //wait console.log(responseBody)
    //await console.log(responseBody.crafting[0].active)

    //test active
    await expect(responseBody.crafting[0].discipline).toBe("Armorsmith")
    await expect(responseBody.crafting[0].rating).toBe(500)
    await expect(responseBody.crafting[0].active).toBe(true)

    //test inactive
    await expect(responseBody.crafting[2].discipline).toBe("Weaponsmith")
    await expect(responseBody.crafting[2].rating).toBe(43)
    await expect(responseBody.crafting[2].active).toBe(false)
    


})
// endregion

// region Equipment
test("Character API - Equipment", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/equipment?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Equipment Tabs
test("Character API - Equipment Tabs", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/equipmenttabs?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Hero Points
test("Character API - Hero Points", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/heropoints?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Inventory
test("Character API - Inventory", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/inventory?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    //await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Quests
test("Character API - Quests", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/quests?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    // await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Recipes
test("Character API - Recipes", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/recipes?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    // await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region SAB
test("Character API - SAB", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/sab?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    // await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Skills
test("Character API - Skills", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/skills?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    // await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Specializations
test("Character API - Specializations", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/specializations?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    // await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion

// region Training
test("Character API - Training", async ({request}) => {


    const response = await request.get(`https://api.guildwars2.com/v2/characters/${myChar}/training?access_token=${API_KEY}`)
    await expect(response.status()).toBe(200)
    

    const responseBody = JSON.parse(await response.text())
    // await console.log(responseBody)

    //test active
    await expect(responseBody).toBeTruthy()
    


})
// endregion