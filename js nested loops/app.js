// let str = 'LOL';

// for (let i =0; i<=4; i++) {
//     console.log("Outer:", i);
//     for (let j=0; j < str.length; j++) {
//         console.log(' Inner:', str[j]);
//     }
// }

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Brandon', 'Neil', 'John', 'Devin'],
    ['Bill', 'Pippen', 'Jordan']
]

// for (let i = 0; i < seatingChart.length; i++) {
//     console.log(seatingChart[i])
// }

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i]
//     console.log("ROW", "#",i+1)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }

// }

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i+1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }

}
