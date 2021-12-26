
document.querySelector(".btn").addEventListener("click", function(event) {
  let text = document.getElementById("commentBox").value;

   document.getElementById("display").innerHTML= " You " + " said " + text + " ! ";
    event.preventDefault();
}, false);
