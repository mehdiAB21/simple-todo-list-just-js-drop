let $ = document
let lists = $.querySelectorAll(".list-to-do")
let noStatus_ul = $.getElementById("ul_1")
let input_planner = $.querySelector(".input_planner")
let button_planner = $.querySelector(".button_planner")
let delete_span  = $.querySelectorAll(".delete-span")
let new_li;
let deleteSpan;
let idNote = 1
button_planner.addEventListener("click", note_plan)

function note_plan(){
  if(input_planner.value === ""){
    alert("لظقا مقداری را وارد کنید")
  }else{
    new_li = $.createElement("li")
    new_li.classList = "list-group-item d-flex justify-content-between align-items-center"
    deleteSpan = $.createElement("span")
    deleteSpan.classList = "badge bg-primary rounded-pill delete-span"
    deleteSpan.innerHTML = "✖"
    new_li.innerHTML = input_planner.value 
    new_li.append(deleteSpan)
    new_li.id = idNote
    new_li.draggable = true
    new_li.addEventListener("dragstart",drag)
    noStatus_ul.append(new_li)
    delete_span = $.querySelectorAll(".delete-span")
    delete_span.forEach(function(span){
      span.addEventListener("click",deleteNote)
    })
    idNote++
  }
}
function deleteNote(event){
  event.target.parentElement.remove()
}

lists.forEach(function(event){
  event.addEventListener("dragover", dragover)
  event.addEventListener("drop", dropHandler)
})
function drag(event){
  event.dataTransfer.setData("element_id" ,event.target.id)
}
function dragover(event){
  event.preventDefault()
}
function dropHandler(event){
  let dragNote = $.getElementById(event.dataTransfer.getData("element_id"))
  event.target.append(dragNote)
}