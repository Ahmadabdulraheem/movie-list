'use strict';

let form = document.getElementById('form');
let list = document.getElementById('list');
// let listArr = []; 
let imgArr =['action.png','adventure.png','animation.png','comedy.png','detective.png','fantasy.png','history.png','horror.png','musical.png','pirate.png','romantic.png','sci-fi.png','war.png','western.png']

function Watch(name,img,year){

this.name=name;
this.img=img;
this.year=year;


Watch.all.push(this);
}

Watch.all=[];

function getList (e){
e.preventDefault();

let name = e.target.name.value;
let year = e.target.release.value;

let img=e.target.image.value;
// for (let i = 0; i < imgArr.length; i++) {
//    if (`${img}.png` === imgArr[i]){
//        img=imgArr[i];
//        break;
//    }
    
// }

new Watch(name,img,year);

console.log(Watch.all);

localStorage.setItem(JSON.stringify( "movie" , Watch.all))


let tr = document.createElement('tr');
list.appendChild(tr);
// img.src=img;
// tr.textContent=`${img}  ${name}  ${year}`;
let td1 = document.createElement('img');
tr.appendChild(td1);
img.src=img;

let td2 = document.createElement('td');
tr.appendChild(td2);
 td2.textContent=name;

let td3 = document.createElement('td');
tr.appendChild(td3);
 td3.textContent=year;


}
form.addEventListener('submit',getList);

function render(){
let data = JSON.parse(localStorage.getItem("movie"));

if (data){

Watch.all=data;
for (let j = 0; j < data.length; j++) {
   
    let tr = document.createElement('tr');
    list.appendChild(tr);
    // img.src=img;
    // tr.textContent=`${img}  ${name}  ${year}`;
    let td1 = document.createElement('img');
    tr.appendChild(td1);
    img.src=data[j].img;
    
    let td2 = document.createElement('td');
    tr.appendChild(td2);
     td2.textContent==data[j].name;
    
    let td3 = document.createElement('td');
    tr.appendChild(td3);
     td3.textContent==data[j].year;
    
    
}

}

}
 

render ();