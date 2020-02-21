// Créer un nouveau fichier 02-exo.ts
// Une variable de type tableau 
// ["lundi","mardi","mercredi"]
// Créer un script qui va parcourir chacun des items du tableau et l'afficher dans la console 

const tableau = [ "lundi", "mardi", "mercredi", "jeudi", "vendredi","samedi","dimanche"];

// première manière > index 

tableau[1] = "lundi";
tableau[2] = "mardi";
tableau[3] = "mercredi";

// deuxième manière > boucle for

for(let i = 0; i < tableau.length; i++){
	console.log(tableau[i]);
}

// Terminal - ransformer en JS
// tsc 02-exo.ts 

// troisième manière > boucle for of 

console.log("manière 3")
for(let jour of tableau){
    console.log(jour);
}

// quatrième manière 

console.log("manière 4");
tableau.forEach(function(jour){
    console.log(jour);
});

// Créer un script qui va parcourir les éléments et mettre la première lettre edu mot en majuscule 

// On a choisi d'utiliser la boucle for pour cette fois 

console.log("manière 3 et majuscule")
for(let jour of tableau){
    const premiereLettre = jour[0].toUpperCase();
    const resteDuMot = jour.slice(1);
    console.log(premiereLettre + resteDuMot);   
}

