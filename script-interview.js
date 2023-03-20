var john = document.getElementById("john");
var flore = document.getElementById("flore");
var paul = document.getElementById("paul");
var jordan = document.getElementById("jordan");

var iJohn = document.getElementById("interviewJohn");
var iFlore = document.getElementById("interviewFlore");
var iPaul = document.getElementById("interviewPaul");
var iJordan = document.getElementById("interviewJordan");

var funcJohn = function () {
    iJohn.classList.remove("hidden");
    iFlore.classList.add("hidden");
    iPaul.classList.add("hidden");
    iJordan.classList.add("hidden");
};
var funcFlore = function () {
    iFlore.classList.remove("hidden");
    iJohn.classList.add("hidden");
    iPaul.classList.add("hidden");
    iJordan.classList.add("hidden");
};
var funcPaul = function () {
    iJohn.classList.add("hidden");
    iFlore.classList.add("hidden");
    iPaul.classList.remove("hidden");
    iJordan.classList.add("hidden");
};
var funcJordan = function () {
    iJohn.classList.add("hidden");
    iFlore.classList.add("hidden");
    iPaul.classList.add("hidden");
    iJordan.classList.remove("hidden");
};

window.addEventListener("load", function(){
    john.addEventListener("click", funcJohn);
});
window.addEventListener("load", function(){
    flore.addEventListener("click", funcFlore);
});
window.addEventListener("load", function(){
    paul.addEventListener("click", funcPaul);
});
window.addEventListener("load", function(){
    jordan.addEventListener("click", funcJordan);
});

