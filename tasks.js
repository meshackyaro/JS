function filterHighestScores(testScores) {
return testScores.filter(result => result >= 70);

}

function improveStudentScores(studentScores) {
    return studentScores.map((num)=> num + 5);

}

function findTheSquaresOfThis(listOfNumbers) {
    return listOfNumbers.map(num * num);
}

function distributeBooksTo(members, books) {
        let people = {};
    for (const [value,entry] of members.entries()) {
            people[entry]= books[value];
    }
    return people;
}
members = ["a1","a2","a3","a4"];
books = ["b1","b2","b3","b4"];
console.log(distributeBooksTo(members, books));
module.exports = {filterHighestScores, improveStudentScores, findTheSquaresOfThis, distributeBooksTo};
