var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');

var afficherSymbole = function(cell) {
// a remplir
// 1 - verifier case remplie ou pas

	if (!cell.firstChild) {
    // cell = parent (comme node)
    // firstChild = ça vérifie si il y a un élément dans la case, dans le parent.
    // il faut mettre false autrement le jeu ne commence pas puisque le vrai
    //dit qu'il y a déjà un élément
		// 2 - poser symbole J1 ou j2
		if (tourDuJoueur1) {

      var cross = document.createElement("img");
      cross.src = "croix.png";
      cross.height = 150;
      cross.widht = 150;
      cell.appendChild(cross);
      cell.classList.add("croix");
		//	cell.textContent = 'X';
		} else {
      var circle = document.createElement("img");
      circle.src = "rond.png";
      circle.height = 150;
      circle.widht = 150;
      cell.appendChild(circle);
      cell.classList.add("rond");
		//	cell.textContent = 'O';
		}
		// 4 - changer le joueur courant
		tourDuJoueur1 = !tourDuJoueur1; //booléen c'est au joueur 2 de jouer
	}

};

var combinaisons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
[2, 5, 8], [0, 4, 8], [2, 4, 6]];

var verifierCombinaisons = function() {
	// a remplir
	// 3 - check combinaison gagnante
	combinaisons.forEach(function(combinaison) {
		if (
      // horizontale
			cells[combinaison[0]].classList.value === cells[combinaison[1]].classList.value &&
			cells[combinaison[1]].classList.value === cells[combinaison[2]].classList.value &&
			cells[combinaison[0]].classList.value !== 'cell'
    ) {

			console.log('WIN');
			var currentPlayer;
			if (tourDuJoueur1) {
				currentPlayer = 'joueur 2';
			} else {
				currentPlayer = 'joueur 1';
			}
			alert('Bravo ' + currentPlayer + '!');
			partieGagnee = true;
		}

	});
};

cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (!partieGagnee) {
			afficherSymbole(cell);
			verifierCombinaisons();
		}
	});
});
