// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
modal.classList.add("hidden");
const likeBtn = document.querySelectorAll(".like");

likeBtn.addEventListener("click", mimicServerCall)

fetch("http://mimicServer.example.com", mimicServerCall)
.then((response) => response.json())
.then((data) => console.log(data))
//failure message
.catch((error) => {
  modal.classList.remove("hidden")
  console.log(error.message)
})



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
