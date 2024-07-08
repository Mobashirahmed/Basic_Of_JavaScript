// for loop

// for (let i= 0; i< array.length; i++) {   // j: < array.length; isska naam hai condition check
//     const element = array[i];
//     console.log(element);
    
// }

// ctrl + D to select and edit all together
for (let i= 0; i<= 10; i++) {
    const element = i;
    if (element == 7) {
        console.log("7 is the best/worst number");
    }
}

for (let i = 0;  i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        const element = [j];
        // console.log(`Inner loop value value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );

    }
    
}

let myArray = ["flash", "batman", "superman", "wonder-woman" ]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}

// brreak and continue

for (let index = 1; index <= 7; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 7; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}