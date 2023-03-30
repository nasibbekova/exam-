// const baseURL = "http://localhost:5173/"

// export const getData = async () => {
//     const res = await fetch(baseURL + "/users")
//     const data = await res.json()

//     return data
// }

// export const postData = async (body) => {
//     const res = await fetch(baseURL + "/users", {
//         method: "POST",
//         body: JSON.stringify(body),
//         headers: {"Content-Type": "application/json"}
//     })

//     return res
// }

// export const deleteData = async (id) => {
//     const res = await fetch(baseURL + "/users/" + id, {
//         method: "DELETE"
//     })

//     return res
// }

// export const editeData = async (id, body) => {
//     const res = await fetch(baseURL + "/users/" + id, {
//         method: "PUT",
//         body: JSON.stringify(body),
//         headers: {"Content-Type": "application/json"}
//     })

//     return res
// }