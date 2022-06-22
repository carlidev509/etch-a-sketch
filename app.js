let btn = document.querySelector('button');
let change_color = document.querySelector('#change_color');
let change_color_1 = document.querySelector('#change_color_1');
let eraser = document.querySelector('#eraser');
let color = 'black';



function my_grid(size){
  /* 
    this function is for displaying the size of the grid
    creating the divs inside the container

    the lines before the for loop are there because in the context of the exercise we should consider the container as the grid
    so I both caught the grid and set its size.
  */

  let container = document.querySelector('.container');
  container.style.gridTemplateRows = `repeat(${size},1fr)`;
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;

  /* using the for loop to create the divs, set a simple style to them and catching the hover effect event through an event listener */
  
  for(let i = 0; i < size * size; i++){
    let div = document.createElement('div');
    // div.style.border = `1px solid black`;
    
    div.addEventListener('mouseover',pen);

    div.addEventListener('mousedown',pen);
    
    container.append(div);
  }
  // let arr = Array.from(container.querySelectorAll('div'))
/*
  for(let i = 0; i < arr.length; i++){
    console.log(i)
  } */
}




let mouse_down = false;
document.body.onmousedown = () => (mouse_down = true);
document.body.onmouseup = () => (mouse_down = false);


my_grid(16)



function pen(e){
  // this function is there for applying the hover effect
  if(e.type === 'mouseover' && !mouse_down) return;
  e.target.style.background = color;
}


function changeSize(){
  let size = prompt("Enter the new size");

  if(parseInt(size) >= 2 && parseInt(size) <= 100){
    my_grid(size);
  }
  else{
    alert(`The desired size should be between 2 and 100`);
  }
}


function random_color(){
  color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  return color;
}


function changeColor(){
  color = prompt(`Type the name of your desired color`);
  if(typeof color === 'string'){
      color = color;
  }
  else{
    alert(`This is not a valid color name`);
  }
}


function erasing(e){
  color = 'white'
  e.target.style.background = color;
}


btn.addEventListener('click',changeSize);
change_color.addEventListener('click',random_color);
change_color_1.addEventListener('click',changeColor)
eraser.addEventListener('click',e => erasing(e))