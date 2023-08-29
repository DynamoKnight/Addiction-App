//////////////////////////////////////////
//// VARIABLES
//////////////////////////////////////////

//The Anonymous Groups
var slides = [
    {
        "color" : "red",
        "text" : "Alcoholics Anonymous",
        "image" : "liquor",
        "link" : "homeAA.html"
    },
    {
        "color" : "gold",
        "text" : "Emotions Anonymous",
        "image" : "sentiment_neutral",
        "link" : "homeEA.html"
    },
    {
        "color" : "darkorchid",
        "text" : "Gamblers Anonymous",
        "image" : "casino",
        "link" : "homeGA.html"
    },
    {
        "color" : "seagreen",
        "text" : "Narcotics Anonymous",
        "image" : "medication",
        "link" : "homeNA.html"
    },
    {
        "color" : "coral",
        "text" : "Overeaters Anonymous",
        "image" : "lunch_dining",
        "link" : "homeOA.html"
    },
    {
        "color" : "deeppink",
        "text" : "Sex and Love Anonymous",
        "image" : "favorite",
        "link" : "homeSLAA.html"
    },
    {
        "color" : "royalblue",
        "text" : "Workaholics Anonymous",
        "image" : "work",
        "link" : "homeWA.html"
    }
]

//Carousel initial values
var slideNum = 0;
var prev = document.getElementById("prevbtn");
var next = document.getElementById("nextbtn");
var curSlide = document.getElementById("slide" + slideNum);
var prevSlide = document.getElementById("slide" + (slides.length - 1));
var nextSlide = document.getElementById("slide" + (slideNum + 1));

//All the navigation menus on each page
var nav = document.getElementById("menu");

//////////////////////////////////////////
//// DO STUFF
//////////////////////////////////////////

createNavigationMenu();
var title = document.getElementsByTagName("title");
for(var i = 0; i < slides.length; i++){
    if (title[0].innerHTML == slides[i].text){
        nav.style.background = slides[i].color;
        break;
    }
}

/////////////////////////////////
//Only on the Home page!
//Initializes the carousels starting appearance

//window.onload = init();
if(title[0].innerHTML == "Addiction App"){
    for (var i = 0; i < slides.length; i++){
        var slideID = document.getElementById("slide" + (i));
        slideID.style.backgroundColor = slides[i].color;
        slideID.setAttribute("index",i)
        //Google icons
        slideID.innerHTML = slides[i].image;
        slideID.onclick = openWin;
    }
//Shows the carousel when page first loads
showCarousel();
}
/////////////////////////////////

//////////////////////////////////////////
//// FUNCTIONS
//////////////////////////////////////////

//Opens a page corresponding with the index of the slide in the array
function openWin(event){
 var slide = event.target;
 var index = slide.getAttribute("index");
 window.open(slides[index].link,"_self");
}

//Creates the navigation menu on every page
function createNavigationMenu(){
    //Titles
    var h1 = document.createElement("h1");
    var a = document.createElement("a");
    a.appendChild(document.createTextNode("Addiction App"));
    a.setAttribute("href","addiction.html");
    h1.appendChild(a);

    //Menu links
    var ul1 = document.createElement("ul");

    //About page link
    var li1 = document.createElement("li");
    a = document.createElement("a");
    a.appendChild(document.createTextNode("About"));
    a.setAttribute("href","#");
    li1.appendChild(a);

    //Resources page link
    var li2 = document.createElement("li");
    a = document.createElement("a");
    a.appendChild(document.createTextNode("Resources"));
    a.setAttribute("href","#");
    a.setAttribute("class","dropdown");

    var resources = document.createElement("ul");
    for(var i = 0; i < slides.length; i++){
        var rsc = document.createElement("li");
        var rscLink = document.createElement("a");
        // Sets the text and link of the specific resource
        rscLink.appendChild(document.createTextNode(slides[i].text));
        rscLink.setAttribute("href",slides[i].link);
        rsc.appendChild(rscLink);
        resources.appendChild(rsc);
    }

    li2.appendChild(a);
    li2.appendChild(resources);
    ul1.appendChild(li1);
    ul1.appendChild(li2);

    //Search bar
    var searchbox = document.createElement("div");
    searchbox.setAttribute("class","searchbox");
    var form = document.createElement("form");
    form.setAttribute("action","google.com");

    var search = document.createElement("input");
    search.setAttribute("type","text");
    search.setAttribute("placeholder","Search..");
    search.setAttribute("name","search")

    var icon = document.createElement("i");
    icon.setAttribute("class","icons");
    icon.innerHTML = "search";
    var button = document.createElement("button");
    button.setAttribute("type","submit");

    button.appendChild(icon);
    form.appendChild(search);
    form.appendChild(button);
    searchbox.appendChild(form);

    //Adds everything into each page
    nav.appendChild(h1);
    nav.appendChild(ul1);
    nav.appendChild(searchbox);

}

//Sets the positions of the slides
function showCarousel(){
    curSlide.style.display = "block";
    curSlide.style.left = "45%";
    curSlide.style.width = "200px";
    curSlide.style.height = "200px";
    curSlide.style.filter = "brightness(100%)";
    curSlide.style.zIndex = "992";
    curSlide.style.fontSize = "200px";

    prevSlide.style.display = "block";
    prevSlide.style.width = "150px";
    prevSlide.style.height = "150px";
    prevSlide.style.filter = "brightness(70%)";
    prevSlide.style.left = "35%";
    prevSlide.style.zIndex = "991";
    prevSlide.style.fontSize = "150px";

    nextSlide.style.display = "block";
    nextSlide.style.left = "57%";
    nextSlide.style.width = "150px";
    nextSlide.style.height = "150px";
    nextSlide.style.filter = "brightness(70%)";
    nextSlide.style.fontSize = "150px";
}

//Hides the previous slides
function hideCarousel(){
    curSlide.style.display = "none";
    prevSlide.style.display = "none";
    nextSlide.style.display = "none";
}

//When the next button is clicked
next.addEventListener('click',function(){
    hideCarousel();
    //It shifts to the next slide
    prevSlide = curSlide;
    curSlide = nextSlide;
    slideNum++;
    //Has to reset to cycle back
    if(slideNum >= slides.length){
        slideNum = 0;
    }
    //The next slide has to cycle back
    if(slideNum == (slides.length - 1)){
        nextSlide = document.getElementById("slide0");
    }
    //The next slide is the one after
    else{
        nextSlide = document.getElementById("slide" + (slideNum + 1));
    }
    showCarousel();

});
//When the prev button is clicked
prev.addEventListener('click',function(){
    hideCarousel();
    //It shifts back to the previous slide
    nextSlide = curSlide;
    curSlide = prevSlide;
    slideNum--;
    //Has to reset to cycle back
    if(slideNum < 0){
        slideNum = slides.length - 1;
    }
    //The prev slide can't be -1
    if(slideNum == 0){
        prevSlide = document.getElementById("slide" + (slides.length - 1));
    }
    //The prev slide is the one before
    else{
        prevSlide = document.getElementById("slide" + (slideNum - 1));
    }
    showCarousel();

});


//The entire US map is an image that has several paths that represent a state, which is acheived by obtaining coordinates of every corner of a state. 
document.addEventListener('mouseover', function (e) {
    if (e.target.tagName == 'path') {
        var state = e.target.dataset.name;
        document.getElementById("state-name").innerHTML = state;
    }
    else {
    }
});