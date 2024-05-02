let myButton = document.getElementById("bottone")
let select = document.querySelector("select")
let griglia = document.querySelector(".myflex")
let bombs = []

myButton.addEventListener("click", function(){

    griglia.innerHTML = "";
    griglia.classList.remove("gridmedium", "gridhard", "grideasy")
    let gridSize;
    let gridDifficulty;
    let gridBombe;

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
    // for (let i = 1; i <= gridSize; i++) {
    //     let quadrato = mySquare(i);
    //     griglia.append(quadrato);
    // }
})

function myBomb (bombSquare){
    // ciclo while
    
    while ( bombs.length <= 15) {
        // creo un numero random tra 1 e 100
        let bomb = Math.floor(Math.random() * bombSquare) + 1;
        // condizione che dice se l'array non include il numero random allora pushalo
        // nell'array
        if (!bombs.includes(bomb)){
            bombs.push(bomb)
        }
        
    }
    
    return bombs

}




function mySquare (nCaselle, arrayBombe, griglia ) {
    
    for (let i = 1; i <= nCaselle; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        // let quadrato = mySquare(i);
        // griglia.append(quadrato);
        if (arrayBombe.includes(i)) {
            square.classList.add("bomba")
        } else {
            square.classList.add("evidenziata")
        } 
        griglia.append(square)   
    }
        
}

square.addEventListener("click", function(){
if ( square.classList.contains("evidenziata") ) {
    square.innerHTML = "";
} else {
    square.innerText = nCaselle;
}       
    square.classList.toggle("evidenziata")
})




