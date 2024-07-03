const Marvel_Heros = ["The Mighty Thor", "Captain America", "Wasp", "Ant-Man"]
console.log(Marvel_Heros);

const DC_Heros = ["Superman", "Flash", "Batman", "CatWoman", "WonderWoman"]
console.log(DC_Heros);

const AllHeros = Marvel_Heros.concat(DC_Heros)
console.log(AllHeros);

const all_new_heros = [...Marvel_Heros, ...DC_Heros] //spreader
console.log(all_new_heros);

const another_array = [1,2, 3, [4, 5, 6], 7, [4, 8, [6]], 8, 9] // array venetion kar rahe hai aisa lag raha hai
console.log(another_array);

const real_another_array_array = another_array.flat(Infinity) // yahan infinity se array ki depth define kar rahe the, array ki depth maaloom nahi thi ki iss liye bhaiya ne 'Infinity' bhar diya
console.log(real_another_array_array);

Array.isArray("Mobashir is here playing with Arrrays")
console.log(Array); // .isArray ek method hai jo array-constructor ka naam likhne ke baad likhte hai. And it defines Array.
console.log(Array.from("Mobashir is here playing with Arrrays")); // .from . It spreads all the characters of given string in an Array, even those spaces present in String.
console.log(Array.from({name: "Mobashir is here playing with Arrrays"})); // Intresting AND it always give you empty array


let goal01 = 354
let goal02 = 630
let goal03 = 246

console.log(Array.of (goal01, goal02, goal03));