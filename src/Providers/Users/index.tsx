import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router";
import Api from "../../Services/api";
import { toast } from "react-toastify";

interface UserProviderProps {
    children: ReactNode;
}

interface UserData {
    email: string;
    password: string;
}

interface UserDataRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface UserContextProps {
    authToken: string;
    handleRegister: (data: UserDataRegister) => void;
    handleLogin: (data : UserData) => void;
    handleLogout: () => void;
}


const UserContext = createContext<UserContextProps>({} as UserContextProps)

export const UserProvider = ({ children }: UserProviderProps) => {

    const [authToken, setAuthToken] = useState(
        () => localStorage.getItem("token") || ""
    );

    const history = useHistory()

    const handleRegister = (data: UserDataRegister) => {
        Api
            .post("/users", data)
            .then(_ => {
                toast.success("Cadastro feito com sucesso.")
                history.push("/")
            })
            .catch(_ => toast.error("Email já cadastrado!"))
    }

    const handleLogin = (data : UserData) => {
        Api
            .post("/login", data)
            .then(res => {
                const token = res.data.accessToken
                window.localStorage.clear()
                window.localStorage.setItem("@mckenzie/token", token)
                setAuthToken(token)
                history.push("/dashboard")
            })
    }

    const handleLogout = () => {
        window.localStorage.clear()
        setAuthToken("")
        history.push("/")
    }

    return (
        <UserContext.Provider value={{ authToken, handleLogin, handleLogout, handleRegister }} >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
