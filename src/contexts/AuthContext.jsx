import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [token, setToken] = useState(() => localStorage.getItem('jwt') || null);
   
    useEffect(() => {
        if (token) {
        axios.defaults.headers.common['Authorization'] = token ? 'Bearer ${token}' : '';
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
        }, [token]);

        const login = async(email, password) => {
            const response = await axios.post('/api/auth/login', { email, password });
            const jwt = response.data.token;
            setToken(jwt);
            localStorage.setItem('jwt', jwt);
        };

        const logout = () => {
            setToken(null);
            localStorage.removeItem('jwt');
        }

    return (
        <AuthContext.Provider value={''}>
            {children}
        </AuthContext.Provider>
    );  
}