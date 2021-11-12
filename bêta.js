// FAIT QUE LA TRANSITION AU DéBUT NE SOIS PAS HYPER LENTE
function load() {
    setTimeout(function () {
        $(".circle_animation_j").css("transition", "all 86400s linear");
        $(".circle_animation_sec").css("transition", "all 1s linear");
        $(".circle_animation_h").css("transition", "all 3600s linear");
        $(".circle_animation_min").css("transition", "all 60s linear");
    }, 500);
}
load()
// PRINT (pcq c'est + rapide)
function print(args) {
    console.log(args)
}

// CERCLE POUR JOURS
var time = 60;
var initialOffset = '440';
var clone_suppr = $(".suppr").clone();

// BAR DE CHARGEMENT
var i = 0;
var width = 0
function move(end, beginning, now) {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var txt = document.getElementById("txt_bar")
        frame()
        var id = setInterval(frame, 10000);
        function frame() {
            calcul = 100/(end-beginning)*(now-beginning)
            calcul1 = calcul*100
            calcul1 = Math.round(calcul1)
            calcul1 = calcul1/100
            // print(calcul1 + "%")
            if (width >= 100) {
            clearInterval(id);
            i = 0;
            } else {
            var width = calcul1;
            elem.style.width = width + "%";
            txt.innerHTML = width  + "% de déjà fait !";
            }
        }
    }
}
move(1639751100000, 1636354800000, (Date.now()))
// move(1636751100000, 1636354800000, (Date.now()))
// Compte à rebours
function compte_a_rebours()
{
    var compte_a_rebours = document.getElementById("compte_a_rebours");

    var date_actuelle = new Date();
    var date_evenement = new Date("Dec 17 15:25:00 2021");
    var total_secondes = (date_evenement - date_actuelle) / 1000;
    // if(date_actuelle >= date_evenement) {
    //     aligner.innerHTML = "En vacances !";
    //     return;
    // }

    if (total_secondes > 0)
    {
        //Init tous les nbs
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        // Init tous les mots (avec des "s" dès le début)
        var mot_jour = " jours";
        var mot_heure = " heures";
        var mot_minute = " minutes";
        var mot_seconde = " secondes";

        // Enlève le "s" si il n'y en a qu'un
        if (jours <= 1){mot_jour = " jour";}
        
        // Enlève le "s" si il n'y en a qu'un ou zero
        if (heures <= 1){mot_heure = " heure";}

        // Enlève le "s" si il n'y en a qu'un
        if (minutes <= 1){mot_minute = " minute";}

        // Enlève le "s" si il n'y en a qu'un
        if (secondes <= 1){mot_seconde = " seconde";}
    }

    // Cercles secondes
    $('.circle_animation_sec').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.seconde_h3').text(secondes);
            $('.mot_seconde_h3').text(mot_seconde);
        $('.circle_animation_sec').css('stroke-dashoffset', initialOffset-((secondes)*(initialOffset/time)));
    
        // Cercles minutes
    $('.circle_animation_min').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.min_h3').text(minutes);
            $('.mot_min_h3').text(mot_minute);
        $('.circle_animation_min').css('stroke-dashoffset', initialOffset-((minutes)*(initialOffset/time)));
    
    // Cercles heures
    $('.circle_animation_h').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.heure_h3').text(heures);
            $('.mot_heure_h3').text(mot_heure);
        $('.circle_animation_h').css('stroke-dashoffset', initialOffset-((heures)*(initialOffset/time)));
    
    // Cercles jours
    $('.circle_animation_j').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.jour_h3').text(jours);
            $('.mot_jour_h3').text(mot_jour);
        $('.circle_animation_j').css('stroke-dashoffset', initialOffset-((jours)*(initialOffset/time)));
    // Transition quali a la fin
    if(secondes == '') {
        clone_suppr = $('.secondes_item').detach();
        $(".circle_animation_sec").css("transition", "all 0.5s linear");
        setTimeout(function () {
            $(".circle_animation_sec").css("transition", "all 1s linear");
        }, 100);
        i=0;
    }else{
        append_txt(i)
        i=1
    }
    if(minutes == '') {
        $(".circle_animation_min").css("transition", "all 0.5s linear");
        setTimeout(function () {
            $(".circle_animation_min").css("transition", "all 1s linear");
        }, 100);
    }
    if(heures == '') {
        $(".circle_animation_h").css("transition", "all 0.5s linear");
        setTimeout(function () {
            $(".circle_animation_h").css("transition", "all 1s linear");
        }, 100);
    }
    if(jours == '') {
        $(".circle_animation_j").css("transition", "all 0.5s linear");
        setTimeout(function () {
            $(".circle_animation_j").css("transition", "all 1s linear");
        }, 100);
    }
    var actualisation = setTimeout("compte_a_rebours();", 1);
}

function append_txt(arg){
    if(arg==0){
        $("body").append(clone_suppr);
    }
}
console.log("Js lié")
compte_a_rebours();