'use client'

import api from "../../service/api";
import { IUsuario } from "./types";

async function login(email: string, senha: string): Promise<IUsuario | null> {
    const res = await api.login(email, senha);

    if (!res.json) return null;

    localStorage.setItem('usuario', JSON.stringify({
        email: res.json.email,
        token: res.json.token
    }));

    return {
        email: res.json.email,
        token: res.json.token
    }
}


function logout() {
    localStorage.removeItem('usuario');
}

function getUsuario(): IUsuario | null {
    const usuario = localStorage.getItem('usuario');
    if (!usuario) { return null }
    return JSON.parse(usuario) as IUsuario;
}

const auth = {
    login,
    logout,
    getUsuario
}

export default auth;