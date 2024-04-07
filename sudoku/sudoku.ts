import {
	displaySudoku
} from "./display"

import {
	getPossibleValues
} from "./getDatas"

import {
	sudoku
} from "./input"

// résout le sudoku à l'aide du backtracking
function fillCase(sudoku: string[][], indexLine: number, indexColumn: number): boolean {

	if (indexLine === 9) // si nous sommes arrivé à la fin du sudoku
		return true // sudoku résolu

	if (sudoku[indexLine][indexColumn] !== '.') { // si la case ciblée est un chiffre déjà présent sur le sudoku
		if (indexColumn === 8) // si nous sommes en fin de ligne
			return fillCase(sudoku, indexLine + 1, 0) // passe au début de la ligne suivante
		else
			return fillCase(sudoku, indexLine, indexColumn + 1) // avance sur la ligne
	}

	const possibleValues: string[] = getPossibleValues(sudoku, indexLine, indexColumn) // retourne les valeurs possibles pour la case ciblée
	if (!possibleValues) // si aucune valeur ne rentre dans la case ciblée
		return false // chemin invalide, il faut retourner en arrière afin d'évaluer une autre possibilité

	for (const value of possibleValues) { // itère sur les valeurs possibles

		sudoku[indexLine][indexColumn] = value // insère une valeur

		if (indexColumn === 8) {
			if (fillCase(sudoku, indexLine + 1, 0)) // poursuit le chemin avec la valeur insérée, retourne true si le sudoku est résolu à la fin
				return true
		}
		else {
			if (fillCase(sudoku, indexLine, indexColumn + 1)) // poursuit le chemin avec la valeur insérée, retourne true si le sudoku est résolu à la fin
				return true
		}
		sudoku[indexLine][indexColumn] = '.' // aucune des valeurs possibles n'a abouti à la résolution du sudoku, il faut donc retourner en arrière
	}

	return false
}

displaySudoku(sudoku, "BEFORE")

const start: number = new Date().getTime()
fillCase(sudoku, 0, 0)
const duration: number = new Date().getTime() - start

displaySudoku(sudoku, "AFTER", duration)