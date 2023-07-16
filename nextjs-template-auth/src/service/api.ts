
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhdEByZXRyby5jb20iLCJhY2Vzc28iOnRydWUsInN1YiI6IjEyMzQ1Njc4OTAiLCJpYXQiOjE1MTYyMzkwMjJ9.rF_lduH5JJobH-DU2yJwCLbpkIqc6JASETzdBa4Em7Y";

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

async function login(email: string, senha: string) {
    await delay();
    if (email == 'cat@retro.com' && senha == '123') {
        return {
            status: 200,
            json: { token }
        }
    } else {
        return {
            status: 401,
            message: 'Unathorized'
        }

    }
}

const api = {
    login,
}

export default api;