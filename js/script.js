let money, time;

//Second Part
function start() {
     money = prompt("Ваш бюджет на месяц", '');
     time = prompt("Введите дату в формате YYYY-MM-DD");

     while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц", '');

     }
}

start();

  //first part
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true , 
    chooseExpenses: function() {    //methods of object
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
                console.log ("done");
        
                appData.expenses[a] = b;
            } else {                            
                console.log ("bad result");
                i--;
            }
        
        };  
    },
    detectDayBudget: function() {    //methods of object
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет : " + appData.moneyPerDay);
    },
    detectLevel: function() {    //methods of object
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000 ) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Что то пошло не так");
        }
    },
    checkSavings: function() {    //methods of object
        if(appData.savings == true ) {
            let save = +prompt("Какова сумма накопления?");
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    
        }
    },
    chooseIncome: function() {
        
     
       let  items = prompt("Что принесет дополнительный доход? (Перечислите через запятую) " , '');
       if (typeof(items) != "string" || items == "" || typeof(items) == null) {  //to check if array is not empty or did not anyone pressed cancel
        // or didnt anyone pressed any numbers 
           console.log("Вы ввели некорректные данные или вовсе их не ввели");
       }else{
        appData.income = items.split(', ');
        appData.income.push(prompt("А может что то еще? "));
        appData.income.sort();
        
     }
     
     appData.income.forEach(function(item, i) {   //to show all methods of salary
         alert("Способы доп. заработка: " + (i+1) + " - " + item);

     })
    },
    showWholeObject: function() {  //to show all keys and meanings of object appData
        for(let key in appData) {
            alert("Наша программа включает в себя данные: " + key + "  имеет значение  " + appData[key]);
        }
    }
   

};


