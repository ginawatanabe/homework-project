window.onload = function() {
  var day = document.querySelectorAll(".days li");
  var sidebar = document.getElementById('sidebar');


for (var i = 0; i<day.length; i++) {
  day[i].onclick = function() {
    console.log("Hello");
    var thing = document.createElement("div");
    sidebar.appendChild(thing);
    thing.setAttribute("class", "thing");
  }
}

}
