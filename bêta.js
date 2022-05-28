// Initialiser Les Variables et Fonctions
temps1 = ["seconde", "minute", "heure", "jour"]
numero_vacs_nb_A = 1
numero_vacs_nb_B = 1
numero_vacs_nb_C = 1
function numero_vacs_nb(plus) {
    nb_zone_ = $(".zone").val()
    if(nb_zone_ == "A") {
        if(plus == ("+")) {
            numero_vacs_nb_A++;
        }else if(plus == ("-1")) {
            return numero_vacs_nb_A-2; // 2 pcq j'init avec ça qqpart
        } else if(plus==("-1V")) {
            return numero_vacs_nb_A-1;
        }else {return numero_vacs_nb_A;}
    }if(nb_zone_ == "B") {
        if(plus == ("+")) {
            numero_vacs_nb_B++;
        }else if(plus == ("-1")) {
            return numero_vacs_nb_B-1;
        } else{return numero_vacs_nb_B;}
    }if(nb_zone_ == "C") {
        if(plus == ("+")) {
            numero_vacs_nb_C++;
        }else if(plus == ("-1")) {
            return numero_vacs_nb_C-1;
        } else{return numero_vacs_nb_C;}
    }
}
// Nom des VACANCES
nom_vacs = ["d'hiver", "de printemps", "d'été", "de la Toussaint", "de noël",]

// CERCLE POUR jour
var time = [60, 60, 60, 365];
var initialOffset = '440';
// Dates vacances et rentrées
var min_vacs_A = ["2022-02-12T00:00", "2022-04-16T00:00", "2022-07-07T00:00", "2022-10-22T00:00", "2022-12-17T00:00", "2023-02-04T00:00", "2023-04-08T00:00"]
var min_vacs_B = ["2022-02-05T00:00", "2022-04-09T00:00", "2022-07-07T00:00", "2022-10-22T00:00", "2022-12-17T00:00", "2023-02-11T00:00", "2023-04-15T00:00"]
var min_vacs_C = ["2022-02-19T00:00", "2022-04-23T00:00", "2022-07-07T00:00", "2022-10-22T00:00", "2022-12-17T00:00", "2023-02-18T00:00", "2023-04-22T00:00"]
var Brentrée = ["2021-12-18T00:00", "2022-02-21T00:00", "2022-04-25T00:00", "2022-09-01T00:00", "2022-11-07T00:00", "2023-01-03T00:00", "2023-02-20T00:00", "2023-04-24T00:00", "2023-07-08T00:00"]
var Arentrée = ["2021-12-18T00:00", "2022-02-28T00:00", "2022-05-02T00:00", "2022-09-01T00:00", "2022-11-07T00:00", "2023-01-03T00:00", "2023-02-27T00:00", "2023-05-02T00:00", "2023-07-08T00:00"]
var Crentrée = ["2021-12-18T00:00", "2022-03-07T00:00", "2022-05-09T00:00", "2022-09-01T00:00", "2022-11-07T00:00", "2023-01-03T00:00", "2023-03-06T00:00", "2023-05-09T00:00", "2023-07-08T00:00"]
var min_vacs = []

nom_vacances();

var Titredouze = $(".Titre").html()
var Garder_aligner = $(".aligner").html()
function Save() {
    let x = getCookie("save")
    if (x ==  "") {
        $(".Cookie").css("display", "block");
        $(".PasCookies").css("display", "none");
    } else {
        $(".Cookie").css("display", "none");
        $(".PasCookies").css("display", "unset");
    }
}
Save()
if (getCookie("save") !=  "") {
    biscui0()
    $(".sauvgarder").css("display", "none");
    zone(getCookie("zone"))
} else {
    zone($(".zone").val("B"))
    window.addEventListener('load', function () {
    $("#opt_perso").attr("disabled", "disabled");
    zone($(".zone").val())
      })
}
$("#menu").click(function() {
    menu("off")
});
  
$('.Som-Cla').click(function(event){
event.stopPropagation();
});

function Choix_Cookies(bool) {
    if (bool == true) {
        biscui0()
        setCookie("save", true, 45)
        $(".Cookie").css("display", "none");
        $(".sauvgarder").css("display", "none");
        $("#opt_perso").removeAttr("disabled", "disabled");
        Save()
    } else {
        zone($(".zone").val())
        $("#opt_perso").attr("disabled", "disabled");
        $(".Cookie").css("display", "none");
    }
}
function menu(IO) {
    if(IO=="on") {document.getElementById("menu").style.display = "block";}
    if(IO=="off") {document.getElementById("menu").style.display = "none";}
}
menu("off")
$(document).keyup(function(e) {
    if (e.key === "Escape") {
       menu('off')
   }
});


function virgule() {
    cookie = Math.trunc($("#virgule").val());
    let x = getCookie("save")
    if (x !=  "") {
        setCookie("virgule", cookie, 45);
    }
    $("#nb_virgule").html(cookie)
    return cookie
}

function MettreAuMillieu() {
    let x = parseInt(($("#txt_bar").css("width")).slice(0, -2));
    let x1 = parseInt(($("#myProgress").css("width")).slice(0, -2));
    $("#txt_bar").css("padding-left", (x1-x)/2);
}
window.addEventListener('resize', MettreAuMillieu);
// THEME CLAIR / SOMBRE
function biscui0() {
    var cookie1 = getCookie("virgule");
    if(cookie1=="") {
        cookie1 = 2
        setCookie("virgule", cookie1, 45)
    }
    $("#nb_virgule").html(cookie1)
    $("#virgule").val(cookie1);
    $("#opt_perso").removeAttr("disabled", "disabled");
    window.addEventListener('load', function () {
        zone($(".zone").val())
      })
    let theme1 = getCookie("theme")
    if(theme1) {
        theme1 = getCookie("theme")
        $("body").attr('class', theme1);
        setCookie("virgule", theme1, 45)
        theme("o")
    } else {
        setCookie("theme", "", 45)
    }
    cercle_couleur()
    let zone1 = getCookie("zone")
    if (zone1 !=""){
        $('.zone option[value=' + zone1 + ']').prop('selected',true);
    }
    if(getCookie("date") ==  "") {
        setCookie("date_debut", $("#cal_debut").val(), 45)
        setCookie("date", $("#cal_fin").val(), 45)
    
    }
    if (zone1 == "Personnalisé" && getCookie("date") !="" && getCookie("save") !="" && getCookie("date_debut") !="") {
        $("#cal_fin").val(getCookie("date"))
        $("#cal_debut").val(getCookie("date_debut"))
    }
}

function theme(o) {
    if(!o) {
    document.body.classList.toggle("clair")
    }
    let x = getCookie("save")
    if (x !=  "") {
        setCookie("theme", $("body").attr('class'), 45)
    }
    if(document.body.classList.contains("clair")){
        couleur.src = "Images/lune.png"
        menu_couleur.src = "Images/Noir-Engrenage.png"
        fermer.src = "Images/Noir-Fermer.png"
    } else {
        couleur.src = "Images/soleil.png"
        menu_couleur.src = "Images/Blanc-Engrenage.png"
        fermer.src = "Images/Blanc-Fermer.png"
    }
}

// Affiche ou retires les informations complémentaires
function etoile1(type) {
        $(".etoile_" + type).css("display", "block");
        $("#début").css("display", "block");
    setTimeout(function () {
            $(".etoile_" + type).css("display", "none");
            $("#début").css("display", "none");
        }, 2500);
}

function nom_vacances() {
    if (min_vacs_A.length >= numero_vacs_nb("-1")) {
        numero_vacs_nb("+");
    }
    nvn = numero_vacs_nb()
    do {
        nvn = nvn-5;
    } while (nvn>5);
    $("span#vacs").text(nom_vacs[numero_vacs_nb()]);

    // etoile = $(".etoile1").clone()
}

// Zones
function zone(zone) {
    for (i in temps1) {
        $(".circle_animation_" + temps1[i]).css("transition", "all 0.5s linear");
        $(".circle_animation_" + temps1[i]).css("transition", "all 0,25s linear"); // Jsp pourquoi ça marche mais à pas toucher
    }
    min_vacs = [];
    min_vacs.push(min_vacs_A[numero_vacs_nb("-1")], min_vacs_B[numero_vacs_nb("-1")], min_vacs_C[numero_vacs_nb("-1")], getCookie("date"),);
    if(zone=="Personnalisé"){
        if(getCookie("save")!=""){
            $("#cal_fin").val(getCookie("date"))
            $("#cal_debut").val(getCookie("date_debut"))
        }
        $("#cal_fin").removeAttr('disabled');
        $("#cal_debut").removeAttr('disabled');
    } else {
        $('#cal_fin').attr('disabled', 'disabled;');
        $('#cal_debut').attr('disabled', 'disabled;');

    }
    for (let i = 0; i < 3; i++) {
        window.int_zone = parseInt(zone, 36)-10; // Converti lettre en nombre
        // [Dev] Marche pas sous certain OS
        if(int_zone==i) {
            $("#cal_fin").val(min_vacs[i])
            $("#cal_fin").attr({
                "min": Ajout_jour(min_vacs[i], -2),
                "max": Ajout_jour(min_vacs[i], 2),
            });
        }
    }
    let x = getCookie("save")
    if (x !=  "") {
        setCookie("zone", zone, 45)
    }
    load()
    calendrier()
}

function Ajout_jour(date, jours) {
    var nouvelle = new Date(date);
    nouvelle.setDate(nouvelle.getDate() + jours);
    return nouvelle;
}

// FAIT QUE LA TRANSITION AU DéBUT NE SOIS PAS HYPER LENTE
function load() {
    setTimeout(function () {
        $(".circle_animation_jour").css("transition", "all 86400s linear");
        $(".circle_animation_seconde").css("transition", "all 1s linear");
        $(".circle_animation_heure").css("transition", "all 3600s linear");
        $(".circle_animation_minute").css("transition", "all 60s linear");
    }, 500);
}
load()

// Console.log() (pcq c'est + rapide)
function print(args) {
    console.log(args)
}
function dateIsValid(date) {
    return !Number.isNaN(new Date(date).getTime());
  }
// BAR DE CHARGEMENT
var width = 0
function move(end, beginning) {
    const date2 = new Date(beginning);
    const début1 = date2.toLocaleDateString("locales");
    début2 = (date2.toISOString().replace('Z', '').slice(0, -4));
    if ($(".zone").val() !="Personnalisé") {
        $("#cal_debut").val(début2)
    }
    time1 = (end-beginning)/1000
    time2 = Math.floor(time1/(60*60*24))
    début.innerHTML = début1
    if (time2 > 0) {
        time.pop()
        time.push(time2)}
    window.actualisation1 = setTimeout("move(" + end + "," + beginning + ");", 1000);
    aujrd = Date.parse(Date())
    mnt = new Date();
    width = Math.round((beginning-aujrd)/(beginning-end)*100*(10**virgule()))/10**virgule()
    myBar.style.width = width + "%";
    txt_bar.innerHTML = width  + "% de déjà fait !";
    MettreAuMillieu()
    if ( $('.aligner').children().length <= 0 ) {
        RemettreApresVacances()
    }
    $("#myBar").css({"border-bottom-right-radius":"0px", "border-top-right-radius":"0px"})
    if ((width >= 100) || (width <= 0)) {
        $("#myBar").css({"border-bottom-right-radius":"25px", "border-top-right-radius":"25px"})
        myBar.style.width = 100 + "%";
        txt_bar.innerHTML = "En vacances !";
        window.LaZone = $(".zone").html()
        zoneVal = $(".zone").val()
        $("p.Titre").replaceWith('<p class=\"Titre\"><select style=\'color:black\' class="zone" name="Zone" onchange="zone(value);">' + window.LaZone + "</select> en Vacances !" + "</div>");
        $(".zone").val(zoneVal)
        clearInterval(window.actualisation1);
    }
}
function personnalise() {
    if (getCookie("save") != "") {
        setCookie("date", $("#cal_fin").val(), 45)
        setCookie("date_debut", $("#cal_debut").val(), 45)
        $(".zone").val("Personnalisé")
        calendrier()
        clearInterval(window.actualisation1);
        move(Date.parse($("#cal_fin").val()), Date.parse($("#cal_debut").val()))
        RemettreApresVacances()
    } else {
        save()
    }
}
function calendrier() {
    globalThis.Date_ = $("#cal_fin").val(); //Fonction globale
    unix(Date_)
    for ( let i = 4; i < 8; i++) {
        $(".circle_animation_" + temps1[i]).css("transition", "all 0.5s linear");
        setTimeout(function () {
        $(".circle_animation_" + temps1[i]).css("transition", "all 1s linear");
        }, 100);
    } // Fait que pour passer du nombre originel au nouveau nombre ça prenne seulement 0.5 sec et non l'unitée changée
    compte_a_rebours() // Met les bonnes valeurs
    load() // Cercles rapides
    let z = getCookie("save")
    // if (z !="") {
    //     setCookie("date", Date_, 45)
    // }
}

// CONVERTI DATE DE INPUT EN UNIX TIMESTANP
function unix(OG_date){
    var unixtime = Date.parse(OG_date)
    clearInterval(window.actualisation1);
    move(unixtime, fin_vacs())
}
function cercle_couleur(cercle) {
    if(cercle == undefined) {
        for (i in temps1){
            let cookie = getCookie("couleur_" + temps1[i]);
            if (cookie != "") {
                $(".circle_animation_" + temps1[i]).attr("stroke", cookie)
                $("#couleur_" + temps1[i]).val(cookie)

            }
        }
    } else {
        var x = ($("#couleur_" + cercle).val())
        $(".circle_animation_" + cercle).attr("stroke", x)
        $(".circle_animation_" + cercle).css("transition", "all 0.5s linear");
        $(".circle_animation_" + cercle).css("transition", "all 0,25s linear"); // Jsp pourquoi ça marche mais à pas toucher
        if (getCookie("save") != "") {
            setCookie("couleur_" + cercle, x, 45);
        }
    }
}
function fin_vacs() {
    if (getCookie("save")!=""){
        x = getCookie("zone")
    } else {
        x = $(".zone").val()
    }
    if((x)=="A"){
        return Date.parse(Arentrée[numero_vacs_nb("-1V")])
    }if((x)=="B"){
        return Date.parse(Brentrée[numero_vacs_nb()])
    }if((x)=="C"){
        return Date.parse(Crentrée[numero_vacs_nb()])
    }if((x)=="Personnalisé"){
        return Date.parse(getCookie("date_debut"))
    }
    // if((x)=="Personnalisé"){return Date.parse(getCookie("date"))}
}
// Compte à rebours
function compte_a_rebours() {
    window.date_actuelle = new Date();
    window.date_evenement = new Date(Date_)
    var total_secondes = (window.date_evenement - window.date_actuelle) / 1000;
    if(window.date_actuelle >= window.date_evenement) {
        $("#aligner").children().detach();
        LaZone = $(".zone").clone();
        $( "<p></p>" + LaZone).prependTo("p.Titre")
        $(".aligner").empty()
        clearInterval(actualisation)
        if(getCookie("save")!=""){
            rentrée(getCookie("zone"))
        } else {
            rentrée($(".zone").val())
        }
        return;
    } else {
        // Init tous les mots (avec des "s" dès le début)
        mot_jour = " jours";
        mot_heure = " heures";
        mot_minute = " minutes";
        mot_seconde = " secondes";
        if (total_secondes > 0) {
            //Init tous les nbs
            jour = Math.floor(total_secondes / (60 * 60 * 24));
            heure = Math.floor((total_secondes - (jour * 60 * 60 * 24)) / (60 * 60));
            minute = Math.floor((total_secondes - ((jour * 60 * 60 * 24 + heure * 60 * 60))) / 60);
            seconde = Math.floor(total_secondes - ((jour * 60 * 60 * 24 + heure * 60 * 60 + minute * 60)));
            // Init TOUT en 1 fois (mieux car pas besoin de créé 4 fonctions quasi identique mais 1 seule qui se répète 4x)
            var temps = [
                seconde, minute, heure, jour, // 0-3
                "seconde", "minute", "heure", "jour", // 4-7
                mot_seconde, mot_minute, mot_heure, mot_jour, // 8-11
            ]
            // Enlève le "s" au mot si besoin
            for ( let i = 4; i < 8; i++) {
                if (temps[i-4] <= 1){
                    temps[i+4] = " " + temps[i];
                    mot_jour = temps[11]; mot_heure = temps[10]; mot_minute = temps[9]; mot_seconde = temps[8];
                }

            //Cercles
                $(('.circle_animation_' + temps[i])).css('stroke-dashoffset', initialOffset-(1*(initialOffset/time[i-4])));
                $('.' + temps[i] + "_h3").text(temps[i-4]);
                $(".mot_" + temps[i] + "_h3").text(temps[i+4]);
                $(('.circle_animation_' + temps[i])).css('stroke-dashoffset', initialOffset-((temps[i-4])*(initialOffset/time[i-4])));

            // Transition quali a la fin
                if(temps[i-4] == "0") {
                    $(".circle_animation_" + temps[i]).css("transition", "all 0.5s linear");
                    setTimeout(function () {
                        $(".circle_animation_" + temps[i]).css("transition", "all 1s linear");
                    }, 100);}
            }
        }
        var actualisation = setTimeout("compte_a_rebours();", 500);

    }
}

function rentrée(zones) {
    MettreAuMillieu();
    min_vacs.push(min_vacs_A[numero_vacs_nb("-1")], min_vacs_B[numero_vacs_nb("-1")], min_vacs_C[numero_vacs_nb("-1")], getCookie("date"))
    window.date_actuelle = new Date();
    for (let i = 0; i < 3; i++) {
        int_zone = parseInt(zones, 36)-10; // Met la lettre de la zone en chiffre -1
        if(int_zone==i) {
            window.date_evenement = Ajout_jour(min_vacs[i], 15)
        }
    }
    if(window.date_actuelle >= window.date_evenement) {
        // [dev] Faire ça en 1 if statement avec Array
        if(zones=="A") {
            min_vacs_A.splice(0, 1);
        }if(zones=="B") {
            min_vacs_B.splice(0, 1);
        }if(zones=="C") {
            min_vacs_C.splice(0, 1);
        }
        nom_vacances(); // Change le nom des Vacances
        window.AutoriserTest = true;
        RemettreApresVacances()
        zone(zones);
        load(); // Cercles rapides
        if (save !="") {
            biscui0();
        }
        return;
    };
}
// Une fois que ce n'est plus les vacances cette fonction remet ce qui a été supprimer
function RemettreApresVacances() {
    // calendrier()
    $(".Titre").empty() // Vide le titre
    $(".aligner").empty() // Vide les ronds
    $(".Titre").replaceWith( "<p class=\"Titre\">" + Titredouze + "</p>").appendTo // Remet le titre normalement
    $("<div class=\"aligner\" id=\"aligner\">" + Garder_aligner + "</div>").replaceAll(".aligner") // Remet les ronds normalement
    save = getCookie("save")
    if(save!="") {
        biscui0();
    }
}

// FOCNTIONS POUR LES COOKIES
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
function deleteAllCookies() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    alert("Toutes les paramètres ont été supprimées.\nLa page va se réinitialisé.")
    location.reload();
}
function Sauvegarder() {
    save = getCookie("save")
    if(save!="") {
        return true;
    } else {
        return false;
    }
}
console.log("Js lié");