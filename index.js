const loremIpsum = require('lorem-ipsum')
module.exports = (count, units, words, options) => {
	var config = {
		count: 10,
		units: 'sentences'
	}

	if (count && typeof count == 'string') config.count = Number(count)
	if (count && typeof count == 'number') config.count = count

	if (units && typeof units == 'string') config.units = units

	if (words && typeof words == 'string') config.words = words.split(',').map((a) => a.replace(/^\s*/, ''))
	if (words && Array.isArray(words)) config.words = words

	if (options && !options.name) {
		config = {
			...config,
			...options
		}
	}
	return loremIpsum(config)
}
