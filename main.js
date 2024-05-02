let myButton = document.getElementById("bottone")
let select = document.querySelector("select")
let griglia = document.querySelector(".myflex")


myButton.addEventListener("click", function(){

    griglia.innerHTML = "";
    griglia.classList.remove("gridmedium", "gridhard", "grideasy")
    let gridSize;
    let gridDifficulty;
    
    if (select.value == "easy") {
        gridSize = 100;
        gridDifficulty = "grideasy"

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



