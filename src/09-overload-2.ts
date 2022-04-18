//Nico => [N,i,c,o] => STRING => string[]
//[N,i,c,o] => Nico => STRING[] => string

export function parseString(input:string):string[];
export function parseString(input:string[]):string;
export function parseString(input:number):true;

// export function parseString(input:string | string[]):string | string[] {
//   if(Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }
export function parseString(input:unknown):unknown {
  if(Array.isArray(input)) {
    return input.join('');
  } else if(typeof input === 'string') {
    return input.split('');
  } else if(typeof input === 'number') {
    return true;
  }
}
const rtaArray = parseString('Jorge');
  rtaArray.reverse();

console.log(rtaArray);
const rtaString = parseString(['J', 'o', 'r', 'g', 'e']);
console.log(rtaString);
