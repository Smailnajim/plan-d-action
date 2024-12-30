let obj = {
  Fname : "value",
  Lname : "value2"
}

let array = [];

array.push
// localStorage.clear();
let numbreOftashesInLocalstoreg = localStorage.getItem("keyNumberOfItemInStoreg");


function createTashWithCuntent(text){
    let newDiv = document.createElement('div');
    newDiv.classList.add("tash");

    let newI = document.createElement('i');
    newI.classList.add("fa-solid");
    newI.classList.add("fa-bars");
    newDiv.appendChild(newI);

    let newP = document.createElement('p');
    newP.textContent = text;
    newDiv.appendChild(newP);

    let newDiv2 = document.createElement('div');
    newDiv2.classList.add("movTach");
    newDiv.appendChild(newDiv2);

    let newI2 = document.createElement('i');
    newI2.classList.add("fa-solid");
    newI2.classList.add("fa-angles-left");
    newDiv2.appendChild(newI2);
    // add event

    let newI3 = document.createElement('i');
    newI3.classList.add("fa-solid");
    newI3.classList.add("fa-angles-right");
    newDiv2.appendChild(newI3);
    // add event

    return newDiv;
}

// wach mzian nkri w nmhi kola mra?
// function addButtonEvent (){
//     let modal = document.createElement("div");
//     let modal_Input = document.createElement('input');

// }

let buttonOnClick = document.querySelector(".conter-sides-ActionButton");
buttonOnClick.onclick = function () {
  displyModal();
};

function displyModal() {
  let Modal = document.getElementById("modal");

  if (Modal.style.visibility == "visible") {
    Modal.style.visibility = "hidden";
  } else {
    Modal.style.visibility = "visible";
  }
}

function EventAddCardTOaColumn() {
  let ValueOfInputYourTash = document.getElementById("YourTash").value;
  document.getElementById("YourTash").value = '';
  
  let yourSelect = document.getElementById("your-select-id");
  let parentAppend = yourSelect.options[yourSelect.selectedIndex].value;
  createCuntentTashIntoLocalstorig(parentAppend, ValueOfInputYourTash);

  let fullTash = createTashWithCuntent(ValueOfInputYourTash);

  appendToClumn(fullTash, parentAppend);

  
}

function appendToClumn(childDiv, weherAppendIt) {
  let here;

  switch (weherAppendIt) {
    case "Backlog":
      here = "sideBacklog";
      break;

    case "To Do":
      here = "sideTodo";
      break;

    case "In Progress":
      here = "sideinProgres";
      break;

    case "Done":
      here = "sidDone";
      break;

    case "test":
      here = "idtest";
      break;

    default:
      console.log("there is error at name where append!");
      break;
  }

  document.getElementById(here).appendChild(childDiv);
}


document.getElementById("buttonAddToClumn").onclick = function (){
    EventAddCardTOaColumn();
    displyModal();
}


function createCuntentTashIntoLocalstorig (column, countentTash){
    numbreOftashesInLocalstoreg++;
    localStorage.setItem("keyNumberOfItemInStoreg", numbreOftashesInLocalstoreg);

    let stringJson = `{"columName" : "${column}", "countentTash" : "${countentTash}"}`;
    let keyStoreg = `Key${numbreOftashesInLocalstoreg }`;

    localStorage.setItem(keyStoreg, stringJson);
}



function getAllTashFromLocalStorage(){
    let index;
    console.log(numbreOftashesInLocalstoreg);
    
    for (index = 1; index <= numbreOftashesInLocalstoreg; index++){
        console.log("weherAppIt");
        let itemFromLocalstorge_json = localStorage.getItem(`Key${index}`);
        let objectTash = JSON.parse(itemFromLocalstorge_json);

        let childDiv = createTashWithCuntent (objectTash.countentTash);
        let weherAppendIt = objectTash.columName;

        
        appendToClumn(childDiv, weherAppendIt);
    }
}


getAllTashFromLocalStorage();





// conter-sides-ActionButton




function hhh(){
    console.log("sdqcf");
}

// hhh();