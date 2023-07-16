import api from "@/service/api";
import { createContext } from "react";

interface IAuthContextType {
    isAutenticado: boolean;

}

export const AuthContext = createContext({} as IAuthContextType);


export function AuthProvider({ children }) {
    const isAutenticado = false;

    async function login(email:string, senha: string) {
        const res = await api.login(email, senha);
        let token: string;

        // if (res.json) {
        //     token = res.json.token;
        //     localStorage.setItem('token', token);
        // }
    }
    return (
        <AuthContext.Provider value={{ isAutenticado}}>
            {children}
        </AuthContext.Provider>
    );
}