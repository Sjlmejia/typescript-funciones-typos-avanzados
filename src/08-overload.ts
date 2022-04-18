//Nico => [N,i,c,o] => STRING => string[]
//[N,i,c,o] => Nico => STRING[] => string

function parseString(input:string | string[]):string | string[] {
  if(Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseString('Jorge');
if(Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

console.log(rtaArray);
const rtaString = parseString(['J', 'o', 'r', 'g', 'e']);
console.log(rtaString);
