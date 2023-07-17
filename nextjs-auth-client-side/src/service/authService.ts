import api from "./api";

interface IUsuario {
    email: string
}

async function login(email: string, senha: string) {
    const res = await api.login(email, senha);
    if (res.json) {
        localStorage.setItem('token', JSON.stringify({
            email: res.json.email,
            token: res.json.token
        }));

        return {
            email: res.json.email
        }
    } else {
        throw new Error("Usuário não autorizado");

    }
}


function logout() {
    localStorage.removeItem('token');
}

function hasUsuarioLogado() {
    const token = localStorage.getItem('token');
    if (token) return true;
    else return false;
}

const auth = {
    login,
    logout,
    hasUsuarioLogado
}

export default auth;