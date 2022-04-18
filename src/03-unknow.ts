let anyVar: any;
anyVar = '123';
anyVar = 123;
anyVar = true;

let isNew: boolean =anyVar;


let unknowvar: unknown;
unknowvar = '123';
unknowvar = 123;
unknowvar = true;

if(typeof unknowvar === 'string'){
  unknowvar.toUpperCase();
}
if(typeof unknowvar === 'boolean'){
  let isNewV2:boolean = unknowvar;

}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
