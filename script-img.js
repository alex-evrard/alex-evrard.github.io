var about = document.getElementById("about");
var work = document.getElementById("work");
var school = document.getElementById("school");
var idAbout = document.getElementById("contentAbout");
var idWork = document.getElementById("contentWork");
var idAboutMobile = document.getElementById("contentAboutMobile");
var idWorkMobile = document.getElementById("contentWorkMobile");
var idSchoolMobile = document.getElementById("contentSchoolMobile");
//about = contenu caché
//idAbout = element clicable qui affiche contenu caché
//idAboutMobile = element clicable qui affiche contenu caché pour petit écran
var funcAbout = function () {
    about.classList.remove("hidden");
};
var funcWork = function () {
    work.classList.remove("hidden");
};
var funcSchool = function () {
    school.classList.remove("hidden");
};

window.addEventListener("load", function(){
    idAbout.addEventListener("click", funcAbout);
    about.addEventListener("click", function(){
        about.classList.add("hidden");
  })
});
window.addEventListener("load", function(){
    idAboutMobile.addEventListener("click", funcAbout);
    about.addEventListener("click", function(){
        about.classList.add("hidden");
  })
});

window.addEventListener("load", function(){
    idWork.addEventListener("click", funcWork);
    work.addEventListener("click", function(){
        work.classList.add("hidden");
      })
});
window.addEventListener("load", function(){
    idWorkMobile.addEventListener("click", funcWork);
    work.addEventListener("click", function(){
        work.classList.add("hidden");
      })
});

window.addEventListener("load", function(){
    idSchool.addEventListener("click", funcSchool);
    school.addEventListener("click", function(){
        school.classList.add("hidden");
      })
});
window.addEventListener("load", function(){
    idSchoolMobile.addEventListener("click", funcSchool);
    school.addEventListener("click", function(){
        school.classList.add("hidden");
      })
});
