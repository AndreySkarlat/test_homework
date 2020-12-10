/*1) Создать страницу, которая выводит нумерованный список песен:*/
let playList = [{
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

let btnDiv = document.createElement('div');
btnDiv.setAttribute('style', 'text-align:center');
document.body.appendChild(btnDiv);

let btnPrint = document.createElement("button");
btnPrint.innerText = "PlayList";
btnPrint.setAttribute('onclick', 'printPlaylist()');
btnPrint.setAttribute('style', 'margin: 20px auto');
btnDiv.appendChild(btnPrint);

function printPlaylist() {
    let ul = document.createElement('ul');
    for (let i = 0; i < playList.length; i++) {
        let li = document.createElement('li');
        li.innerText = playList[i].author + ' - ' + playList[i].song;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}