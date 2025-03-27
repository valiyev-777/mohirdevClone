import { createContext, useContext, useState, ReactNode } from "react";

// 🔹 Avval TypeScript interfeys yaratamiz
interface User {
    fullName: string;
    email: string;
    bio: string;
}

interface AuthContextType {
    user: User | null;
    register: (userData: User) => void;
    logout: () => void;
}

// 🔹 Default qiymat berib, `createContext` yaratamiz
const AuthContext = createContext<AuthContextType | null>(null);

// 🔹 `AuthProvider` komponenti
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // 🔹 Ro‘yxatdan o‘tish funksiyasi
    const register = (userData: User) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    // 🔹 Logout funksiyasi
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 🔹 Context dan foydalanish uchun hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
