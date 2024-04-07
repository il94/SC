const numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// retourne une ligne par rapport à son index (0 - 8)
export function getLine(sudoku: string[][], value: number): string[] {
	return (sudoku[value])
}

// retourne une colonne par rapport à son index (0 - 8)
export function getColumn(sudoku: string[][], value: number): string[] {

	let column: string[] = []

	sudoku.forEach(line => column.push(line[value]))

	return (column)
}

// retourne une case par rapport à son index (0 - 8)
export function getSquare(sudoku: string[][], value: number): string[] {

	let square: string[] = []

	const y = Math.floor(value / 3) * 3
	const x = value % 3 * 3

	for (let i = 0; i < 3; i++) {

		const values = sudoku[y + i].slice(x, x + 3)
		square = square.concat(values)
	}

	return (square)
}

// retourne les valeurs manquantes d'une portion de valeurs donnée
export function getMissingNumbers(numbers: string[]): string[] {

	let missingNumbers: string[] = []

	for (let i = 0; i < 9; i++) {
		if (!numbers.find(value => value === numbersList[i]))
			missingNumbers.push(numbersList[i])
	}

	return (missingNumbers)
}

// retourne les valeurs possibles pour la case ciblée
export function getPossibleValues(sudoku: string[][], indexLine: number, indexColumn: number): string[] {

	const indexSquare = Math.floor(indexLine / 3) * 3 + Math.floor(indexColumn / 3) // détermine l'index de la case

	const missingNumbersInLine: string[] = getMissingNumbers(getLine(sudoku, indexLine)) // retourne les valeurs manquantes de la ligne ciblée
	const missingNumbersInColumn: string[] = getMissingNumbers(getColumn(sudoku, indexColumn)) // retourne les valeurs manquantes de la colonne ciblée
	const missingNumbersInSquare: string[] = getMissingNumbers(getSquare(sudoku, indexSquare)) // retourne les valeurs manquantes de la case ciblée
	const possibleValues: string[] = missingNumbersInLine.filter(valueInLine => // compare et retourne les valeurs manquantes sur les 3 axes
		missingNumbersInColumn.includes(valueInLine) &&
		missingNumbersInSquare.includes(valueInLine)
	)

	return possibleValues
}