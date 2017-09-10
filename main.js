// then :: f -> Thenable -> Thenable
const then = R.curry((f, thenable) => thenable.then(f))

//sequence 
const sequence = (...args) => val => args.forEach(f => f(val))

// pipe
const pipe = (...args) => value => args.reduce((acc, fn) => fn(acc), value);

// compose
const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value);

// trace :: String -> Any
const trace = message => val => { console.log(message, val); return val }


