//맵 기본 문법
let arr =['a','b','c'];

let list = arr.map(function(item){
  let title = item+'항목';
  return `<li>${title}</li>`;
});

let list2 = arr.map((item)=>{
  return `<li>${item}</li>`;
});

let list3 = arr.map((item)=> `<li>${item}</li>`);


let list4 = arr.map(item=> `<li>${item}</li>`);


console.log(list);