var katzDeliLine = []

function takeANumber(line, fresser) {
	line.push(fresser)
	return `Welcome, ${fresser}. You are number ${line.length} in line.`
}

function nowServing(line) {
	if (line.length === 0) {
		return "There is nobody waiting to be served!"
	}
	else {
		var luckySchmuck = line[0]
		line.shift()
		return `Currently serving ${luckySchmuck}.`
	}
}

function currentLine(line) {
	if (line.length === 0) {
		return "The line is currently empty."
	}
	else {
		var list = []

		for (let i = 0; i < line.length; i++) {
			list.push(` ${i+1}. ${line[i]}`)

		}
	return `The line is currently:${list.toString()}`
	}
}