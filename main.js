// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let emptyHeart = document.querySelectorAll(".like-glyph")

for(glyph of emptyHeart){
  glyph.addEventListener("click",clicked)
}


function clicked(e) {
  const heart = e.target;

  mimicServerCall()

  
  
  .then(function(){
    heart.innerHTML = FULL_HEART
    heart.classList.add("activated-heart")
    
       
   
 })
  
   
  .catch(function (error){

    let div = document.querySelector("#modal")
    error = div.classList.remove("hidden")

   setTimeout(()=> {div.classList.add("hidden")}, 3000)
 
  
    
  })
  
  heart.innerHTML = EMPTY_HEART 
  heart.classList.remove ("activated-heart")   
  
 
}


  





 
   
  


  


 
 
  









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

  
