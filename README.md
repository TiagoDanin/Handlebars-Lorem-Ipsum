# Handlebars Lorem Ipsum[![Build Status](https://travis-ci.org/TiagoDanin/Handlebars-Lorem-Ipsum.png?branch=master)](https://travis-ci.org/TiagoDanin/Handlebars-Lorem-Ipsum)

Handlebars helper - Generate lorem ipsum text

## How to Use

```
{{lorem-ipsum count, units, words, options}}
```

**Params**
- count :: Number or String (Default is `10`)
- units :: `words`, `sentences`, or `paragraphs` (Default is `sentences`)
- words :: String (`wordOne, wordTwo`) or Array (`['wordOne', 'wordTwo']`)
- options :: More options of [lorem-ipsum](https://ghub.io/lorem-ipsum) package.

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install handlebars-lorem-ipsum --save
```

## Dependencies

- [lorem-ipsum](https://ghub.io/lorem-ipsum): Generates passages of lorem ipsum text suitable for use as placeholder copy in web pages, graphics, and more. Works in the browser, NodeJS, and React Native.

## Dev Dependencies

- [expect.js](https://ghub.io/expect.js): BDD style assertions for node and the browser.
- [handlebars](https://ghub.io/handlebars): Handlebars provides the power necessary to let you build semantic templates effectively with no frustration
- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework

## License

MIT
