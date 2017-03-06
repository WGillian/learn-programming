var hash = {a: 1, b: 2}

{...hash} // => {a: 1, b: 2} <- this hash is like a '_.cloned hash'

// All these hashes are 'cloned'. Nothing every gets mutated
{c: 3, ...hash} // => {a: 1, b: 2, c: 3}
{...hash, c: 3} // => {a: 1, b: 2, c: 3}
{...hash, b: 3} // => {a: 1, b: 3}
{b: 3, ...hash} // => {a: 1, b: 2}

{hash: hash} // => {hash: {a: 1, b: 2}}
{hash} // => {hash: {a: 1, b: 2}}
{hash: {...hash, c: 3}} // => {hash: {a: 1, b: 2, c: 3}}

array = [1, 2, 3]
[...array] // => [1, 2, 3] cloned
[0, ...array] // => [0, 1, 2, 3]
[...array, 4] // => [1, 2, 3, 4]
[0, ...array, 4] // => [0, 1, 2, 3, 4]
