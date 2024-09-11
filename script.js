window.onload = function() {
    
    let first = "Un ";
    
    let who = ["apagón ","perro ","amigo ","familiar "];
    let action = ["cortó ","se comió ","me pidió prestado ","rompió "];
    let what = ["el wifi ","mi trabajo escolar ","el cuaderno ","el papel "];
    let when = ["cuando iba a empezar ", "mientras estaba cenando ","ayer ","cuando lo dejé encima de la mesa "];
  
    let rdm2 = Math.floor(Math.random() * who.length);
    let rdm3 = Math.floor(Math.random() * action.length);
    let rdm4 = Math.floor(Math.random() * what.length);
    let rdm5 = Math.floor(Math.random() * when.length);
  
    
    document.querySelector("#excuse").innerHTML = first + who[rdm2] + action[rdm3] + what[rdm4] + when[rdm5];
    
  };