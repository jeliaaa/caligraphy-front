// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerProfile, fetchCustomerLogin, fetchCustomerLogout, fetchCustomerRegister } from '../redux/thunks/authThunks';
import { RootState, AppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';


interface AuthContextType {
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, firstname: string, lastname: string) => Promise<void>;
    logout: () => Promise<void>;
    user: any;
    isAuthenticated: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.auth.data);
    const status = useSelector((state: RootState) => state.auth.status);
    const isAuthenticated = !!user;
    const navigate = useNavigate();
    useEffect(() => {
        if (!user && status === 'idle' && !window.location.href.includes("token=")) {
            const response = dispatch(fetchCustomerProfile());
            response.then((data: any) => {
                if (data.payload && !data.payload.email_verified && window.location.pathname !== "/verify-email") {
                    navigate("/verify-email");
                }
            });
        }
    }, [dispatch, user, status, navigate]);


    const login = async (login: string, password: string) => {
        await dispatch(fetchCustomerLogin({ login, password }));
    };

    const register = async (email: string, password: string, firstname: string, lastname: string) => {
        await dispatch(fetchCustomerRegister({ email, password, firstname, lastname }));
    };

    const logout = async () => {
        await dispatch(fetchCustomerLogout());
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated, status }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};