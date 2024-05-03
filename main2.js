let myButton = document.getElementById("bottone")
let select = document.querySelector("select")
let griglia = document.querySelector(".myflex")
let arrayBombe = []
let punteggio = 0


myButton.addEventListener("click", function(){

    griglia.innerHTML = "";
    griglia.classList.remove("gridmedium", "gridhard", "grideasy")
    let gridSize;
    let gridDifficulty;
    let gridBombe;
    punteggio = 0
    arrayBombe = []

    if (select.value == "easy") {

        gridSize = 100;
        gridDifficulty = "grideasy"
        gridBombe = myBomb(gridSize)

    } else if (select.value == "medium") {
        gridSize = 81;
        gridDifficulty = "gridmedium"
        gridBombe = myBomb(gridSize)

    } else if (select.value == "hard") {
        gridSize = 49;
        gridDifficulty = "gridhard"
        gridBombe = myBomb(gridSize)
    }

    griglia.classList.add(gridDifficulty)

    mySquare(gridSize, gridBombe, griglia)

})


function myBomb (nCaselle){  

    while ( arrayBombe.length <= 15) {
        let bomb = Math.floor(Math.random() * nCaselle) + 1;
        
        if (!arrayBombe.includes(bomb)){
            arrayBombe.push(bomb)
        }
        
    }
    
    return arrayBombe
    
}


function mySquare (nCaselle, nBombe, griglia) {
    
    for (let i = 1; i <= nCaselle; i++){
        let square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("click", function(){
            if (nBombe.includes(i)) {
                square.classList.add("bomba")
            } else {
                square.classList.add("evidenziata")
                punteggio++
            }

            if (square.classList.contains("bomba")){
                alert("hai perso " + punteggio)
            } else if (punteggio == (nCaselle - 16)){
                alert("hai vinto " + punteggio)
            }
        })
      
        griglia.append(square)
        
    }
    
    
}



// VECCHIA CREAZIONE QUADRATO. ERA DENTRO EVENLISTENER MYBUTTON
// for (let i = 1; i <= gridSize; i++) {
//     let quadrato = mySquare(i);
//     griglia.append(quadrato);   
// }

// CODICE DEL VECCHIO MY SQUARE
// square.addEventListener("click", function(){
    // if (arrayBombe.includes(square)){
        //     myBomb.classList.add("bomba") ????
        // }
        
        // square.classList.toggle("evidenziata")
        // })
        
        
        // QUESTO PEZZO DI CODICE è PER FAR SCOMPARIRE ANCHE IL NUMERO AL CLICK
        // if ( square.classList.contains("evidenziata") ) {
            //     square.innerHTML = "";
            // } else {
                //     square.innerText = contenuto;
                // }
                