
const counter = document.getElementById("counter")

let count = 0
let max = 3456893
let counting = false

function runCounter(){
  const incr = max / 1000
  let int = setInterval(function(){
  if(count >= max) {
    clearInterval(int)
    counter.innerHTML = format(max)
    counting = false
    return
  }
  count =count + incr;
  
  counter.innerHTML = format(Math.floor(count))
  
},1 )

}

function format(number){
  let formated = ""
  
  let splits = number.toString().split("").reverse()
  
  splits.forEach(function(dig, index){
    
    if(index%3 == 0 && splits.length != index && index !=0 ){
      formated = dig + ','+formated 
    }else{
      formated =  dig + formated
    }
  })
  return formated
}

runCounter()

counter.addEventListener("click", function(){
  if(counting) return 
  
  counting = true
  max = max + Math.floor(max * (Math.random()*0.05))
  runCounter()
})

const navigator = document.getElementById("navigator")
const navigatorBtn = document.getElementById("navigator-btn")
const navigatorCloseBtn = document.getElementById("navigator-close-btn")

 function toggleNavigator(){
  
  if (navigator.active){
    navigator.classList.add('-translate-x-full')
    navigator.active= false;
  }else{
    navigator.classList.remove('-translate-x-full')
    navigator.active = true;
  }
}

navigatorBtn.addEventListener("click",toggleNavigator)
navigatorCloseBtn.addEventListener("click", toggleNavigator)
