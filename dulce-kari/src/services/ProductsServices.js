const url = "https://637c68be16c1b892ebb2aea6.mockapi.io/products";

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
