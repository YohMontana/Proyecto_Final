import {createContext , useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) =>{

    const {children} = props;

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))??{}
    );

function login(email , password){
    if (email !== "elvia@gmail.com" || password !== "123456")return false;
    
const user = {email , password};

        localStorage.setItem("user",JSON.stringify(user));
        setUser(user);

    
}
function logout(){
    localStorage.clear();
    setUser({});
    window.location.href="/login"
}

function isAuth(){
    return Object.entries(user).length !== 0;
}
return(
<AuthContext.Provider
value={{
    user,
    login,
    logout,
    isAuth,
}}
>
    {children}
    </AuthContext.Provider>
)};
