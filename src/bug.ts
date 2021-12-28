function something(): number {
	let x: number;

	function dangerousFunction(): number {
		if (Math.random() > 0.5) throw new Error('Boom')
		return 123
	}

	try {
		x = dangerousFunction() // ESLint: 'x' is never reassigned. Use 'const' instead.(prefer-const)
	} catch (e) {
		return -1
	}

	return x * 20 + 5
}
