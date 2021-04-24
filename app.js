let screen = document.getElementById("screen");

let btn = document.querySelectorAll("button");

let valueScreen = ""

for (items of btn){
    items.addEventListener("click", (e) =>{

        let buttonText = e.target.innerHTML;
        console.log(buttonText);

        if(buttonText == "C"){
            valueScreen = '';
            screen.value = valueScreen;
        }else if(buttonText== "="){
            screen.value = eval(valueScreen)
        }else if(buttonText== "Del"){
            valueScreen = valueScreen.substr(0,valueScreen.length-1)
            screen.value = valueScreen;
        }
        else {
            
            valueScreen += buttonText;
            screen.value = valueScreen;
        }

    })
}