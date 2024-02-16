const API_URL = "https://api.github.com/users/deepanshu-sharmaa";

async function handlePromise(){
    const data = await fetch(API_URL);

    const jsonValue = await data.json();

    console.log(jsonValue);
}

handlePromise();