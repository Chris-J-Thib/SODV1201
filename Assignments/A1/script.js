async function getData() {
    let title = document.getElementById("title");
    let img = document.getElementById("img");
    let desc = document.getElementById("desc");
    let adr = document.getElementById("adr");
    let genre = document.getElementById("genre");
    let platform = document.getElementById("platform");
    let game;
    let link;

    console.log(genre.value);
    console.log(platform.value);

    link = 'https://www.freetogame.com/api/games?';

    if(platform.value != "any") {
        link += "platform=" + platform.value + "&";
    }
    if(genre.value != "any") {
        link += "category=" + genre.value;
    }

    const resp = await fetch(link);
    const data  = await resp.json();

    game = data[Math.floor(Math.random()*Object.keys(data).length)];
    
    console.log(game);
    if(!game){
        title.innerText = "No Results Found";
        img.setAttribute("src", "");
        img.setAttribute("alt", "");
        desc.innerText = "";
        adr.setAttribute("href", "");
        adr.innerText = "";
    } else {
        title.innerText = game.title;
        img.setAttribute("src", game.thumbnail);
        img.setAttribute("alt", game.title + " img");
        desc.innerText = game.short_description;
        adr.setAttribute("href", game.game_url);
        adr.innerText = "Play Now!";
    }

    


}