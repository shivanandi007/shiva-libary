console.log("kya re ...aa gaya yaha");
let Name=prompt('what is your name');
console.log(Name);
let elem=document.createElement('header1');
elem.innerText=(" HI!!!! "+Name+" WELCOME TO SHIVGEEKS :) ");
let div=document.querySelector('.op');
div.appendChild(elem);


function book(name,author,type)
{
    this.name=name;
    this.author=author;
    this.type=type;
}

function display(){

}
display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}
display.prototype.clear=function(){
    let a=document.getElementById('libraryForm');
a.reset();

}



let a=document.getElementById('libraryForm');
a=document.addEventListener('submit',handlefff)

function handlefff(e){
    console.log("hey shiva");

    e.preventDefault();
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let type;

    let fiction=document.getElementById('fiction');
    let love =document.getElementById('love');
    let technology=document.getElementById('technology')
    if(fiction.checked){
        type=fiction.value;
    };
    if(love.checked){
        type=love.value;
    };
    if(fiction.checked){
        type=technology.value;
    };

let Book = new book(name,author,type)
console.log(Book);
let Display=new display();
Display.add(Book);
Display.clear();

}