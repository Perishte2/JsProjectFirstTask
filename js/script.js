//first task
let money = +prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");



//second task
let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
let secondAnswer = +prompt("Во сколько обойдется?");

let expenses={
    firstAnswer:secondAnswer
};

console.log(expenses);



//third task
 let appData = {budjet:money, timeData:time,
expenses:secondAnswer,
optionalExenses:"",
income:"",
savings:false
};

console.log(appData);



alert(money);

