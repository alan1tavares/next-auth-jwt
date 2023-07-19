import { useSyncExternalStore } from "react";

export function useUsuario() {
    const usuario = useSyncExternalStore(subscribe, getSnapShot);
    return usuario
}

function subscribe(listener: any) {
    window.addEventListener('storage', listener);
    return () => {
        window.removeEventListener('storage', listener);
    }
}

function getSnapShot() {
    return localStorage.getItem('usuario');
}