var myIndex = 0; /**  Slideshow Javascript  **/
displaycontainer();

function displaycontainer() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
myIndex++;
    if (myIndex > x.length) {myIndex = 1;}
    x[myIndex-1].style.display = "block";
    setTimeout(displaycontainer, 3000);

}

/** transition images slide in **/

