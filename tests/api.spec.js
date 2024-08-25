import {test, expect} from "@playwright/test"

//run in serial since we'll create a user then edit then delete in different tests
test.describe.configure({mode: 'serial'})

var userid


test("API - Status test - 200 success", async ({request}) => {

    const response = await request.get('https://reqres.in/api/users/3')
    await expect(response.status()).toBe(200)

})

test("API - Status test - 404 not found", async ({request}) => {

    const response = await request.get('https://reqres.in/api/users/asdf')
    await expect(response.status()).toBe(404)

})


test("GET request - List of Users", async ({request}) => {
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

test("GET request - List <Resource>", async ({request}) => {
    const response = await request.get('https://reqres.in/api/unknown')
    expect(response.status()).toBe(200)
    
    const responseBody = JSON.parse(await response.text())
    //console.log(responseBody)

    expect(responseBody.page).toBe(1)
    expect(responseBody.per_page).toBe(6)
    expect(responseBody.total).toBeGreaterThanOrEqual(0)
    expect(responseBody.total_pages).toBeGreaterThanOrEqual(0)

    expect(responseBody.data).toBeTruthy()
})

test("GET request - Single <Resource>", async ({request}) => {
    const response = await request.get('https://reqres.in/api/unknown/2')
    expect(response.status()).toBe(200)
    
    const responseBody = JSON.parse(await response.text())
    //console.log(responseBody)

    expect(responseBody.data).toBeTruthy()
    expect(responseBody.data.id).toBe(2)
    expect(responseBody.data.name).toBe("fuchsia rose")
    expect(responseBody.data.year).toBe(2001)
    expect(responseBody.data.color).toBe("#C74375")
    expect(responseBody.data.pantone_value).toBe("17-2031")
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
    userid = await responseBody.id
    expect(responseBody.createdAt).toBeTruthy()

})

test("PUT request - Edit User", async ({request}) => {
    const response = await request.put(`https://reqres.in/api/users/${userid}`, {
        data: {
            name: "Marionetto (updated)",
            job: "San Antonio Resident (updated)"
        }
    })
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    //console.log(responseBody)
    expect(responseBody.name).toBe("Marionetto (updated)")
    expect(responseBody.job).toBe("San Antonio Resident (updated)")
    expect(responseBody.updatedAt).toBeTruthy()

})

test("PATCH request - Edit User", async ({request}) => {
    const response = await request.put(`https://reqres.in/api/users/${userid}`, {
        data: {
            name: "Marionetto (updated v2)",
            job: "San Antonio Resident (updated v2)"
        }
    })
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    //console.log(responseBody)
    expect(responseBody.name).toBe("Marionetto (updated v2)")
    expect(responseBody.job).toBe("San Antonio Resident (updated v2)")
    expect(responseBody.updatedAt).toBeTruthy()

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
    //expect(responseBody.token).toBeTruthy()
    expect(responseBody.token).toBe('QpwL5tke4Pnpja7X4')


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
    expect(responseBody.error).toBe("Missing password")
    expect(responseBody.error).toBeTruthy()
    //console.log(responseBody)
    

})



test("DELETE request - Delete User", async ({request}) => {
    const response = await request.delete(`https://reqres.in/api/users/${userid}`)
    expect(response.status()).toBe(204)

    const check = await request.get(`https://reqres.in/api/users/${userid}`)
    expect(check.status()).toBe(404)
})

test("POST request - Register user, successful", async ({request}) => {
    const response = await request.post(`https://reqres.in/api/register`, {
        data: {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }
    })
    expect(response.status()).toBe(200)

    //console.log(await response.text())

    const responseBody = JSON.parse(await response.text())

    // now we find user
    let myID = responseBody.id
    const registeredUser = await request.get(`https://reqres.in/api/users/${myID}`)
    expect(registeredUser.status()).toBe(200)

    
})

test("POST request - Register user, unsuccessful", async ({request}) => {
    const response = await request.post(`https://reqres.in/api/register`, {
        data: {
            email: "sydney@fife",
        }
    })
    expect(response.status()).toBe(400)

    const responseBody = JSON.parse(await response.text())
    expect(responseBody.error).toBe("Missing password")

})

test("GET request - Delayed Response", async ({request}) => {
    const response = await request.post(`https://reqres.in/api/users?delay=3`)
    

    expect(response.status()).toBe(201)

    // const responseBody = JSON.parse(await response.text())
    

})
