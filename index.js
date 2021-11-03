#! /usr/bin/env node

const https = require("https"); 
const baseURL = "https://v2.jokeapi.dev";
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
const params = [
    "blacklistFlags=nsfw,religious,racist",
    "idRange=0-100"
];

https.get(`${baseURL}/joke/${categories.join(",")}?${params.join("&")}`, res => {
    console.log("\n");
    res.on("data", chunk => {
        let randomJoke = JSON.parse(chunk.toString());

        if(randomJoke.type == "single")
        {
            console.log(randomJoke.joke);
            console.log("\n");
        }
        else
        {
            console.log(randomJoke.setup);
            setTimeout(() => {
                console.log(randomJoke.delivery);
                console.log("\n");
            }, 3000);
        }
    });
    res.on("error", err => {
        console.error(`Error: ${err}`);
    });
});