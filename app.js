let input = document.querySelector("input")
let btn = document.querySelector("#addItem");
let ul = document.querySelector("ol");

btn.addEventListener('click', ()=>{
  let value = input.value;
  if (value != "") {
  let divList =  document.createElement("div");
  divList.classList.add("list"); // use add() method to add class
  ul.appendChild(divList)

  let li = document.createElement("li");
  li.textContent =  input.value; // get the input value before resetting it
  divList.appendChild(li);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delbtn"); // add the class to the button
  divList.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', ()=>{ // add the event listener to the button
    divList.remove();
  })
  
  li.addEventListener('click', ()=>{
    li.style.textDecoration = "line-through";
  })


  input.value = ""; // reset the input value after getting it

  }else{
    alert("Please Enter The Task");
  }
  
})