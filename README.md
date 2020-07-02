# batu-gunting-kertas-nuxt

> My supreme Nuxt.js project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


# Brainjs

```javascript

const net = new brain.recurrent.LSTMTimeStep();

/* net.train([[1, 2, 3]]); */

/* net.train([[1, 1, 1, 1, 1, 1]]); */
/* const output = net.run([1, 1, 1, 1, 1]); // 1 */

/* net.train([[1, 2, 1, 2, 1, 2]]); */
/* const output = net.run([1, 2, 1, 2, 1]); // 2 */

net.train([[1, 2, 3, 1, 2, 3]]);
const output = net.run([1, 2, 3, 1, 2]); // 3

const rounded = Math.round(output)
console.log(output)
console.log(rounded)

```

## Decision

fungsi

whatIsHumanChoice?
output: chosenByHuman

whatShouldItAnswer?
input: pattern
output: chosenByAI

whoIsTheWinner?
input: chosenByHuman, chosenByAI
output: winner, scoreHuman, scoreAI

resetScore
clearValue: winner, scoreHuman, scoreAI, pattern, chosenByHuman, chosenByAI

## Snippet

```javascript

stringOf(integer) {
      switch (integer) {
        case 1:
          return 'batu'
          break
        case 2:
          return 'gunting'
          break
        case 3:
          return 'kertas'
          break

        default:
          return ''
          break
      }
    }

```
