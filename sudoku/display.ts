// affiche le sudoku dans la console
export function displaySudoku(sudoku: string[][], title: string, duration?: number) {

	const boxWidth = 37
	const spacesNeeded = boxWidth - title.length - 8
	const titleLine = `║${" ".repeat(Math.floor(spacesNeeded / 2))}${title}${" ".repeat(Math.ceil(spacesNeeded / 2))}║`

	console.log("╔═════════════════════════════╗")
	console.log(titleLine)
    console.log("╠═════════╦═════════╦═════════╣")

    for (let i = 0; i < 9; i++) {

        let lineString = "║"
	
        for (let j = 0; j < 9; j++) {
            const value = sudoku[i][j] === "." ? "." : sudoku[i][j]
            lineString += ` ${value} ${(j + 1) % 3 === 0 ? "║" : ''}`
        }

        console.log(lineString)
		
        if ((i + 1) % 3 === 0 && i !== 8)
            console.log("╟─────────╫─────────╫─────────╢")
    }

	if (duration)
	{
		const spacesNeeded = boxWidth - (duration.toString() + " ms").length - 8
		const durationLine = `║${" ".repeat(Math.floor(spacesNeeded / 2))}${"\x1b[32m" +  duration.toString() + " ms" + "\x1b[0m"}${" ".repeat(Math.ceil(spacesNeeded / 2))}║`
    
		console.log("╠═════════╩═════════╩═════════╣")
		console.log(durationLine)
		console.log("╚═════════════════════════════╝")
	}
	else
		console.log("╚═════════╩═════════╩═════════╝")
}