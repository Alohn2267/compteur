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
// Nom des VACANCES
nom_vacs = ["de Noël", "d'hiver", "de printemps", "d'été",]

// Dates vacances et rentrées
min_vacs_A = ["2021-12-17T00:00", "2022-02-11T00:00", "2022-04-15T00:00", "2022-07-07T00:00"]
min_vacs_B = ["2021-12-17T00:00", "2022-02-04T00:00", "2022-04-08T00:00", "2022-07-07T00:00"]
min_vacs_C = ["2021-12-17T00:00", "2022-02-18T00:00", "2022-04-22T00:00", "2022-07-07T00:00"]
min_vacs = []

// Zones
$('.zone option[value="C"]').prop('selected',true);
function zone(zone) {
    min_vacs.push(min_vacs_A[numero_vacs_nb-1], min_vacs_B[numero_vacs_nb-1], min_vacs_C[numero_vacs_nb-1],)
    for (let i = 0; i < 2; i++) {
        int_zone = parseInt(zone, 36)-10;
        if(int_zone==i) {
            // $(".cal").attr({
            //     "value": min_vacs[i],
            //     "min": min_vacs[i],
            //     "max": Ajout_jour(min_vacs[i], 2)
            // });
            var picker = new Pikaday({
                field: document.getElementById('cal'),
                maxDate: Ajout_jour(min_vacs[i], 2),
                minDate: min_vacs[i]
              });
        }
    }
    calendrier()
}

function Ajout_jour(date, jours) {
    var nouvelle = new Date(date);
    nouvelle.setDate(nouvelle.getDate() + jours);
    return nouvelle;
}

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
function move(end, beginning) {
    etoile = $(".etoile").clone()
    window.actualisation1 = setTimeout("move(" + end + "," + beginning + ");", 1000);
    if (width <= 100) {
        mnt = new Date();
        width = (Math.round((100/(end-beginning)*(mnt-beginning))*100))/100 // Arrondi au centieme
        myBar.style.width = width + "%";
        txt_bar.innerHTML = width  + "% de déjà fait !";
        etoile.appendTo("#txt_bar");
    } else {
    myBar.style.width = 99 + "%";
    txt_bar.innerHTML = "En vacances !";
    clearInterval(window.actualisation1);
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
    compte_a_rebours() // Met les bonnes valeurs
    load() // Cercles rapides
}

// CONVERTI DATE DE INPUT EN UNIX TIMESTANP
function unix(OG_date){
    var unixtime = Date.parse(OG_date)
    clearInterval(window.actualisation1);
    move(unixtime, 1636354800000)
}

// Compte à rebours
function compte_a_rebours() {
    var date_actuelle = new Date();
    var date_evenement = new Date(Date_)
    var total_secondes = (date_evenement - date_actuelle) / 1000;
    if(date_actuelle >= date_evenement) {
        $("body").css("background-image", "url('NOEL.png')")
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
            if (temps[i-4] <= 1){
                temps[i+4] = " " + temps[i];
                mot_jour = temps[11]; mot_heure = temps[10]; mot_minute = temps[9]; mot_seconde = temps[8];
            }

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

function rentrée() {
    //Utile si user n'apele pas Zone() avant
    min_vacs.push(min_vacs_A[numero_vacs_nb-1], min_vacs_B[numero_vacs_nb-1], min_vacs_C[numero_vacs_nb-1],)
    zone = $(".zone").val()
    var date_actuelle = new Date();
    for (let i = 0; i < 2; i++) {
        int_zone = parseInt(zone, 36)-10; // Met la lettre de la zone en chiffre -1
        if(int_zone==i) {
            var date_evenement = Ajout_jour(min_vacs[i], 15)
        }
    }
    if(date_actuelle >= date_evenement) {
        $(".aligner").replace(Garder_aligner)
        nom_vacances(); // Change le nom des Vacances
        zone(zone) // Met le calendrier avec les bonnes dates
        load() // Cercles rapides
        return;
    };
}
nom_vacances();
console.log("Js lié");