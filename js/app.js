function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible
let temp;



//functions
let match=(qSelector)=>{

}

// event listeners

            //Get Element with qeurySelector
            const qSelector=document.querySelector("#deck");
            qSelector.addEventListener("click",function(event){
            event.target.classList.add("open");
            if(qSelector.classList==="fa-apple"){
                event.target.classList.add("match");
            
            }

            })