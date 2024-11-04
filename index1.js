// work is class for the p tags of the div
const draggs = document.querySelectorAll('.work');
// col is class for divs
const drops = document.querySelectorAll('.col');
let col1 = document.querySelector('.col1');
let col2 = document.querySelector('.col2');
let col3 = document.querySelector('.col3');
let col4 = document.querySelector('.col4');


draggs.forEach((work)=>{
    work.addEventListener('dragstart',()=>{
        work.classList.add('is-dragging')
    })
    work.addEventListener('dragend',()=>{
        work.classList.remove('is-dragging')
    })
})

drops.forEach((cols)=>{
    cols.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
});

for(work of draggs){
    work.addEventListener('dragstart',function(e){
        let selected = e.target;
        console.log(selected)

        col1.addEventListener('dragover',function(e){
            e.preventDefault(); 
         })
         col1.addEventListener('drop',function(e){
             col1.appendChild(selected); 
             selected=null;
          })

        col2.addEventListener('dragover',function(e){
           e.preventDefault(); 
        })
        col2.addEventListener('drop',function(e){
            col2.appendChild(selected); 
            selected=null;
         })
        col3.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        col3.addEventListener('drop',function(e){
            col3.appendChild(selected); 
            selected=null;
         })
        col4.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        col4.addEventListener('drop',function(e){
            col4.appendChild(selected); 
            selected=null;
         })
    })
}


const form1 = document.getElementById("todo-form");
const input = document.getElementById("todo-in");
const addLane = document.querySelector(".col2");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  let selected= e.target;
  const val1 = input.value;
  if (!val1) return;

  const newTask1 = document.createElement("p");
  newTask1.classList.add("work");
  newTask1.setAttribute("draggable", "true");
  newTask1.innerText = val1;

  newTask1.addEventListener("dragstart", () => {
    newTask1.classList.add("is-dragging");
  });

  newTask1.addEventListener("dragend", () => {
    newTask1.classList.remove("is-dragging");
  });
  
  newTask1.addEventListener('drop',()=>{

  })
  addLane.appendChild(newTask1);

  input.value = "";

});

var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  document.body.className = "night";
	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM
	  document.body.className = "sunset";
	else
  	  document.body.className = "day";