const handlebars = require('handlebars')
const expect = require('expect.js')
const helper = require('.')

handlebars.registerHelper('lorem-ipsum', helper)

describe('Handlebars Lorem Ipsum', () => {
	it('{{lorem-ipsum}}', () => {
		(handlebars.compile('{{lorem-ipsum}}'))({})
	})
	it('{{lorem-ipsum 2 "words" "a,b,c"}}', () => {
		var r = (handlebars.compile('{{lorem-ipsum 2 "words" "a,b,c"}}'))({})
		expect(r).to.be.a('string')
		expect(r.length).to.be(3)
		expect(r).to.match(/a|b|c/i)
	})
	it('{{lorem-ipsum 2 "sentences" dic options}}', () => {
		var r = (handlebars.compile('{{lorem-ipsum 2 "sentences" dic options}}'))({
			dic: ['a', 'b', 'c'],
			options: {
				sentenceLowerBound: 10,
				sentenceUpperBound: 10
			}
		})
		expect(r).to.be.a('string')
		expect(r.length).to.be(41)
		expect(r.split('.').length).to.be(3)
		expect(r).to.match(/a|b|c/i)
	})
})
