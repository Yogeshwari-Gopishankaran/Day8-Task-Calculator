let body = document.getElementById('body');
// Designing Part
//creating div inside body div

let content = document.createElement('div');
content.setAttribute('class','container');
content.setAttribute('id','content');

//creating section display

let display = document.createElement('section');
display.setAttribute('class','row');
display.setAttribute('id','display');

//appending with content

content.appendChild(display);

//creating line div

let line = document.createElement('div');
line.setAttribute('class','line');
line.innerHTML='<hr>';

//append line to content
content.appendChild(line);

//creating row1

let row1 = document.createElement('div');
row1.setAttribute('class','row');
row1.innerHTML = ` 
<div class="col-md-3 col-sm-3">
<button class="btn option"id="clear" onclick="clearDisplay()"> C</button>
</div>
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option" id="delete" onclick="clearLastElement()">
        <i class="fa-solid fa-delete-left"></i>
    </button>
    </div>
    <div class="col-md-3 col-sm-3">
        <button type="button" class="btn option" onclick="appendToDisplay('.')">.</button>
        </div>
        <div class="col-md-3 col-sm-3">
            <button type="button" class="btn option operation"id="multiple" onclick="appendToDisplay('X')">X</button>
            </div>`;

//append row1 to content

content.append(row1);

//creating row2

let row2 = document.createElement('div');
row2.setAttribute('class','row');
row2.innerHTML = `
    <div class="col-md-3 col-sm-3">
        <button type="button" class="btn option" id="7"onclick="appendToDisplay('7')">7</button>
    </div>
    <div class="col-md-3 col-sm-3">
        <button type="button" class="btn option"id="8" onclick="appendToDisplay('8')">8</button>
    </div>
    <div class="col-md-3 col-sm-3">
            <button type="button" class="btn option"id="9" onclick="appendToDisplay('9')">9</button>
    </div>
    <div class="col-md-3 col-sm-3">
                <button type="button" class="btn option operation"id="division" onclick="appendToDisplay('/')">/</button>
     </div>`

//append row2 to content

content.append(row2);

//creating row3

let row3 = document.createElement('div');
row3.setAttribute('class','row');
row3.innerHTML=`
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option" id="4"onclick="appendToDisplay('4')">4</button>
</div>
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option" id="5" onclick="appendToDisplay('5')">5</button>
</div>
<div class="col-md-3 col-sm-3">
        <button type="button" class="btn option" id="6"  onclick="appendToDisplay('6')">6</button>
 </div>
<div class="col-md-3 col-sm-3">
            <button type="button" class="btn option operation"id="subtract" onclick="appendToDisplay('-')">-</button>
</div>`

//append row3 to content

content.append(row3);

//creating row4

let row4 = document.createElement('div');
row4.setAttribute('class','row');
row4.innerHTML = `
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option" id="1" onclick="appendToDisplay('1')">1</button>
</div>
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option" id="2"  onclick="appendToDisplay('2')">2</button>
</div>
<div class="col-md-3 col-sm-3">
        <button type="button" class="btn option" id="3" onclick="appendToDisplay('3')">3</button>
</div>
<div class="col-md-3 col-sm-3">
            <button type="button" class="btn option operation" id="add" onclick="appendToDisplay('+')">+</button>
 </div>`

//append row4 to content

content.append(row4);

let row5 = document.createElement('div');
row5.setAttribute('class','row');
row5.innerHTML = `
 <div class="col-md-3 col-sm-3">
    <button type="button" class="btn option" onclick="appendToDisplay('0')">0</button>
</div>
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option" onclick="appendToDisplay('00')">00</button>
</div>
<div class="col-md-6 col-sm-6">
        <button type="button"class="btn option len"id="equal" onclick="calculateResult()">=</button>
</div>`

//append row5 to content

content.append(row5);

//append content to body div
body.append(content);

//calculating part

let currentDisplay = "0";
let resultDisplay=false;

function appendToDisplay(value) {
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  resultDisplay=false;
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.textContent = currentDisplay;
}

function calculateResult() {
  try {
    const result = eval(currentDisplay);
    currentDisplay += "\n"+ result.toString();
    updateDisplay();
  } catch (error) {
    currentDisplay += "\nError";
    updateDisplay();
  }
  resultDisplay=true;
}

function clearLastElement() {
  currentDisplay = currentDisplay.slice(0, -1);
  if (currentDisplay === "") {
    currentDisplay = "0";
  }
  updateDisplay();
}

function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
  }
  



