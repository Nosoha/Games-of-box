const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
let nb = 0

for(let i = 1; i <= 5; i++){
    //on fait une copie de la box modèle
    let clone = box.cloneNode()
    //on lui ajoute un numéro
    clone.innerText = i

    clone.addEventListener("click", function(){
        clone.classList.add("box-clicked")
        
        /*---CHANGE CODE BELOW---*/
        let clic = clone.innerText
        if(nb+1 == clic) {
            nb++
        } else {
            nb = 0
            board.querySelectorAll(".box-clicked").forEach(box => box.classList.remove("box-clicked"))
            alert("t'es nul ")
            }
            if(nb == nombreDeCase){
                alert("Gagné!")
            }
        
        /*---CHANGE CODE ABOVE---*/
    })
    //on le place en tant qu'enfant du #board
    board.appendChild(clone)
}

/* https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle */
/* déplace les box selon un index aléatoire */
for (var i = board.children.length; i >= 0; i--) {
    board.appendChild(board.children[Math.random() * i | 0]);
}       
        