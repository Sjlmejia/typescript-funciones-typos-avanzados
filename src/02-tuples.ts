const prices: (number |string)[] = [1, 2, 3, 4, 5];
prices.push('5');
prices.push(5);


//tuplas
let user: [string, number, boolean];
user = ['Nico', 23, true];

const [username, age] = user;

console.log('username: ', username);
