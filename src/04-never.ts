const withoutEnd = () => {
  while (true) {
    console.log('Hello World');
  }
}

const fail = (message:string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string') {
    return 'es un string';
  }else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
}

console.log(example('hola'));
console.log(example([1,2,3]));
console.log(example(123212));
console.log(example('hola despues del fail'));
