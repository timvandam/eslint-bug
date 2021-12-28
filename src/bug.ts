let x: number;

function dangerousFunction(): number {
	if (Math.random() > 0.5) throw new Error('Boom')
	return 123
}

try {
	x = dangerousFunction()
} catch (e) {
	//
}
