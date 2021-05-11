// create to do list
// create 2 buttons
// all items have li
// clear all li (all to do's)



document.getElementById('todoButton').addEventListener('click', add)

// referenced w3school

function add (){

// let list = document.createElement('li')
// let inputValue = document.getElementById('todoInput').value
//    document.getElementById('addItems').appendChild(list)
// list.appendChild(document.createTextNode('inputValue'))
// inputValue.value = ''


  document.getElementById('todoButton')
  let li =
  document.createElement('li')
 let inputValue =
 document.getElementById('todoInput').value
  let l =
  document.createTextNode(inputValue)
  li.appendChild(l)
    if(inputValue == ''){
      alert('Hey! Add some stuff.')
    } else{
   document.getElementById('addItems').appendChild(li)
    }
    document.getElementById('todoInput').value

}


// }console.log('hello')


// cross through completed tasks
// worked with Rebecca C.

let list = document.getElementById('addItems')
list.addEventListener('click', (e)=> {
  e = e.target
  e.classList.toggle("crossThrough2")
})


let clearCross = document.getElementById('clearCross')
// clear entire list
clearAll.addEventListener('click', clearList => {
  addItems.innerHTML = ""
})
// let clear = document.createElement('ul')

clearCross.addEventListener('click' , () => {
  const lil = document.querySelectorAll('li')
  let list = document.getElementById('addItems')
  for (let i = 0; i < lil.length; i++){
    if(lil[i].classList.contains('crossThrough2')){
      list.removeChild(lil[i])
    }
  }
})
