function anOtherGreatFunction(s: string): number {

	// compare les strings et retourne la plus longue
	function getLongestSubstring(s1: string, s2: string) {
		return (s1.length < s2.length ? s2 : s1)
	}

	if (!s)
		return (0)

	let target: string = s[0] // stocke la substring à évaluer
	let result: string = target // stocke la plus longue substring trouvée

	for (let i = 1; i < s.length; i++) {

		if (!target.includes(s[i])) // si le caractère visé n'a pas déjà été rencontré
			target += s[i] // ajoute le caractère à la string à évaluer

		else {
			result = getLongestSubstring(result, target) // stocke la plus longue substring trouvée
			target = s[i] // écrase la substring évaluée afin d'en évaluer une nouvelle à partir du caractère visé de s
		}

		result = getLongestSubstring(result, target) // stocke la plus longue substring trouvée
	}

	return (result.length)

}

// console.log(anOtherGreatFunction("abcabcbb")) // 3 -> abc
// console.log(anOtherGreatFunction("bbbbb")) // 1 -> b
// console.log(anOtherGreatFunction("pwwkew")) // 3 -> wke
// console.log("================")
// console.log(anOtherGreatFunction("")) // 0
// console.log(anOtherGreatFunction("p")) // 1 -> p
// console.log(anOtherGreatFunction("abcdefg")) // 7 -> abcdefg
// console.log(anOtherGreatFunction("aaaaaabbbbb")) // 2 -> ab
// console.log(anOtherGreatFunction("aaaaaabbbbbc")) // 2 -> ab