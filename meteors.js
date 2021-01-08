function getMeteors() {
    let today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth();

   let meteorsDiv=document.getElementById("meteorShowers");
 

    let meteorShowers = [
        { day: 3, month: 0, monthWord:"Януари", description: "Метеорен поток Квадрантиди в съзвездията Воловар, Дракон и Херкулес", zenithN: 120 },
        { day: 22, month: 3,monthWord:"Април", description: "Четвъртък: 14:16. Метеорен поток Лириди в съзвездието Лира", zenithN: 20 },
        { day: 5, month: 4,monthWord:"Май", description: "Сряда: 03:30. Метеорен поток ηАквариди в съзвездието Водолей", zenithN: 60 },
        { day: 28, month: 6,monthWord:"Юли", description: "Петък: 05:17. Метеорен поток δАквариди в съзвездието Водолей ", zenithN: 20 },
        { day: 12, month: 7,monthWord:"Август", description: "Петък: 05:17. Метеорен поток Персеиди в съзвездието Персей", zenithN: 90 },
        { day: 21, month: 9,monthWord:"Октомври", description: "Четвъртък: 13:30. Метеорен поток Ориониди в съзвездието Орион", zenithN: 20 },
        { day: 5, month: 10, monthWord:"Ноември",description: "Петък: 13:59. Метеорен поток южни Тауриди в съзвездието Бик", zenithN: 10 },
        { day: 12, month: 10,monthWord:"Ноември", description: "Петък: 13:16. Метеорен поток северни Тауриди в съзвездието Бик", zenithN: 15 },
        { day: 14, month: 11,monthWord:"Декември", description: "Вторник: 08:44. Метеорен поток Джениниди в съзвездието Близнаци", zenithN: 120 },
        { day: 22, month: 11,monthWord:"Декември", description: "Сряда: 17:00. Метеорен поток Урсиди в съзвездието Малка Мечка", zenithN: 10 },

    ]

    meteorShowers.forEach(ms => {
        if (ms.month == currentMonth) {

            if (ms.day >= currentDay) {
                let showerP=document.createElement("p");         
                showerP.innerHTML=`${ms.day} ${ms.monthWord}, ${ms.description}. Зенитно число: ${ms.zenithN}`;
                meteorsDiv.appendChild(showerP);
            }
        }
        else if (ms.month > currentMonth) {
            let showerP=document.createElement("p");         
            showerP.innerHTML=`${ms.day} ${ms.monthWord}, ${ms.description}. Зенитно число: ${ms.zenithN}`;
            meteorsDiv.appendChild(showerP);
            console.log(ms)
        } else {
            console.log("do nothing, it's in the past")
        }

    })
}