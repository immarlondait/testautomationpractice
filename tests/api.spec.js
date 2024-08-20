import {test, expect} from "@playwright/test"


test("API - Status test - 200 success", async ({request}) => {

    const response = await request.get('https://reqres.in/api/users/3')
    await expect(response.status()).toBe(200)

})

test("API - Status test - 404 not found", async ({request}) => {

    const response = await request.get('https://reqres.in/api/users/asdf')
    await expect(response.status()).toBe(404)

})

test("GET request - Get Single User Detail", async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/1')
    const responseBody = JSON.parse(await response.text())
    //console.log(responseBody)

    expect(response.status()).toBe(200)

    expect(responseBody.data.id).toBe(1) // .data.id used here from JSON object
    expect(responseBody.data.first_name).toBe("George")
    expect(responseBody.data.last_name).toBe("Bluth")
    expect(responseBody.data.email).toBeTruthy()
})

test.only("GET request - List of Users", async ({request}) => {
    const pagenum = 1
    const response = await request.get(`https://reqres.in/api/users?page=${pagenum}`)
    expect(response).toBeTruthy()

    const responseBody = JSON.parse(await response.text())

    // console.log(responseBody)
    expect(responseBody.page).toBe(pagenum)
    expect(responseBody.per_page).toBe(6)
    expect(responseBody.total).toBe(12)
    expect(responseBody.data).toBeTruthy()


})

test("POST request - Create New User", async ({request}) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: "Marionetto",
            job: "Storyteller"
        }
    })
    expect(response.status()).toBe(201)

    const responseBody = JSON.parse(await response.text())
    //console.log(responseBody)
    expect(responseBody.name).toBe("Marionetto")
    expect(responseBody.job).toBe("Storyteller")
    expect(responseBody.id).toBeTruthy()
    expect(responseBody.createdAt).toBeTruthy()

})

test("POST request - Login Success", async ({request}) => {
    const response = await request.post('https://reqres.in/api/login', {
        data: {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }
    })
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    
    //console.log(responseBody)
    expect(responseBody.token).toBeTruthy()


})

test("POST request - Login Failed", async ({request}) => {
    const response = await request.post('https://reqres.in/api/login', {
        data: {
            email: "eve.holt@reqres.in",
            // leaving out password here to fail login
        }
    })
    expect(response.status()).toBe(400)

    const responseBody = JSON.parse(await response.text())
    
    //console.log(responseBody)
    

})

test("PUT request - Update User", async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            name: "neo",
            job: "the one"
        }
    })
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    
    //console.log(responseBody)

    expect(responseBody.name).toBe("neo")
    expect(responseBody.job).toBe("the one")
    expect(responseBody.updatedAt).toBeTruthy()
    

})

test("DELETE request - Delete User", async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)

    

})

