let questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: "true" },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: "false" },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: "true" },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: "true" },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: "false" },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: "false" },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: "true" },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: "false" },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: "true" },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: "false" },
];

// let Qu = [];
let afichScore = document.getElementById('score');
let afichQuestion = document.getElementById('question');
let btnTrue = document.getElementById('true-btn');
let btnfalse = document.getElementById('false-btn');
let i = 0;
let scor = 0;


afichScore.innerHTML = scor;
afichQuestion.innerHTML = questions[i].question;

    btnTrue.onclick = function (){
        if (questions[i].answer == "true") {
            scor++;
        } 
        i++;
        afichScore.innerHTML = scor;
        afichQuestion.innerHTML = questions[i].question;
        if ((questions.length - 1) == i){
            afichQuestion.innerHTML =  "The exam is over";
            btnTrue.style.visibility = 'hidden';
            btnfalse.style.visibility = 'hidden';
            afichScore.innerHTML = `Score : ${scor}`;
        }
    };

    btnfalse.onclick = function (){
        if (questions[i].answer == "false") {
            scor++;
        } 
        i++;
        afichScore.innerHTML = scor;
        afichQuestion.innerHTML = questions[i].question;
        if ((questions.length - 1) == i){
            afichQuestion.innerHTML =  "The exam is over";
            btnTrue.style.visibility = 'hidden';
            btnfalse.style.visibility = 'hidden';
            afichScore.innerHTML = `Score : ${scor}`;
        }
    };

    
    
    function randQution (){
        let num ;

        do{
            num = Math.floor(Math.random() * questions.length);
            for (let j = 0; i < Qu.length; j++){
                if (Qu[j] == num){
                    a = 1;
                } else {
                    a = 0;
                }
            }
        }while(a);
    }
