// Variables utiles partout
temps1 = [
    "seconde", "minute", "heure", "jour", // 0-3
]

// Affiche ou retires les informations complémentaires
function etoile1(type) {
        $(".etoile_" + type).css("display", "block");
    setTimeout(function () {
            $(".etoile_" + type).css("display", "none");
    }, 2500);
}
//[DEV] Essayer de rendre ça en 1 seule ARRAY
// Zones
$('.zone option[value="C"]').prop('selected',true);
function zone(zone) {
    if(zone=="A") {
        $(".cal").attr({
            "value": min_vacs_A[numero_vacs_nb-1],
            "min": min_vacs_A[numero_vacs_nb-1],
            "max": max_vacs_A[numero_vacs_nb-1]
        });
    }
    if(zone=="B") {
        $(".cal").attr({
            "value": min_vacs_B[numero_vacs_nb-1],
            "min": min_vacs_B[numero_vacs_nb-1],
            "max": max_vacs_B[numero_vacs_nb-1]
        });
    }

    if(zone=="C") {
        $(".cal").attr({
            "value": min_vacs_C[numero_vacs_nb-1],
            "min": min_vacs_C[numero_vacs_nb-1],
            "max": max_vacs_C[numero_vacs_nb-1]
        });
    }
    calendrier()
}
// Nom des VACANCES
nom_vacs = ["de Noël", "d'hiver", "de printemps", "d'été",]
// Dates vacances et rentrées
//[DEV] Tenté ARRAY
min_vacs_A = ["2021-12-17T00:00", "2022-02-11T00:00", "2022-04-15T00:00", "2022-07-07T00:00"]
max_vacs_A = ["2021-12-19T00:00", "2022-02-13T00:00", "2022-04-17T00:00", "2022-07-09T00:00"]
rentree_A = ["2022-01-02T00:00", "2022-02-28T00:00", "2022-05-02T00:00", "2022-09-01T00:00"]

min_vacs_B = ["2021-12-17T00:00", "2022-02-04T00:00", "2022-04-08T00:00", "2022-07-07T00:00"]
max_vacs_B = ["2021-12-19T00:00", "2022-02-06T00:00", "2022-04-10T00:00", "2022-07-09T00:00"]
rentree_B = ["2022-01-02T00:00", "2022-02-21T00:00", "2022-04-25T00:00", "2022-09-01T00:00"]

min_vacs_C = ["2021-12-17T00:00", "2022-02-18T00:00", "2022-04-22T00:00", "2022-07-07T00:00"]
max_vacs_C = ["2021-12-19T00:00", "2022-02-20T00:00", "2022-04-24T00:00", "2022-07-09T00:00"]
rentree_C = ["2022-01-02T00:00", "2022-03-06T00:00", "2022-05-08T00:00", "2022-09-01T00:00"]

numero_vacs_nb = 0
function nom_vacances() {
    etoile = $(".etoile1").clone()
    $(".Titre").text("Les vacances " + nom_vacs[numero_vacs_nb] + " seront dans :");
    etoile.appendTo(".Titre")
    numero_vacs_nb++;
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

// CERCLE POUR jour
var time = 60;
var initialOffset = '440';

// BAR DE CHARGEMENT
var width = 0
function move(end, beginning, now) {
    etoile = $(".etoile").clone()
    window.actualisation1 = setTimeout("move(" + end + "," + beginning + "," + now + ");", 1000);
    width = (Math.round((100/(end-beginning)*(now-beginning))*100))/100
    if (width >= 100) {
    myBar.style.width = 99 + "%";
    txt_bar.innerHTML = "En vacances !";
    clearInterval(window.actualisation1);
    } else {
    myBar.style.width = width + "%";
    txt_bar.innerHTML = width  + "% de déjà fait !";
    etoile.appendTo("#txt_bar");
    }
}

function calendrier() {
    window.Date_ = $(".cal").val(); //Fonction globale
    unix(Date_)
    for ( let i = 4; i < 8; i++) {
    $(".circle_animation_" + temps1[i]).css("transition", "all 0.5s linear");
    setTimeout(function () {
        $(".circle_animation_" + temps1[i]).css("transition", "all 1s linear");
    }, 100);} // Fait que pour passer du nombre originel au nouveau nombre ça prenne seulement 0.5 sec et non l'unitée changée
    compte_a_rebours()
    load()
}

// CONVERTI DATE DE INPUT EN UNIX TIMESTANP
function unix(OG_date){
    var unixtime = Date.parse(OG_date)
    print(unixtime)
    clearInterval(window.actualisation1);
    move(unixtime, 1636354800000, Date.now())
}

// Compte à rebours
function compte_a_rebours() {
    var date_actuelle = new Date();
    var date_evenement = new Date(Date_)
    var total_secondes = (date_evenement - date_actuelle) / 1000;
    if(date_actuelle >= date_evenement) {
        $("body").css("background-image", "url('noel.png')")
        $("#myBar").css("border-bottom-right-radius", "25px")
        $("#myBar").css("border-top-right-radius", "25px")
        rentrée()
        window.Garder_aligner = $("#aligner").clone()
        $("#aligner").text("Maintenant !")
        return;
    }
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
            if (temps[i-4] <= 1){temps[i+4] = " " + temps[i];
        mot_jour = temps[11]; mot_heure = temps[10]; mot_minute = temps[9]; mot_seconde = temps[8];}

        //Cercles
            $(('.circle_animation_' + temps[i])).css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.' + temps[i] + "_h3").text(temps[i-4]);
            $(".mot_" + temps[i] + "_h3").text(temps[i+4]);
            $(('.circle_animation_' + temps[i])).css('stroke-dashoffset', initialOffset-((temps[i-4])*(initialOffset/time)));

        // Transition quali a la fin
            if(temps[i-4] == "0") {
                $(".circle_animation_" + temps[i]).css("transition", "all 0.5s linear");
                setTimeout(function () {
                    $(".circle_animation_" + temps[i]).css("transition", "all 1s linear");
                }, 100);}
        }
    }
    var actualisation = setTimeout("compte_a_rebours();", 1);
}
//[DEV] FAIRE ça EN ARRAY
function rentrée() {
    print("yo")
    zone = $(".zone").val()
    var date_actuelle = new Date();
    if(zone=="A"){
        var date_evenement = new Date(rentree_A[numero_vacs_nb])
    }
    if(zone=="B"){
        var date_evenement = new Date(rentree_B[numero_vacs_nb])
    }
    if(zone=="C"){
        var date_evenement = new Date(rentree_C[numero_vacs_nb])
    }
    if(date_actuelle >= date_evenement) {
        print("yoo")
        $(".aligner").replace(Garder_aligner)
        nom_vacances();
        zone(zone)
        load()
        calendrier()
        return;
    };
}
nom_vacances();
console.log("Js lié");