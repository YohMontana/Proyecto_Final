import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = (props) => {
  // La palabra children hace referencia a los components hijo
  // y este children viaja por props
  const { children } = props;

     
  const [authentication, setAuthentication] = useState({
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
    successMessage: "",
    user: {},
  });
	

  // async function login(email, password) {
    
    // const usersDB = await getUsers();
   

    // const user = usersDB.find(
      // (userDb) => userDb.email === email && userDb.pass === password
    // );

    // if (!user) return false;

    // localStorage.setItem("user", JSON.stringify(user));
    // setUser(user);
    // return true;
  // }

   // funcion para validar si la session existe
  
    

  return (
    <AuthContext.Provider
      value={{        
        authentication,
        setAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};




































