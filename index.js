//A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"},
    {name: "Superman", alter_ego: "Clark Kent"},
    {name: "Spiderman", alter_ego: "Peter Parker"}
]
    
    // Here goes your function
    const findSpiderMan = function(superheroes){
       return superheroes.find(item => item.name === "Spiderman")
    }
    console.log(findSpiderMan(superheroes))
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

    //B

    //here with forEach return (Loop for each item)
    const doubleArrayValues = function(integers){
        return integers.forEach(item => {
            console.log(item * 2)
        })
    }


//here with map return new Array

    // const doubleArrayValues = function(integers){
    //     console.log(integers.map(item => item * 2))
    // }

    doubleArrayValues([1, 2, 3])
// result should be [2, 4, 6]

//C

const containsNumberBiggerThan10 = function(integers){
console.log(integers.some(item => item > 10)
)
}

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
// result should be true
containsNumberBiggerThan10([1,2,1,2,1,2])
// result should be false

//D

const isItalyInTheGreat7 = function(countries){
    console.log(countries.some(item => item === "Italy"))
}
isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])
// result should be true

//E

const tenfold = function(integers){
    return integers.forEach(item => console.log(item * 10))
}

tenfold([1, 4, 3, 6, 9, 7, 11]);


// result should be [10, 40, 30, 60, 90, 70, 110]

//F
const isBelow100 = function(integers){
return integers.every(item => item > 100)
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

//G
const bigSum = function(integers){
    return integers.reduce((total,item) => total + item,0)
      
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118