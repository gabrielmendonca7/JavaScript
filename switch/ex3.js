let dia = 6;

let diaNome = '';

switch(dia){
    case 1:
        diaNome = "Sunday"
        break;
    case 2:
        diaNome = "Monday"
        break;
    case 3:
        diaNome = "Tuesday"
        break;
    case 4: 
        diaNome = "Wednesday"
        break;
    case 5:
        diaNome = "Thursday"
        break;
    case 6:
        diaNome = "Friday"
        break;
    case 7:
        diaNome = "Saturday"
        break;
}

document.getElementById("dia").innerHTML = `Today is ${diaNome}`