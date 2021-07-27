const animals = ['lions', 'tigers', 'bears'];
animals.push('zebras', 'birds')

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

for (let i = animals.length - 1; i >=0; i--) {
    console.log(i, animals[i])
}