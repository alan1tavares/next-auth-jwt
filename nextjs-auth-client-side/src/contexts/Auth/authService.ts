import api from "../../service/api";
import { IUsuario } from "./types";

async function login(email: string, senha: string): Promise<IUsuario | null> {
    const res = await api.login(email, senha);

    if (!res.json) return null;

    localStorage.setItem('token', JSON.stringify({
        email: res.json.email,
        token: res.json.token
    }));

    return {
        email: res.json.email
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