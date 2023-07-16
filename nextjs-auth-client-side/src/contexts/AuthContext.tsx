'use client';

import api from "@/service/api";
import { useRouter } from 'next/navigation';
import { createContext, useState } from "react";

interface IAuthContextType {
    isAutenticado: () => boolean;
    usuario: IUsuario | null;
    login: (email: string, senha: string) => Promise<void>;
}

interface IUsuario {
    email: string
}

export const AuthContext = createContext({} as IAuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [usuario, setUsuario] = useState<IUsuario | null>(null);

    const isAutenticado = (): boolean => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) return true;
        else return false;
    };

    async function login(email: string, senha: string) {
        const res = await api.login(email, senha);
        console.log('login');
        if (res.json) {
            localStorage.setItem('token', JSON.stringify({
                email: res.json.email,
                token: res.json.token
            }));

            setUsuario({
                email: res.json.email
            })

            console.log('push')
            router.push('/authArea');
        }
    }

    return (
        <AuthContext.Provider value={{ isAutenticado, usuario, login }}>
            {children}
        </AuthContext.Provider>
    );
}