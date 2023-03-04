import { API_URL } from "../lib/Enviroments";
const BASE_URL = "http://127.0.0.1:8000/api";

const url = "https://637c68be16c1b892ebb2aea6.mockapi.io/products";
const urlUsers = "https://6388370fd94a7e5040958b7f.mockapi.io/users";

export const get = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async (url, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};


export const signIn = async (user) => {
  const response = await fetch(`${API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  const status = response.status;
  return { data, status };
  console.log(data);
};

export const isAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  const payload = token.split(".")[1];
  const jsonPayload = JSON.parse(window.atob(payload));
  if (jsonPayload.exp > new Date() / 1000) {
    return true;
  }
  return false;
};


export const postUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/api/registro`,{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async () => {
  try {
    const response = await fetch(urlUsers);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(urlUsers);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
  try {
    const response = await fetch(url + "/" + id);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const GetProduct = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const PostProduct = async (body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    
    return data;
  } catch (error) {
    
  }
};




// id: product
export const update = async (id, body) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Para la eliminar un registro unicamente necesito el id
export const destroy = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const verifyUserExist = async (user) => {
  try {
    const response = await fetch(urlUsers,{
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};