// let  {highestScores} = require("./tasks.js");

let {highestScores, addFiveToScores, findTheSquaresOfThis} = require("./tasks.js");

test("filter highest scores", () => {
    let testScores = [20, 30, 60, 45, 95, 80, 25, 75, 60, 90];
    let result = [95, 80, 75, 90];
    expect(result).toEqual([95, 80, 75, 90])

})

test("improve student scores by 5", () => {
    let studentScores = [85, 92, 78, 88, 95];
    let newScores = [90, 97, 83, 80, 95];
    expect(newScores).toEqual([90, 97, 83, 80, 95]);

})

test("square of numbers in a list", () => {
    let listOfNumbers = [2, 4, 6, 8, 10];
    let result = [4, 16, 36, 64, 100];
    expect(result).toEqual([4, 16, 36, 64, 100]);
})

test("distribute books to members", () => {
    let books = ["Book1", "Book2", "Book3", "Book4"];
    let members = [{name: "Emily", books: null}, {name: "Jack", books: null, name: "Sophia", books: null, name: null, books: null}];
    expect().toEqual()
    let distributedBooks = [{name: "Emily", books: "Book1"}, {name: "Jack", books: "Book2", name: "Sophia", books: "Book3", name: "Daniel", books: "Book4"}];
    let result = distributeBooks(members);
    expect(distributedBooks).toEqual(result);
})

