let body = document.getElementById('body');

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
<button class="btn option"id="clear"> C</button>
</div>
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option" id="delete">
        <i class="fa-solid fa-delete-left"></i>
    </button>
    </div>
    <div class="col-md-3 col-sm-3">
        <button type="button" class="btn option">.</button>
        </div>
        <div class="col-md-3 col-sm-3">
            <button type="button" class="btn option"id="operation">X</button>
            </div>`;

//append row1 to content

content.append(row1);

//creating row2

let row2 = document.createElement('div');
row2.setAttribute('class','row');
row2.innerHTML = `
    <div class="col-md-3 col-sm-3">
        <button type="button" class="btn option">7</button>
    </div>
    <div class="col-md-3 col-sm-3">
        <button type="button" class="btn option">8</button>
    </div>
    <div class="col-md-3 col-sm-3">
            <button type="button" class="btn option">9</button>
    </div>
    <div class="col-md-3 col-sm-3">
                <button type="button" class="btn option"id="operation">/</button>
     </div>`

//append row2 to content

content.append(row2);

//creating row3

let row3 = document.createElement('div');
row3.setAttribute('class','row');
row3.innerHTML=`
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option">4</button>
</div>
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option">5</button>
</div>
<div class="col-md-3 col-sm-3">
        <button type="button" class="btn option">6</button>
 </div>
<div class="col-md-3 col-sm-3">
            <button type="button" class="btn option"id="operation">-</button>
</div>`

//append row3 to content

content.append(row3);

//creating row4

let row4 = document.createElement('div');
row4.setAttribute('class','row');
row4.innerHTML = `
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option">1</button>
</div>
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option">2</button>
</div>
<div class="col-md-3 col-sm-3">
        <button type="button" class="btn option">3</button>
</div>
<div class="col-md-3 col-sm-3">
            <button type="button" class="btn option" id="operation">+</button>
 </div>`

//append row4 to content

content.append(row4);

let row5 = document.createElement('div');
row5.setAttribute('class','row');
row5.innerHTML = `
 <div class="col-md-3 col-sm-3">
    <button type="button" class="btn option">0</button>
</div>
<div class="col-md-3 col-sm-3">
    <button type="button" class="btn option">00</button>
</div>
<div class="col-md-6 col-sm-6">
        <button type="button"class="btn option len"id="equal">=</button>
</div>`

//append row5 to content

content.append(row5);

//append content to body div
body.append(content);





