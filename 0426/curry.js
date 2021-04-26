function curry(fn, ...args) {
  const length = fn.length

  if (args.length >= length) {
    return fn.bind(null, ...args)
  } else {
    return function curried(...args2) {
      return curry(fn, ...[...args, ...args2])
    }
  }
}

const sum = (a,b,c) => {
  console.log(a + b + c)
}

let cSum = curry(sum)(1)(2)(3)()

