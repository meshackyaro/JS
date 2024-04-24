function filterHighestScores(testScores) {
return testScores.filter(result => result >= 70);

}

function improveStudentScores(studentScores) {
    return studentScores.map((num)=> num + 5);

}

function findTheSquaresOfThis(listOfNumbers) {
    return listOfNumbers.map(num * num);
}

function distributeBooksTo(members) {
    for (const value of members) {
        members.book = book;
    }
}

module.exports = {filterHighestScores, improveStudentScores, findTheSquaresOfThis};
