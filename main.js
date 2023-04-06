function myFunction() {
    var x = document.getElementById("myTopnav");
    var fb = document.getElementById("facebook")
    if (x.className === "topnav") {
      x.className += " responsive";
      fb.innerHTML.value = "Facebook"
    } else {
      x.className = "topnav";
      fb.innerHTML.value = ""
    }
  }