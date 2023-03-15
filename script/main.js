const calcPanel = document.querySelector("#calcDisplay");
const clearBtn = document.querySelector("#clear");
const calcKeys = document.querySelector("#calcKeys");
let result = "";

let print = () => {
    const curBtn = event.target;

    if(curBtn.dataset.value === "clear"){
        curBtn.textContent = "AC";
        [calcPanel.textContent, result] = ["0", ""];
    }
    else if(curBtn.dataset.value === "equal"){
        calcPanel.textContent = eval(result);
    }
    else{
        clearBtn.textContent = "C";
        calcPanel.textContent += curBtn.textContent;
        //if element has a DATA-VALUE add it to Result else add it's TEXT CONTENT
        result += curBtn.dataset.value ? curBtn.dataset.value : curBtn.textContent;
    }

}

calcKeys.addEventListener("click", print);

