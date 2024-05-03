import { createContext } from "react";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const AuthInfo = { name: "Anupam Roy" }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;