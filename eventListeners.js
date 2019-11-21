
function sayHello() {
    console.log("hello!");
}

document.querySelector('#generate-greeting').onclick = sayHello;


function crossItem(e) {
    console.log(e.target);
    e.target.style.textDecoration = "line-through";
}
function addItem() {
    const newItem = document.createElement('li');
    newItem.onclick = crossItem;
    const list = document.querySelector('ul');
    list.appendChild(newItem);
    const inputItem = document.querySelector('#new-todo');
    const textNode = document.createTextNode(inputItem.value);
    newItem.appendChild(textNode);
    inputItem.value = ''
}
document.querySelector('#generate-todo').onclick = addItem;

