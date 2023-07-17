'use client';

import api from "@/service/api";
import { useRouter } from 'next/navigation';
import { createContext, useState } from "react";

interface IAuthContextType {
    isAutenticado: () => boolean;
    usuario: IUsuario | null;
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

    return (
        <AuthContext.Provider value={{ isAutenticado, usuario }}>
            {children}
        </AuthContext.Provider>
    );
}