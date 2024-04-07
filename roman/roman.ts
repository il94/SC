function greatFunction(s: string): number {

	const romanToDigit = new Map<string, number>([
		['I', 1], 
		['V', 5], 
		['X', 10], 
		['L', 50], 
		['C', 100], 
		['D', 500], 
		['M', 1000]
	])

	let result: number = 0
	const romanNumerals: string[] = s.split('')

	for (let i = 0; i < romanNumerals.length; i++) {

		const target: number = romanToDigit.get(romanNumerals[i])! // convertit le chiffre romain ciblé en valeur numérique
		const next: number = romanToDigit.get(romanNumerals[i + 1])! // convertit le chiffre romain suivant en valeur numérique

		if (!next || target >= next)  // si le caractère ciblé est le dernier de s, ou si sa valeur est supérieure au suivant
			result += target // additionne la valeur du chiffre romain ciblé au résultat final
		else {
			result += next - target // additionne la valeur du chiffre romain suivant au résultat final, puis soustrait le chiffre romain ciblé
			i++ // incrémente le compteur afin d'éviter d'itérer une seconde fois sur le caractère suivant, qui a déjà été pris en compte
		}
	}

	return (result)

}

// console.log(greatFunction("III")) // 3
// console.log(greatFunction("LVIII")) // 58
// console.log(greatFunction("MCMXCIV")) // 1994
// console.log("================")
// console.log(greatFunction("I")) // 1
// console.log(greatFunction("V")) // 5
// console.log(greatFunction("X")) // 10
// console.log(greatFunction("L")) // 50
// console.log(greatFunction("C")) // 100
// console.log(greatFunction("D")) // 500
// console.log(greatFunction("M")) // 1000
// console.log("================")
// console.log(greatFunction("IX")) // 9
// console.log(greatFunction("MDCLXVI")) // 1666
// console.log(greatFunction("MMXIV")) // 2014