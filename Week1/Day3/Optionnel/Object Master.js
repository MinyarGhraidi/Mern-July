// an array of pokémon objects where the id is evenly divisible by 3
const pokémonDivisibleBy3 = pokémon.filter((pokemon) => pokemon.id % 3 === 0);

console.log(pokémonDivisibleBy3);

// Filter Pokémon objects that are "fire" type
const fireTypePokémon = pokémon.filter((pokemon) => pokemon.types.includes("fire"));

console.log(fireTypePokémon);

//an array of pokémon objects that have more than one type
const newPokemons = pokémon.filter((poke) => {
    return poke.types.length > 1
})
//an array with just the names of the pokémon
const pokeName = pokémon.map((poke) => {
    return poke.name
})
//an array with just the names of pokémon with an id greater than 99
const newPokemons2 = pokémon.filter((poke) => {
    return poke.id >= 99
})
console.log(newPokemons2)

//an array with just the names of the pokémon whose only type is poison
const poisonTypePokémon = pokémon.filter((pokemon) => pokemon.types.length === 1 && pokemon.types[0] === "poison").map((pokemon) => pokemon.name);

console.log(poisonTypeNames);

// Filter Pokémon objects with two types, where the second type is "flying"
const flyingTypePokémon = pokémon.filter((pokemon) => pokemon.types.length === 2 && pokemon.types[1] === "flying");
const firstTypesOfFlyingPokémon = flyingTypePokémon.map((pokemon) => pokemon.types[0]);

console.log(firstTypesOfFlyingPokémon);

//a count of the number of pokémon that are "normal" type

const normalTypeCount = pokémon.reduce((count, pokemon) => {
    if (pokemon.types.includes("normal")) {
    return count + 1;
    } else {
    return count;
    }
}, 0);

console.log(normalTypeCount);


