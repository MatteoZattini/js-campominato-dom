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

    if (select.value == "easy") {

        gridSize = 100;
        gridDifficulty = "grideasy"
        gridBombe = myBomb(gridSize)

    } else if (select.value == "medium") {
        gridSize = 81;
        gridDifficulty = "gridmedium"

    } else if (select.value == "hard") {
        gridSize = 49;
        gridDifficulty = "gridhard"
    }

    griglia.classList.add(gridDifficulty)

    for (let i = 1; i <= gridSize; i++) {
        let quadrato = mySquare(i);
        griglia.append(quadrato);   
    }
})


// function myBomb (contenuto){
    
//     while ( arrayBombe.length <= 15) {
//         let bomb = Math.floor(Math.random() * contenuto) + 1;

//         if (!arrayBombe.includes(bomb)){
//             arrayBombe.push(bomb)
//         }
        
//     }
    
//     return arrayBombe

// }

function myBomb (){
if(select.value == "easy"){
    for (let x = 1; i <= 16; x++) {
        let bomb = Math.floor(Math.random() * (100 - 1) + 1);
    
        if(!arrayBombe.includes(bomb)){
            arrayBombe.push(bomb)
        }
        
    }
}

}

function mySquare (contenuto) {
    let square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("click", function(){

    if ( square.classList.contains("evidenziata") ) {
        square.innerHTML = "";
    } else {
        square.innerText = contenuto;
    }
        
        square.classList.toggle("evidenziata")

    })

    return square;
}



