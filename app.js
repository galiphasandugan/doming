const form = document.querySelector("#new-task-form")
const input =document.getElementById("new-task-input")
const list = document.getElementById("tasks");
input.focus()
form.addEventListener("submit",(e)=>{
   e.preventDefault()
   const task = input.value;
   input.focus()

    const div = document.createElement("div");
    div.classList.add("task");
    

    const div2 =document.createElement("div");
    div2.classList.add("content")
    
    div.appendChild(div2)
   
    const input2 = document.createElement("input")
    input2.classList.add("text")
    input2.type="text"
    input2.value= task;
    input2.setAttribute("readonly","readonly")

    div2.appendChild(input2)

    const div3 = document.createElement("div")
    div.classList.add("actions")

    const button1 =document.createElement("button")
    button1.classList.add("edit")
    button1.innerHTML="Edit"
    button1.style.color="red"
    button1.style.fontSize="1.2rem"
 
 
    const button2 = document.createElement("button")
    button2.classList.add("delete")
    button2.innerHTML= "Delete"
    button2.style.color="blue"
    button2.style.fontSize="1.2rem"
  

    div3.appendChild(button1)
    div3.appendChild(button2)

    div.appendChild(div3);
    list.appendChild(div);

input.value=""
  

button1.addEventListener("click",(e)=>{
if(button1.innerHTML=="Edit"){
    button1.innerHTML="Save";
    input2.removeAttribute("readonly")
    input2.focus()
}else{
    button1.innerHTML="Edit"
    input.setAttribute("readonly","readonly")
}
})

button2.addEventListener("click",(e)=>{
    list.removeChild(div)

})

})
