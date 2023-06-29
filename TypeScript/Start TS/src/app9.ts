let str9: string = 'hello';

let result9: string = '';

for (let i: number = 0; i < str9.length; i++) {
    if (!result9.includes(str9[i])) {
        result9 += str9[i]
    }
}
console.log(result9);

