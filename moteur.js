let joueurs = []
let controls = []
let keys = ["KeyW", "KeyT", "KeyO", "ArrowUp"]
let state = "init"

document.addEventListener('keyup', (e) => {
    if (state==="init") {
        if (keys.includes(e.code)) {
            let indice = keys.indexOf(e.code);
            keys[indice]=null
            joueurs.push("J"+(1+joueurs.length))

            if (e.code === "KeyW"){ controls.push({ KeyW: false, KeyS: false, KeyA: false, KeyD: false, }) }
            if (e.code === "KeyT"){ controls.push({ KeyT: false, KeyG: false, KeyF: false, KeyH: false, }) }
            if (e.code === "KeyO"){ controls.push({ KeyO: false, KeyL: false, KeyK: false, Semicolon: false, }) }
            if (e.code === "ArrowUp"){ controls.push({ ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false, }) }
            var paragraph = document.getElementById("listeP");
            paragraph.innerHTML += joueurs[joueurs.length-1] +" est pret ! Vos touches sont ";
            controls[indice].forEach(element => { paragraph.innerHTML += element+" <br/>" });
        }
    }
})