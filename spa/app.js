const stat = localStorage.getItem("stat")
const ids = localStorage.getItem("ids")

window.onload = function () {
  if (stat === 'todo') {
  todo()
  }
  else if (stat === 'calculator') {
  calculator()
  }
  else {
  home()
  }

  if (ids === null) {
  localStorage.setItem("ids", 88)
  }
  else {
    console.log('дабро')
  }
}


const homeButton = document.getElementById("home")
const todoButton = document.getElementById("todo")
const calculatorButton = document.getElementById("Calculator")

homeButton.onclick = home
todoButton.onclick = todo
calculatorButton.onclick = calculator

function home () {
  localStorage.removeItem("stat")
  localStorage.setItem("stat", 'home')
  let app = document.getElementById("app")
  app.innerHTML = '<p></p>'
}

function todo() {
  localStorage.removeItem("stat")
  localStorage.setItem("stat", 'todo')
  let app = document.getElementById("app")
  app.innerHTML = '<body>'
  app.innerHTML += '<span>'
  app.innerHTML += '<h1>To Do List</h1>'
  app.innerHTML += '<input type="text" id="taskInput" placeholder="Add a new task...">'
  app.innerHTML += '<button id="addTaskButton">Add Task</button>'
  app.innerHTML += '<p>Not done: </p>'
  app.innerHTML += '<p id="taskList"></p>'
  app.innerHTML += '<p>Done: </p>'
  app.innerHTML += '<p id="taskList1"></p>'
  app.innerHTML += '<button id="clearButton">Clear All Dones</button>'
  app.innerHTML += '<p id="display"></p>'
  app.innerHTML += '</span>'
  app.innerHTML += '</body>'




let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function() {
  let divany = document.querySelectorAll("div");
  divany.forEach(function(div) {
    if (div.textContent.split('').at(-1) === "✔") {
      let fruits = div.textContent.split(' ')[4];
      localStorage.removeItem('done' + fruits);
      div.remove();
    }
  });
});



let ids = localStorage.getItem('ids');
for (let i = 0; i <= ids.length; i++) {

let ids = localStorage.getItem('ids');
let scobochki = ids.split(',');
let task = localStorage.getItem('input' + scobochki[i]);
let task1 = localStorage.getItem('done' + i);

function notdone() {
   const newButton0 = document.createElement("button");
   const newButton1 = document.createElement("button");
   const newButton2 = document.createElement("button");
   const newButton3 = document.createElement("button");
   const newDiv1 = document.createElement("div");
   const currentDiv0 = document.getElementById("taskList");
   const currentDiv1 = document.getElementById("taskList1");
   const newContent = document.createTextNode("Task   №: " + scobochki[i] + " " + task);
   
   rrr = ids.split(',')
   newDiv1.id = rrr[i]

   newDiv1.appendChild(newContent);
   var parentDiv = currentDiv0.parentNode;
   parentDiv.insertBefore(newDiv1, currentDiv0);
    let zsdg = newDiv1.textContent.split('').slice(-4)
    if (zsdg.join('') === "null") {
    newDiv1.remove()
  }

    newButton0.textContent = "Replace";
    newDiv1.appendChild(newButton0);
    newButton1.textContent = "Done";
    newDiv1.appendChild(newButton1);
    newButton2.textContent = "Delete";
    newDiv1.appendChild(newButton2);
    newButton3.textContent = "Edit";
    newDiv1.appendChild(newButton3);


    newButton0.addEventListener("click", function() {
    newDiv1.remove();
    var parentDiv = currentDiv0.parentNode;
    parentDiv.insertBefore(newDiv1, currentDiv0)
    localStorage.removeItem('ids');
    const elements = document.querySelectorAll('div');
    const ids = Array.from(elements).map(el => el.id);
    localStorage.setItem('ids', ids);
    });

    newButton1.addEventListener("click", function() {
      newDiv1.remove();
      let asdfv = localStorage.getItem('input' + newDiv1.id);
      localStorage.removeItem('input' + newDiv1.id);
      localStorage.setItem('done' + newDiv1.id, newDiv1.textContent.split('').slice(11, -21).join('') + "✔");
      newDiv1.textContent = "Task   №: " + newDiv1.id + " " + asdfv + "✔";
      newDiv1.id = newDiv1.id
      var parentDiv = currentDiv1.parentNode;
      parentDiv.insertBefore(newDiv1, currentDiv1)




      rrr = ids.split(',')
      let ttt = rrr.filter(el => el !==newDiv1.id)
      localStorage.setItem('ids', ttt)

      zzz = ids.split(',')
      let vvv = zzz.filter(el => el !==newDiv1.id)
      localStorage.setItem('scobochkiZ', vvv)
    });

    newButton2.addEventListener("click", function() {
      newDiv1.remove()
      localStorage.removeItem('input' + newDiv1.id);
      let ids = localStorage.getItem('ids');
      rrr = ids.split(',')
      let ttt = rrr.filter(el => el !==newDiv1.id)
      localStorage.setItem('ids', ttt)

      zzz = ids.split(',')
      let vvv = zzz.filter(el => el !==newDiv1.id)
      localStorage.setItem('scobochkiZ', vvv)
    });

    newButton3.addEventListener("click", function() {
      const Inputishe = document.createElement("input");
      document.body.append(Inputishe);
      Inputishe.addEventListener("change", function() {
        localStorage.removeItem('input' + newDiv1.id);
        localStorage.setItem('input' + newDiv1.id, Inputishe.value);
        newDiv1.textContent = "Task   №: " + newDiv1.id + " " + Inputishe.value;
        Inputishe.remove();
        newDiv1.remove();
        localStorage.removeItem('input' + newDiv1.id);
        let ids = localStorage.getItem('ids');
        rrr = ids.split(',')
        let ttt = rrr.filter(el => el !==newDiv1.id)
        localStorage.setItem('ids', ttt)
        newButton0.textContent = "Replace";
        newDiv1.appendChild(newButton0);
        newButton1.textContent = "Done";
        newDiv1.appendChild(newButton1);
        newButton2.textContent = "Delete";
        newDiv1.appendChild(newButton2);
        newButton3.textContent = "Edit";
        newDiv1.appendChild(newButton3);
        var parentDiv = currentDiv0.parentNode;
        parentDiv.insertBefore(newDiv1, currentDiv0);
      });
    });

if (newDiv1.textContent.split('').slice(20, -21).join('') === "null") {
  newDiv1.remove()
}
}
  function done() {
   const newDiv = document.createElement("div");
   const currentDiv1 = document.getElementById("taskList1");
   const newContent1 = document.createTextNode("Task   №: " + i + " " + task1);
   newDiv.appendChild(newContent1);
   var parentDiv = currentDiv1.parentNode;
   parentDiv.insertBefore(newDiv, currentDiv1);
   let zsdg = newDiv.textContent.split('').slice(-4)
    if (zsdg.join('') === "null") {
    newDiv.remove()
  }
  }

  done();
  notdone();

}

let scobochkiZ

let button = document.getElementById("addTaskButton")
  button.addEventListener("click", dobavlyalka);
  function dobavlyalka() {
    let input = document.getElementById("taskInput");
    if (input.value === "") {
      alert("Please enter a task");
    } else {

  if (localStorage.getItem('ids') === null) {
    scobochkiZ = []
    localStorage.setItem("scobochkiZ", scobochkiZ)
    console.log(scobochkiZ)
  } else {
    scobochkiZ = localStorage.getItem('ids').split(',')
    localStorage.setItem("scobochkiZ", scobochkiZ)
    console.log(scobochkiZ)
  }

      let nomer = scobochkiZ.length
      localStorage.setItem('input' + nomer, input.value);
      const newButton0 = document.createElement("button");
      const newButton1 = document.createElement("button");
      const newButton2 = document.createElement("button");
      const newButton3 = document.createElement("button");
      const newDiv1 = document.createElement("div");
      const currentDiv0 = document.getElementById("taskList");
      const currentDiv1 = document.getElementById("taskList1");

      const newContent0 = document.createTextNode("Task   №: " + nomer + " " + input.value);
      newDiv1.appendChild(newContent0);
      scobochkiZ.push(nomer)
      localStorage.setItem("ids", scobochkiZ)
      var parentDiv = currentDiv0.parentNode;
      parentDiv.insertBefore(newDiv1, currentDiv0);

      newButton0.textContent = "Replace";
      newDiv1.appendChild(newButton0);
      newButton1.textContent = "Done";
      newDiv1.appendChild(newButton1);
      newButton2.textContent = "Delete";
      newDiv1.appendChild(newButton2);
      newButton3.textContent = "Edit";
      newDiv1.appendChild(newButton3);

      newDiv1.id = nomer

      if (newDiv1.textContent.split('').slice(20, -21).join('') === "null") {
        newDiv1.remove()
      }

      newButton0.addEventListener("click", function () {
        newDiv1.remove();
        var parentDiv = currentDiv0.parentNode;
        parentDiv.insertBefore(newDiv1, currentDiv0)
        localStorage.removeItem('ids');
        const elements = document.querySelectorAll('div');
        const ids = Array.from(elements).map(el => el.id);
        localStorage.setItem('ids', ids);
      });

      newButton1.addEventListener("click", function () {
        newDiv1.remove();
        const newDiv = document.createElement("div");
        let task1 = localStorage.getItem('input' + newDiv1.id);
        const newContent1 = document.createTextNode("Task   №: " + newDiv1.id + " " + task1 + "✔");
        localStorage.removeItem('input' + newDiv1.id);
        localStorage.setItem('done' + newDiv1.id, newDiv1.textContent.split('').slice(11, -21).join('') + "✔");
        newDiv.appendChild(newContent1);
        newDiv.id = newDiv1.id
        var parentDiv = currentDiv1.parentNode;
        parentDiv.insertBefore(newDiv, currentDiv1)







        rrr = ids.split(',')
        let ttt = rrr.filter(el => el !== newDiv1.id)
        localStorage.setItem('ids', ttt)

        zzz = ids.split(',')
        let vvv = zzz.filter(el => el !==newDiv1.id)
        localStorage.setItem('scobochkiZ', vvv)
      });

      newButton2.addEventListener("click", function () {
        newDiv1.remove()
        localStorage.removeItem('input' + newDiv1.id);
        let ids = localStorage.getItem('ids');

        rrr = ids.split(',')
        let ttt = rrr.filter(el => el !== newDiv1.id)
        localStorage.setItem('ids', ttt)

        zzz = ids.split(',')
        let vvv = zzz.filter(el => el !==newDiv1.id)
        localStorage.setItem('scobochkiZ', vvv)
      });

      newButton3.addEventListener("click", function () {
        const Inputishe = document.createElement("input");
        document.body.append(Inputishe);
        newDiv1.remove();
        Inputishe.addEventListener("change", function () {
          localStorage.removeItem('input' + newDiv1.id);
          localStorage.setItem('input' + newDiv1.id, Inputishe.value);
          newDiv1.textContent = "Task   №: " + newDiv1.id + " " + Inputishe.value;
          Inputishe.remove();

          localStorage.removeItem('input' + newDiv1.id);
          let ids = localStorage.getItem('ids');
          rrr = ids.split(',')
          let ttt = rrr.filter(el => el !== newDiv1.id)
          localStorage.setItem('ids', ttt)
          newButton0.textContent = "Replace";
          newDiv1.appendChild(newButton0);
          newButton1.textContent = "Done";
          newDiv1.appendChild(newButton1);
          newButton2.textContent = "Delete";
          newDiv1.appendChild(newButton2);
          newButton3.textContent = "Edit";
          newDiv1.appendChild(newButton3);
          var parentDiv = currentDiv0.parentNode;
          parentDiv.insertBefore(newDiv1, currentDiv0);
        });
      });
      input.value = "";
    }
  }

}







































function calculator() {
  localStorage.removeItem("stat")
  localStorage.setItem("stat", 'calculator')
  let app = document.getElementById("app")
  app.innerHTML = '<body>'
  app.innerHTML +='<container class="ccc" id="container">'
  app.innerHTML +='<span class="divan">Доход: </span> </br>'
  app.innerHTML +='<input type="number" id="income" value="0" class="input"></br>'
  app.innerHTML +='<span class="divan">Расход: </span> </br>'
  app.innerHTML +='<input type="number" id="expenses" value="0" class="input"></br>'
  app.innerHTML +='<span class="divan">Сбережения: </span> </br>'
  app.innerHTML +='<input type="number" id="capital" value="0" class="input"></br>'
  app.innerHTML +='<span class="divan">Срок в месяцах: </span> </br>'
  app.innerHTML +='<input type="number" id="months" value="12" class="input"></br>'
  app.innerHTML +='<span class="divan">Доходность в год: </span> </br>'
  app.innerHTML +='<input type="number" id="rate" value="0" class="input"></br>'
  app.innerHTML +='<button id="button">Рассчитать</button>'
  app.innerHTML +='<button id="switch">Поменять тему</button>'
  app.innerHTML +='</container>'
  app.innerHTML +='<div id="div1"></div>'
  app.innerHTML +='</body>'
  document.getElementById('income').value = localStorage.getItem('income');
document.getElementById('expenses').value = localStorage.getItem('expenses');
document.getElementById('capital').value = localStorage.getItem('capital');
document.getElementById('months').value = localStorage.getItem('months');
document.getElementById('rate').value = localStorage.getItem('rate');
let button = document.getElementById("button");
button.addEventListener("click", setStorage);
function setStorage() {
localStorage.setItem('income', income.value);
localStorage.setItem('expenses', expenses.value);
localStorage.setItem('capital', capital.value);
localStorage.setItem('months', months.value);
localStorage.setItem('rate', rate.value);
}
let inputishe = true;
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener("input", () => {
    inputishe = true;
  });
});
window.onbeforeunload = function() {
    inputishe = true;
};
let buttonishe = false
button.addEventListener("click", ()=>{
let cap = Number(document.getElementById('capital').value);
const p = Number(document.getElementById('rate').value) / 100;
const m = Number(document.getElementById('months').value);
const inc = Number(document.getElementById('income').value);
const exp = Number(document.getElementById('expenses').value);
let h = [];
buttonishe = true
if (inputishe && buttonishe) {
    document.querySelectorAll(".msg").forEach(str => str.remove());
    inputishe = false;
    buttonishe = false;
let f = cap;
const N = inc - exp;
const R = 1 + p / m;
for (let i = 0; i < m; i++) {
   f = (((f + N) * R + N) * R)-N; 
   h.push(f.toFixed(2));
   let n = i + 1;
   const newDiv = document.createElement("div");
   const newContent = document.createTextNode("Месяц № " + n + "  = " + h[i]);
   newDiv.appendChild(newContent);
   const currentDiv = document.getElementById("div1");
   newDiv.classList.add("msg");
   const app = document.getElementById("app");
   app.insertBefore(newDiv, currentDiv);
}
}
}
)
let divan = document.querySelectorAll('.divan');
let gol1 = document.getElementById("switch");

gol1.onclick = () => {
let count = 0
gol1.addEventListener('click', cound)
function cound() {
  count += 1
}

gol1.onclick = () => {
  if (count % 2 === 0){
    svetlo()
  }
  else {
    temno()
  }

function temno() {
  divan.forEach(element => {
   element.style.setProperty('--main-tx-color', '#1a1a1a');
  });
  document.body.style.setProperty('--main-bg-color', '#f5f5f5');
} 

function svetlo() {
    divan.forEach(element => {
    element.style.setProperty('--main-tx-color', '#f5f5f5');
  });
  document.body.style.setProperty('--main-bg-color', '#1a1a1a');
}
}
}
}