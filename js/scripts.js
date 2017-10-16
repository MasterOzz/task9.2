var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);


var noweImie = prompt('Podaj imie ');

function  sprawdzImie(noweImie) {

	if (allNames.indexOf(noweImie) === -1){
		allNames.push(noweImie);
		console.log(allNames);
		return " Imie dodane";
	} 
	else {
		return "Takie imie istnieje";
	}
}

console.log(sprawdzImie(noweImie));