'use client';

import api from "@/service/api";
import { useRouter } from 'next/navigation';
import { createContext, useState } from "react";
import { IUsuario } from "./types";
import auth from "./authService";

interface IAuthContextType {
    isAutenticado: boolean;
    usuario: IUsuario | null;
    login: (email: string, senha: string) => Promise<void>;
    logout: () => void;

}

export const AuthContext = createContext({} as IAuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [usuario, setUsuario] = useState<IUsuario | null>(null);

    const isAutenticado = !!usuario;

    async function login(email: string, senha: string) {
        const usuario = await auth.login(email, senha)
        if (usuario) {
            router.push('/authArea');
            setUsuario(usuario);
        }
    }

    function logout() {
        auth.logout();
        router.push('/');
        setUsuario(null);
    }

    return (
        <AuthContext.Provider value={{
            isAutenticado,
            usuario,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}