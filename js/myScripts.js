    function myDate() {
        var timeselect = document.getElementById("selectTimeZone");
        var newHeure;
        var date = new Date();
        var leMois = ["January", "February", "March","April", "May", "June", "July",
                        "August", "September", "October","November", "December"];
        var jour = date.getDate();
        var mois = date.getMonth();
        var annee = date.getFullYear();
        var heure = date.getHours();
        var minute = date.getMinutes();
        var seconde = date.getSeconds();
        var changeDate = document.getElementById("setDate");

        if (minute < 10) { 
            minute = '0' + minute;
        } 
        if (minute > 10) {
            minute = minute + '';
        }

        if ( timeselect.value === "") {
            changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "PST") { 
            heure = heure - 9;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "MST") {
            heure = heure - 8;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "CST") {
            heure = heure - 7;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "EST") {
            heure = heure - 6;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "AST") {
            heure = heure - 5;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "BZT") {
            heure = heure - 4;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "AT") {
            heure = heure - 3;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "WAT") {
            heure = heure - 2;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "UTC") {
            heure = heure - 1;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "EET") {
            heure = heure + 1;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "BT") {
            heure = heure + 2;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "UTC+3") {
            heure = heure + 3;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "UTC+4") {
            heure = heure + 4;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "UTC+5") {
            heure = heure + 5;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "AWST") {
            heure = heure + 6;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "JST") {
            heure = heure + 7;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "AEST") {
            heure = heure + 8;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "SBT") {
            heure = heure + 9;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }
        if ( timeselect.value === "NZST") {
            heure = heure + 10;
            return changeDate.innerHTML = jour + ' ' + leMois[mois] + ' ' + annee + ' - ' + heure + ':' + minute;
        }  
    }




document.getElementsByClassName("dropdown-item").onclick = function () {
    var menu = document.getElementsByClassName("btn btn-info btn-lg dropdown-toggle dropdown-toggle-split");
    menu.setAttribute("aria-expanded", "false");
}